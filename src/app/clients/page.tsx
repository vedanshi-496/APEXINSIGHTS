import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Clients from "@/components/landing/Clients";

export default function ClientsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Clients />
      </main>
      <Footer />
    </div>
  );
}
