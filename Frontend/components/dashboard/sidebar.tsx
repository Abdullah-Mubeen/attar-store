"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Star, 
  MessageSquare, 
  Settings, 
  LogOut,
  Droplets
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: <Package className="h-5 w-5" />,
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    title: "Reviews",
    href: "/dashboard/reviews",
    icon: <Star className="h-5 w-5" />,
  },
  {
    title: "Customer Queries",
    href: "/dashboard/queries",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col border-r bg-card">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Droplets className="h-6 w-6 text-primary" />
          <span className="text-lg">Attar Admin</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "sidebar-item",
                pathname === item.href && "active"
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Link
          href="/auth/signout"
          className="sidebar-item text-muted-foreground hover:text-destructive"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </Link>
      </div>
    </div>
  );
}