"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, MoreHorizontal, Eye, Truck, Ban } from "lucide-react";
import { orders } from "@/lib/data";
import { Order, OrderStatus } from "@/lib/types";
import { toast } from "sonner";

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "all">("all");
  const [localOrders, setLocalOrders] = useState<Order[]>(orders);

  const filteredOrders = localOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setLocalOrders(
      localOrders.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus, updatedAt: new Date() }
          : order
      )
    );
    toast.success(`Order #${orderId} status updated to ${newStatus}`);
  };

  const statusColors: Record<OrderStatus, string> = {
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    processing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    shipped: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    delivered: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Orders</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order Management</CardTitle>
            <CardDescription>
              View and manage customer orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search orders..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select
                value={statusFilter}
                onValueChange={(value) => setStatusFilter(value as OrderStatus | "all")}
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">#{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <div>{order.customerName}</div>
                          <div className="text-xs text-muted-foreground">
                            {order.customerEmail}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(order.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{order.items.length}</TableCell>
                      <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={statusColors[order.status]}
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" /> View Details
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                            <DropdownMenuItem
                              disabled={order.status === "pending"}
                              onClick={() => updateOrderStatus(order.id, "pending")}
                            >
                              Set as Pending
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              disabled={order.status === "processing"}
                              onClick={() => updateOrderStatus(order.id, "processing")}
                            >
                              Set as Processing
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              disabled={order.status === "shipped"}
                              onClick={() => updateOrderStatus(order.id, "shipped")}
                            >
                              <Truck className="mr-2 h-4 w-4" /> Set as Shipped
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              disabled={order.status === "delivered"}
                              onClick={() => updateOrderStatus(order.id, "delivered")}
                            >
                              Set as Delivered
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              disabled={order.status === "cancelled"}
                              onClick={() => updateOrderStatus(order.id, "cancelled")}
                              className="text-destructive"
                            >
                              <Ban className="mr-2 h-4 w-4" /> Cancel Order
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}