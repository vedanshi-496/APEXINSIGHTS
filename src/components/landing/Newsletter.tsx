'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addSubscription } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormStatus } from 'react-dom';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending}>
      {pending ? 'Subscribing...' : 'Subscribe'}
    </Button>
  );
}

export default function Newsletter() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
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
        description: result.message || "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container text-center">
        <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
                Stay up to date with the latest industry news, company updates, and special offers.
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 justify-center">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem className="flex-1">
                        <FormControl>
                        <Input className="h-12 text-base" placeholder="Enter your email address" {...field} />
                        </FormControl>
                        <FormMessage className="text-left" />
                    </FormItem>
                    )}
                />
                <SubmitButton />
                </form>
            </Form>
        </div>
      </div>
    </section>
  );
}
