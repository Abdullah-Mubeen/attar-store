"use client";

import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Order, OrderStatus } from "@/lib/types";

interface RecentOrdersProps {
  orders: Order[];
}

const statusColors: Record<OrderStatus, string> = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  processing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  shipped: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  delivered: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

export function RecentOrders({ orders }: RecentOrdersProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>
          You have {orders.length} total orders
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">#{order.id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={statusColors[order.status]}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  ${order.totalAmount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}