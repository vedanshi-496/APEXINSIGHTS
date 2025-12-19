import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/landing/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactDetails = [
    {
        icon: Mail,
        title: "Email Us",
        value: "contact@apexinsights.com",
        href: "mailto:contact@apexinsights.com"
    },
    {
        icon: Phone,
        title: "Call Us",
        value: "+1 (555) 123-4567",
        href: "tel:+15551234567"
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: "123 Innovation Drive, Tech City",
        href: "#"
    },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    We&apos;re here to help. Whether you have a question about our services or want to start a new project, we&apos;d love to hear from you.
                </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 items-start">
                <div className="lg:col-span-3">
                   <ContactForm />
                </div>
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-2xl font-bold">Our Information</h3>
                    <div className="space-y-4">
                        {contactDetails.map((item) => (
                           <a key={item.title} href={item.href} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="bg-primary/10 text-primary p-3 rounded-full">
                                    <item.icon className="h-6 w-6"/>
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">{item.title}</p>
                                    <p className="text-muted-foreground">{item.value}</p>
                                </div>
                           </a>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
