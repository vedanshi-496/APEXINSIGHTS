import { getSubscriptions } from "@/lib/data";
import { SubscriptionsClient } from "./client";

export default async function SubscriptionsPage() {
  const subscriptions = await getSubscriptions();

  return (
    <div>
      <h1 className="text-2xl font-bold font-headline mb-6">Newsletter Subscriptions</h1>
      <SubscriptionsClient data={subscriptions} />
    </div>
  );
}
