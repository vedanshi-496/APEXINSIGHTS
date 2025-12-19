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
    <Button type="submit" size="lg" disabled={pending} variant="secondary" className="bg-white text-primary hover:bg-white/90">
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
    <section className="bg-primary text-primary-foreground">
      <div className="container py-8">
        <div className="grid md:grid-cols-3 items-center gap-8">
          <div className="md:col-span-1">
              <h2 className="text-2xl font-bold font-headline">Subscribe Us</h2>
          </div>
          <div className="md:col-span-2">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2 p-1.5 rounded-lg bg-primary-foreground/20">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem className="flex-1">
                        <FormControl>
                        <Input className="h-11 text-base bg-transparent border-0 text-primary-foreground placeholder:text-primary-foreground/80 focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="Enter Email Address" {...field} />
                        </FormControl>
                        <FormMessage className="text-left text-destructive-foreground" />
                    </FormItem>
                    )}
                />
                <SubmitButton />
                </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
