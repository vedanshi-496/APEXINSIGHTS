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
import { Mail } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
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
    <section className="bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              Stay Ahead of the Curve
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-xl">
              Subscribe to our newsletter for the latest industry insights, trends, and exclusive content delivered right to your inbox.
            </p>
        </div>
        <div className="mt-8 max-w-lg mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row items-start gap-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem className="flex-1 w-full">
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input className="h-12 pl-10 text-base" placeholder="Enter your email" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage className="text-left" />
                    </FormItem>
                    )}
                />
                <SubmitButton />
                </form>
            </Form>
            <p className="text-xs text-muted-foreground mt-3 text-center">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
}
