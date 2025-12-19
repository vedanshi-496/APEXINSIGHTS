import { getClients } from "@/lib/data";
import { ClientsClient } from "./client";

export default async function ClientsPage() {
  const clients = await getClients();

  return (
    <div>
      <h1 className="text-2xl font-bold font-headline mb-6">Manage Clients</h1>
      <ClientsClient data={clients} />
    </div>
  );
}
