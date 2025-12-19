import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: "Apex Insights",
  description: "Innovative Solutions for a Digital World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          manrope.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
