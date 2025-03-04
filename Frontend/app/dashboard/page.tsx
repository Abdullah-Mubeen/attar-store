import React from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { StatCard } from "@/components/dashboard/stat-card";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { LowStockProducts } from "@/components/dashboard/low-stock-products";
import { SalesChart } from "@/components/dashboard/sales-chart";
import { ProductDistribution } from "@/components/dashboard/product-distribution";
import { Package, ShoppingCart, DollarSign, Users, Star, MessageSquare } from "lucide-react";
import { dashboardStats, orders, products } from "@/lib/data";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Total Products"
            value={dashboardStats.totalProducts}
            icon={Package}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Total Orders"
            value={dashboardStats.totalOrders}
            icon={ShoppingCart}
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Total Revenue"
            value={`$${dashboardStats.totalRevenue.toFixed(2)}`}
            icon={DollarSign}
            trend={{ value: 15, isPositive: true }}
          />
          <StatCard
            title="Pending Orders"
            value={dashboardStats.pendingOrders}
            icon={ShoppingCart}
            description="Orders awaiting processing"
          />
          <StatCard
            title="Pending Reviews"
            value={dashboardStats.pendingReviews}
            icon={Star}
            description="Reviews awaiting approval"
          />
          <StatCard
            title="Customer Queries"
            value={dashboardStats.pendingQueries}
            icon={MessageSquare}
            description="Queries awaiting response"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SalesChart />
          <ProductDistribution />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <RecentOrders orders={orders} />
          <LowStockProducts products={products} />
        </div>
      </div>
    </DashboardLayout>
  );
}