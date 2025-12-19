import { getContacts } from "@/lib/data";
import { ContactsClient } from "./client";

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
      <ContactsClient data={contacts} />
  );
}
