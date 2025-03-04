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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle, XCircle } from "lucide-react";
import { reviews } from "@/lib/data";
import { Review, ReviewStatus } from "@/lib/types";
import { toast } from "sonner";

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<ReviewStatus | "all">("all");
  const [localReviews, setLocalReviews] = useState<Review[]>(reviews);

  const filteredReviews = localReviews.filter((review) => {
    const matchesSearch =
      review.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || review.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const updateReviewStatus = (reviewId: string, newStatus: ReviewStatus) => {
    setLocalReviews(
      localReviews.map((review) =>
        review.id === reviewId
          ? { ...review, status: newStatus, updatedAt: new Date() }
          : review
      )
    );
    toast.success(`Review status updated to ${newStatus}`);
  };

  const statusColors: Record<ReviewStatus, string> = {
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    approved: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Reviews</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Review Management</CardTitle>
            <CardDescription>
              Manage customer reviews and ratings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search reviews..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select
                value={statusFilter}
                onValueChange={(value) => setStatusFilter(value as ReviewStatus | "all")}
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Comment</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReviews.map((review) => (
                    <TableRow key={review.id}>
                      <TableCell className="font-medium">
                        {review.productName}
                      </TableCell>
                      <TableCell>{review.customerName}</TableCell>
                      <TableCell>{renderStars(review.rating)}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {review.comment}
                      </TableCell>
                      <TableCell>
                        {new Date(review.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={statusColors[review.status]}
                        >
                          {review.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 text-green-600"
                            disabled={review.status === "approved"}
                            onClick={() => updateReviewStatus(review.id, "approved")}
                          >
                            <CheckCircle className="h-4 w-4" />
                            <span className="sr-only">Approve</span>
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 text-red-600"
                            disabled={review.status === "rejected"}
                            onClick={() => updateReviewStatus(review.id, "rejected")}
                          >
                            <XCircle className="h-4 w-4" />
                            <span className="sr-only">Reject</span>
                          </Button>
                        </div>
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