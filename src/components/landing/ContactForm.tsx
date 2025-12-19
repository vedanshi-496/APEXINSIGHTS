'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addContact } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from '@/components/ui/card';
import { useFormStatus } from 'react-dom';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  mobile: z.string().min(10, { message: "Mobile number must be at least 10 digits." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full font-semibold" size="lg" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </Button>
  );
}

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      city: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await addContact(values);

    if (result.success) {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
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
    <Card className="shadow-lg">
        <CardContent className="p-6 md:p-8">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                        <Input placeholder="123-456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                        <Input placeholder="New York" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <SubmitButton />
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
