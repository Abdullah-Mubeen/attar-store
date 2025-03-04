"use client";

import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/lib/types";
import { Edit, ArrowLeft } from "lucide-react";

interface ProductDetailsProps {
  product: Product;
  onEdit: () => void;
  onBack: () => void;
}

export function ProductDetails({ product, onEdit, onBack }: ProductDetailsProps) {
  const getLowestStock = () => {
    return Math.min(...product.sizes.map((size) => size.stock));
  };

  const getStockStatus = () => {
    const lowestStock = getLowestStock();
    if (lowestStock === 0) return "Out of Stock";
    if (lowestStock < 5) return "Critical";
    if (lowestStock < 10) return "Low";
    return "In Stock";
  };

  const getStockStatusColor = () => {
    const status = getStockStatus();
    switch (status) {
      case "Out of Stock":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "Critical":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Low":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Button>
        <Button onClick={onEdit}>
          <Edit className="mr-2 h-4 w-4" /> Edit Product
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Product Images</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-md">
                  <img
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{product.name}</CardTitle>
              <Badge variant="outline" className={getStockStatusColor()}>
                {getStockStatus()}
              </Badge>
            </div>
            <CardDescription>Product ID: {product.id}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium">Description</h3>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Key Features</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Available Sizes</h3>
              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map((size, index) => (
                  <div key={index} className="rounded-md border p-2 text-center">
                    <div className="text-sm font-medium">{size.size}</div>
                    <div className="text-sm">${size.price.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground">
                      Stock: {size.stock}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Product Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-medium">Created:</span>{" "}
                  {new Date(product.createdAt).toLocaleDateString()}
                </div>
                <div>
                  <span className="font-medium">Last Updated:</span>{" "}
                  {new Date(product.updatedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}