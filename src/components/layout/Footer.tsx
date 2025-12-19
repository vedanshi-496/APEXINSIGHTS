import Link from "next/link";
import { Mountain, Twitter, Github, Linkedin } from "lucide-react";
import NewsletterForm from "../landing/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="space-y-4 md:col-span-2">
              <Link href="/" className="flex items-center space-x-2">
                <Mountain className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">Apex Insights</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-md">
                Innovative Solutions for a Digital World. We help businesses grow by leveraging cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="GitHub">
                  <Github className="h-5 w-5 hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground tracking-tight">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                <li><Link href="/clients" className="text-muted-foreground hover:text-primary transition-colors">Clients</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/admin" className="text-muted-foreground hover:text-primary transition-colors">Admin</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground tracking-tight">Contact Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contact@apexinsights.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Innovation Drive, Tech City</li>
              </ul>
            </div>

            <div className="space-y-4">
                <h3 className="font-semibold text-foreground tracking-tight">Newsletter</h3>
                <p className="text-sm text-muted-foreground">Stay up to date with our latest news and offers.</p>
                <NewsletterForm />
            </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container text-center text-sm text-muted-foreground py-6">
          © {new Date().getFullYear()} Apex Insights. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
