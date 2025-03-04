    "use client";

    import React, { useState } from "react";
    import { useForm } from "react-hook-form";
    import { zodResolver } from "@hookform/resolvers/zod";
    import * as z from "zod";
    import { X, Plus, Upload } from "lucide-react";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { Textarea } from "@/components/ui/textarea";
    import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    } from "@/components/ui/form";
    import { toast } from "sonner";
    import { Product, ProductSize } from "@/lib/types";

    const productSizeSchema = z.object({
    size: z.string().min(1, "Size is required"),
    price: z.coerce.number().min(0.01, "Price must be greater than 0"),
    stock: z.coerce.number().min(0, "Stock cannot be negative"),
    });

    const productSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    features: z.array(z.string()).min(1, "At least one feature is required"),
    sizes: z.array(productSizeSchema).min(1, "At least one size is required"),
    });

    type ProductFormValues = z.infer<typeof productSchema>;

    interface ProductFormProps {
    initialData?: Product;
    onSubmit: (data: ProductFormValues) => void;
    onCancel: () => void;
    }

    export function ProductForm({ initialData, onSubmit, onCancel }: ProductFormProps) {
    const [images, setImages] = useState<string[]>(initialData?.images || []);
    const [newFeature, setNewFeature] = useState("");
    const [newImageUrl, setNewImageUrl] = useState("");

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productSchema),
        defaultValues: initialData
        ? {
            name: initialData.name,
            description: initialData.description,
            features: initialData.features,
            sizes: initialData.sizes,
            }
        : {
            name: "",
            description: "",
            features: [],
            sizes: [{ size: "", price: 0, stock: 0 }],
            },
    });

    const addImage = () => {
        if (!newImageUrl.trim()) return;
        
        // Simple URL validation
        try {
        new URL(newImageUrl);
        setImages([...images, newImageUrl]);
        setNewImageUrl("");
        } catch (e) {
        toast.error("Please enter a valid URL");
        }
    };

    const removeImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const addFeature = () => {
        if (!newFeature.trim()) return;
        const currentFeatures = form.getValues("features") || [];
        form.setValue("features", [...currentFeatures, newFeature]);
        setNewFeature("");
    };

    const removeFeature = (index: number) => {
        const currentFeatures = form.getValues("features") || [];
        form.setValue(
        "features",
        currentFeatures.filter((_, i) => i !== index)
        );
    };

    const addSize = () => {
        const currentSizes = form.getValues("sizes") || [];
        form.setValue("sizes", [...currentSizes, { size: "", price: 0, stock: 0 }]);
    };

    const removeSize = (index: number) => {
        const currentSizes = form.getValues("sizes") || [];
        if (currentSizes.length > 1) {
        form.setValue(
            "sizes",
            currentSizes.filter((_, i) => i !== index)
        );
        } else {
        toast.error("At least one size is required");
        }
    };

    const handleSubmit = (data: ProductFormValues) => {
        if (images.length === 0) {
        toast.error("At least one image is required");
        return;
        }

        const formData = {
        ...data,
        images,
        };

        onSubmit(formData);
    };

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Royal Oud" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="A luxurious blend of rare oud wood..."
                        rows={4}
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <div>
                <FormLabel>Product Images</FormLabel>
                <div className="mt-2 space-y-2">
                    <div className="flex gap-2">
                    <Input
                        placeholder="Image URL"
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                    />
                    <Button type="button" onClick={addImage} size="icon">
                        <Plus className="h-4 w-4" />
                    </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                    {images.map((image, index) => (
                        <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-md border"
                        >
                        <img
                            src={image}
                            alt={`Product image ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                        <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute right-1 top-1 h-6 w-6"
                            onClick={() => removeImage(index)}
                        >
                            <X className="h-3 w-3" />
                        </Button>
                        </div>
                    ))}
                    {images.length === 0 && (
                        <div className="flex aspect-square items-center justify-center rounded-md border border-dashed">
                        <div className="flex flex-col items-center text-muted-foreground">
                            <Upload className="mb-2 h-8 w-8" />
                            <span>No images added</span>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                <FormLabel>Product Features</FormLabel>
                <div className="mt-2 space-y-2">
                    <div className="flex gap-2">
                    <Input
                        placeholder="Long-lasting fragrance"
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                    />
                    <Button type="button" onClick={addFeature} size="icon">
                        <Plus className="h-4 w-4" />
                    </Button>
                    </div>
                    <div className="rounded-md border">
                    {form.watch("features")?.length > 0 ? (
                        <ul className="divide-y">
                        {form.watch("features")?.map((feature, index) => (
                            <li
                            key={index}
                            className="flex items-center justify-between p-2"
                            >
                            <span>{feature}</span>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeFeature(index)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                            </li>
                        ))}
                        </ul>
                    ) : (
                        <div className="p-4 text-center text-muted-foreground">
                        No features added
                        </div>
                    )}
                    </div>
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <FormLabel>Product Sizes</FormLabel>
                    <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addSize}
                    >
                    <Plus className="mr-1 h-3 w-3" /> Add Size
                    </Button>
                </div>
                <div className="mt-2 space-y-4">
                    {form.watch("sizes")?.map((_, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-3 gap-2 rounded-md border p-3"
                    >
                        <FormField
                        control={form.control}
                        name={`sizes.${index}.size`}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-xs">Size</FormLabel>
                            <FormControl>
                                <Input placeholder="3ml" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name={`sizes.${index}.price`}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-xs">Price ($)</FormLabel>
                            <FormControl>
                                <Input
                                type="number"
                                step="0.01"
                                min="0"
                                placeholder="29.99"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className="relative">
                        <FormField
                            control={form.control}
                            name={`sizes.${index}.stock`}
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs">Stock</FormLabel>
                                <FormControl>
                                <Input
                                    type="number"
                                    min="0"
                                    placeholder="10"
                                    {...field}
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        {form.watch("sizes")?.length > 1 && (
                            <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute -right-2 -top-2 h-6 w-6 rounded-full"
                            onClick={() => removeSize(index)}
                            >
                            <X className="h-3 w-3" />
                            </Button>
                        )}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </div>

            <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
            </Button>
            <Button type="submit">
                {initialData ? "Update Product" : "Add Product"}
            </Button>
            </div>
        </form>
        </Form>
    );
    }