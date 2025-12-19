import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ContactForm from './ContactForm';

export default function Contact() {
  const contactImage = PlaceHolderImages.find(p => p.id === 'contact-image');

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you. Fill out the form below to get started.
          </p>
        </div>
        <div className="grid md:grid-cols-1 gap-10 items-center justify-items-center">
          <div className="relative h-96 md:h-full min-h-[400px] w-full max-w-2xl">
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
          <div className="w-full max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
