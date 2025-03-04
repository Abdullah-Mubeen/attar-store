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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, MoreHorizontal, Edit, Trash, Eye } from "lucide-react";
import { products } from "@/lib/data";
import { Product } from "@/lib/types";
import { ProductForm } from "@/components/dashboard/product-form";
import { ProductDetails } from "@/components/dashboard/product-details";
import { toast } from "sonner";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [localProducts, setLocalProducts] = useState<Product[]>(products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isViewingDetails, setIsViewingDetails] = useState(false);

  const filteredProducts = localProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLowestStock = (product: Product) => {
    return Math.min(...product.sizes.map((size) => size.stock));
  };

  const getStockStatus = (product: Product) => {
    const lowestStock = getLowestStock(product);
    if (lowestStock === 0) return "Out of Stock";
    if (lowestStock < 5) return "Critical";
    if (lowestStock < 10) return "Low";
    return "In Stock";
  };

  const getStockStatusColor = (product: Product) => {
    const status = getStockStatus(product);
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

  const handleAddProduct = (data: any) => {
    const newProduct: Product = {
      id: `${localProducts.length + 1}`,
      name: data.name,
      description: data.description,
      images: data.images,
      sizes: data.sizes,
      features: data.features,
      relatedProducts: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setLocalProducts([...localProducts, newProduct]);
    setIsAddDialogOpen(false);
    toast.success("Product added successfully");
  };

  const handleEditProduct = (data: any) => {
    if (!selectedProduct) return;

    const updatedProduct: Product = {
      ...selectedProduct,
      name: data.name,
      description: data.description,
      images: data.images,
      sizes: data.sizes,
      features: data.features,
      updatedAt: new Date(),
    };

    setLocalProducts(
      localProducts.map((product) =>
        product.id === selectedProduct.id ? updatedProduct : product
      )
    );
    setIsEditDialogOpen(false);
    toast.success("Product updated successfully");
  };

  const handleDeleteProduct = () => {
    if (!selectedProduct) return;

    setLocalProducts(
      localProducts.filter((product) => product.id !== selectedProduct.id)
    );
    setIsDeleteDialogOpen(false);
    toast.success("Product deleted successfully");
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsViewingDetails(true);
  };

  const handleEditFromDetails = () => {
    setIsViewingDetails(false);
    setIsEditDialogOpen(true);
  };

  if (isViewingDetails && selectedProduct) {
    return (
      <DashboardLayout>
        <ProductDetails
          product={selectedProduct}
          onEdit={handleEditFromDetails}
          onBack={() => setIsViewingDetails(false)}
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Products</h1>
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Product Management</CardTitle>
            <CardDescription>
              Manage your product inventory, pricing, and details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Sizes</TableHead>
                    <TableHead>Price Range</TableHead>
                    <TableHead>Stock Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 overflow-hidden rounded-md">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <div>{product.name}</div>
                            <div className="text-xs text-muted-foreground">
                              ID: {product.id}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {product.sizes.map((size) => (
                            <Badge key={size.size} variant="outline">
                              {size.size}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        ${Math.min(...product.sizes.map((s) => s.price)).toFixed(2)} - $
                        {Math.max(...product.sizes.map((s) => s.price)).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getStockStatusColor(product)}
                        >
                          {getStockStatus(product)}
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
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleViewDetails(product)}>
                              <Eye className="mr-2 h-4 w-4" /> View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedProduct(product);
                                setIsEditDialogOpen(true);
                              }}
                            >
                              <Edit className="mr-2 h-4 w-4" /> Edit Product
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-destructive"
                              onClick={() => {
                                setSelectedProduct(product);
                                setIsDeleteDialogOpen(true);
                              }}
                            >
                              <Trash className="mr-2 h-4 w-4" /> Delete Product
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

      {/* Add Product Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogDescription>
              Fill in the details to add a new product to your inventory
            </DialogDescription>
          </DialogHeader>
          <ProductForm
            onSubmit={handleAddProduct}
            onCancel={() => setIsAddDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Edit Product Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>
              Update the product details
            </DialogDescription>
          </DialogHeader>
          {selectedProduct && (
            <ProductForm
              initialData={selectedProduct}
              onSubmit={handleEditProduct}
              onCancel={() => setIsEditDialogOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              product from your inventory.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteProduct}
              className="bg-destructive text-destructive-foreground"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DashboardLayout>
  );
}