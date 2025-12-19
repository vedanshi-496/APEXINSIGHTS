import Image from 'next/image';
import { getClients } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { Client } from '@/lib/definitions';
import { Star } from 'lucide-react';

function ClientCard({ client }: { client: Client }) {
  return (
    <Card className="h-full flex flex-col justify-between text-center p-8 bg-card shadow-lg rounded-xl">
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

export default async function Clients() {
  const clients = await getClients();

  return (
    <section id="clients" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Happy Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Their success is our success. We build strong relationships based on trust and exceptional results.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {clients.map((client) => (
              <CarouselItem key={client.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <ClientCard client={client} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex left-[-50px]"/>
          <CarouselNext className="hidden sm:flex right-[-50px]"/>
        </Carousel>
      </div>
    </section>
  );
}
