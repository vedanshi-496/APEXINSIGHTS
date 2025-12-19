import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  Briefcase,
  Users,
  Mail,
  Send,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getProjects, getClients, getContacts, getSubscriptions } from "@/lib/data"

export default async function Dashboard() {
    const projects = await getProjects();
    const clients = await getClients();
    const contacts = await getContacts();
    const subscriptions = await getSubscriptions();

    const stats = [
        { title: "Projects", value: projects.length, icon: Briefcase, href: "/admin/projects" },
        { title: "Clients", value: clients.length, icon: Users, href: "/admin/clients" },
        { title: "Contact Forms", value: contacts.length, icon: Mail, href: "/admin/contacts" },
        { title: "Subscriptions", value: subscriptions.length, icon: Send, href: "/admin/subscriptions" },
    ]

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 md:gap-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {stats.map(stat => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <Link href={stat.href} className="text-xs text-muted-foreground hover:text-primary">
                    View all
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Welcome to Apex Insights Admin</CardTitle>
            <CardDescription>
              Manage your website content from this central dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>You can add, edit, and delete projects and client testimonials. You can also view contact form submissions and newsletter subscribers.</p>
            <p className="mt-4">Use the navigation on the left to get started.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
