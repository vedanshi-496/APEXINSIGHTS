import {
  getProjects,
  getClients,
  getContacts,
  getSubscriptions,
} from '@/lib/data';
import { DashboardClient } from './client';

export default async function Dashboard() {
  const projects = await getProjects();
  const clients = await getClients();
  const contacts = await getContacts();
  const subscriptions = await getSubscriptions();

  return (
    <DashboardClient
      projects={projects}
      clients={clients}
      contacts={contacts}
      subscriptions={subscriptions}
    />
  );
}
