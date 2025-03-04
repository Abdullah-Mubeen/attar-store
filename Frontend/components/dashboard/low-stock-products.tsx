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
import { Product } from "@/lib/types";

interface LowStockProductsProps {
  products: Product[];
}

export function LowStockProducts({ products }: LowStockProductsProps) {
  // Filter products with at least one size having low stock (less than 10)
  const lowStockProducts = products.filter(product => 
    product.sizes.some(size => size.stock < 10)
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Low Stock Products</CardTitle>
        <CardDescription>
          Products that need to be restocked soon
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Current Stock</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lowStockProducts.flatMap(product => 
              product.sizes
                .filter(size => size.stock < 10)
                .map((size, index) => (
                  <TableRow key={`${product.id}-${size.size}`}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{size.size}</TableCell>
                    <TableCell>{size.stock}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          size.stock === 0
                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            : size.stock < 5
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        }
                      >
                        {size.stock === 0
                          ? "Out of Stock"
                          : size.stock < 5
                          ? "Critical"
                          : "Low Stock"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}