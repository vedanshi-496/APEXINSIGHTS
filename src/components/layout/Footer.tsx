import Link from "next/link";
import { Mountain, Twitter, Github, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground font-headline">Apex Insights</span>
          </Link>
          <p className="text-sm">
            Innovative Solutions for a Digital World. We help businesses grow by leveraging cutting-edge technology.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-4 font-headline">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link href="/clients" className="hover:text-primary transition-colors">Clients</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
             <li><Link href="/admin" className="hover:text-primary transition-colors">Admin</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-4 font-headline">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: contact@apexinsights.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>123 Innovation Drive, Tech City, 10101</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-4 font-headline">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-muted/50 py-4">
        <div className="container text-center text-sm">
          © {new Date().getFullYear()} Apex Insights. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
