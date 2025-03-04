"use client";

import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Order, OrderStatus } from "@/lib/types";
import { ArrowLeft, Truck, Package } from "lucide-react";
import { toast } from "sonner";

interface OrderDetailsProps {
  order: Order;
  onStatusChange: (orderId: string, status: OrderStatus) => void;
  onBack: () => void;
}

export function OrderDetails({ order, onStatusChange, onBack }: OrderDetailsProps) {
  const statusColors: Record<OrderStatus, string> = {
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    processing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    shipped: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    delivered: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  };

  const handleStatusChange = (status: string) => {
    onStatusChange(order.id, status as OrderStatus);
    toast.success(`Order status updated to ${status}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Orders
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Status:</span>
          <Badge variant="outline" className={statusColors[order.status]}>
            {order.status}
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Order #{order.id}</CardTitle>
            <CardDescription>
              Placed on {new Date(order.createdAt).toLocaleDateString()} at{" "}
              {new Date(order.createdAt).toLocaleTimeString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-sm font-medium">Order Items</h3>
                <div className="rounded-md border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-2 text-left text-sm font-medium">Product</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Size</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Price</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Quantity</th>
                        <th className="px-4 py-2 text-right text-sm font-medium">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="px-4 py-2 text-sm">{item.productName}</td>
                          <td className="px-4 py-2 text-sm">{item.size}</td>
                          <td className="px-4 py-2 text-sm">${item.price.toFixed(2)}</td>
                          <td className="px-4 py-2 text-sm">{item.quantity}</td>
                          <td className="px-4 py-2 text-right text-sm">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t">
                        <td colSpan={4} className="px-4 py-2 text-right text-sm font-medium">
                          Total
                        </td>
                        <td className="px-4 py-2 text-right text-sm font-medium">
                          ${order.totalAmount.toFixed(2)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-sm font-medium">Order Timeline</h3>
                  <div className="space-y-2 rounded-md border p-3">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-2 w-2 rounded-full bg-green-500"></div>
                      <div>
                        <p className="text-sm font-medium">Order Placed</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(order.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    {order.status !== "pending" && (
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 h-2 w-2 rounded-full bg-blue-500"></div>
                        <div>
                          <p className="text-sm font-medium">Processing Started</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(order.updatedAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}
                    {(order.status === "shipped" || order.status === "delivered") && (
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 h-2 w-2 rounded-full bg-purple-500"></div>
                        <div>
                          <p className="text-sm font-medium">Order Shipped</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(order.updatedAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}
                    {order.status === "delivered" && (
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 h-2 w-2 rounded-full bg-green-500"></div>
                        <div>
                          <p className="text-sm font-medium">Order Delivered</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(order.updatedAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}
                    {order.status === "cancelled" && (
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 h-2 w-2 rounded-full bg-red-500"></div>
                        <div>
                          <p className="text-sm font-medium">Order Cancelled</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(order.updatedAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-medium">Update Order Status</h3>
                  <div className="rounded-md border p-3">
                    <Select
                      defaultValue={order.status}
                      onValueChange={handleStatusChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="shipped">Shipped</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={order.status === "shipped" || order.status === "delivered" || order.status === "cancelled"}
                        onClick={() => handleStatusChange("shipped")}
                      >
                        <Truck className="mr-2 h-4 w-4" /> Mark as Shipped
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={order.status === "delivered" || order.status === "cancelled"}
                        onClick={() => handleStatusChange("delivered")}
                      >
                        <Package className="mr-2 h-4 w-4" /> Mark as Delivered
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="mb-1 text-sm font-medium">Customer Details</h3>
              <p className="text-sm">{order.customerName}</p>
              <p className="text-sm text-muted-foreground">{order.customerEmail}</p>
            </div>
            <div>
              <h3 className="mb-1 text-sm font-medium">Shipping Address</h3>
              <p className="whitespace-pre-line text-sm text-muted-foreground">
                {order.shippingAddress}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Contact Customer
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}