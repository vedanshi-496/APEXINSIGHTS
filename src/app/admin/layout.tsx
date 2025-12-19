'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, Github, LayoutDashboard, Mail, Mountain, Send, Users, PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navItems = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/projects', icon: Briefcase, label: 'Projects' },
  { href: '/admin/clients', icon: Users, label: 'Clients' },
  { href: '/admin/contacts', icon: Mail, label: 'Contacts' },
  { href: '/admin/subscriptions', icon: Send, label: 'Subscriptions' },
];

function NavLink({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <SidebarMenuItem>
      <Link href={href}>
        <SidebarMenuButton isActive={isActive} tooltip={label}>
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </SidebarMenuButton>
      </Link>
    </SidebarMenuItem>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar collapsible="icon" className="hidden md:flex">
          <SidebarContent>
            <SidebarHeader>
              <Link href="/" className="flex items-center gap-2" prefetch={false}>
                 <Mountain className="size-6 text-sidebar-primary" />
                 <span className="font-semibold text-sidebar-primary font-headline text-lg group-data-[collapsible=icon]:hidden">Apex Insights</span>
              </Link>
            </SidebarHeader>
            <SidebarMenu>
              {navItems.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
            <SidebarTrigger className="md:hidden" />
            <h1 className="flex-1 text-xl font-semibold font-headline">Admin Panel</h1>
          </header>
          <main className="flex-1 p-4 md:p-6 lg:p-8 bg-muted/40">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
