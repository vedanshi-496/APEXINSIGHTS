import Image from 'next/image';
import { getClients } from '@/lib/data';
import type { Client } from '@/lib/definitions';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

function ClientCard({ client }: { client: Client }) {
  return (
    <Card className="h-full flex flex-col justify-between text-center p-8 bg-card shadow-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
       <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <CardContent className="p-0 flex-grow">
        <p className="text-muted-foreground italic text-base">&quot;{client.description}&quot;</p>
      </CardContent>
      <div className="mt-6">
        <Image
          src={client.imageUrl}
          alt={client.name}
          width={64}
          height={64}
          className="rounded-full mx-auto mb-4"
          data-ai-hint={client.imageHint}
        />
        <p className="font-semibold text-lg">{client.name}</p>
        <p className="text-sm text-muted-foreground">{client.designation}</p>
      </div>
    </Card>
  );
}

export default async function ClientsPage() {
  const clients = await getClients();

  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">Client Testimonials</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We take pride in building strong, lasting relationships. Here's what our valued clients have to say about their experience with us.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clients.map((client) => (
                  <ClientCard key={client.id} client={client} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
