"use client"; // Mark as a Client Component

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard"); // Check if we're on the dashboard

  return (
    <div className="flex min-h-screen flex-col">
      {!isDashboard && <Header />}
      <main className="flex-1">{children}</main>
      {!isDashboard && <Footer />}
    </div>
  );
}
