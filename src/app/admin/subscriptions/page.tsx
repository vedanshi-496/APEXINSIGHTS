import { getSubscriptions } from "@/lib/data";
import { SubscriptionsClient } from "./client";

export default async function SubscriptionsPage() {
  const subscriptions = await getSubscriptions();

  return (
    <SubscriptionsClient data={subscriptions} />
  );
}
