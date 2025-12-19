import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ContactForm from './ContactForm';

export default function Contact() {
  const contactImage = PlaceHolderImages.find(p => p.id === 'contact-image');

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                 <div className="space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
                    <p className="text-lg text-muted-foreground max-w-xl">
                        Have a project in mind? We&apos;d love to hear from you. Fill out the form to get started.
                    </p>
                </div>
                <div className="w-full">
                    <ContactForm />
                </div>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px] w-full max-w-2xl lg:order-first">
                {contactImage && (
                <Image
                    src={contactImage.imageUrl}
                    alt={contactImage.description}
                    fill
                    className="object-cover rounded-xl shadow-lg"
                    data-ai-hint={contactImage.imageHint}
                />
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
