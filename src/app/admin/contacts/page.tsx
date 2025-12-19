import { getContacts } from "@/lib/data";
import { ContactsClient } from "./client";

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <div>
      <h1 className="text-2xl font-bold font-headline mb-6">Contact Form Submissions</h1>
      <ContactsClient data={contacts} />
    </div>
  );
}
