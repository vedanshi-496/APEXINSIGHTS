'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addSubscription } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail } from 'lucide-react';
import { useFormStatus } from 'react-dom';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto font-semibold">
      {pending ? 'Subscribing...' : 'Subscribe'}
    </Button>
  );
}

export default function NewsletterForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await addSubscription(values);
    if (result.success) {
      toast({
        title: "Subscribed!",
        description: "Thanks for joining our newsletter.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.message || "Something went wrong.",
      });
    }
  }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row items-start gap-2">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem className="flex-1 w-full">
                    <FormControl>
                        <Input className="h-10 text-sm" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage className="text-left" />
                </FormItem>
                )}
            />
            <SubmitButton />
        </form>
    </Form>
  );
}
