"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, MessageSquare } from "lucide-react";
import { customerQueries } from "@/lib/data";
import { CustomerQuery, QueryStatus } from "@/lib/types";
import { toast } from "sonner";

export default function QueriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<QueryStatus | "all">("all");
  const [localQueries, setLocalQueries] = useState<CustomerQuery[]>(customerQueries);
  const [selectedQuery, setSelectedQuery] = useState<CustomerQuery | null>(null);
  const [responseText, setResponseText] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredQueries = localQueries.filter((query) => {
    const matchesSearch =
      query.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      query.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      query.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || query.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleOpenDialog = (query: CustomerQuery) => {
    setSelectedQuery(query);
    setResponseText(query.response || "");
    setDialogOpen(true);
  };

  const handleSubmitResponse = () => {
    if (!selectedQuery || !responseText.trim()) return;

    setLocalQueries(
      localQueries.map((query) =>
        query.id === selectedQuery.id
          ? {
              ...query,
              response: responseText,
              status: "answered",
              updatedAt: new Date(),
            }
          : query
      )
    );

    toast.success("Response sent to customer");
    setDialogOpen(false);
  };

  const statusColors: Record<QueryStatus, string> = {
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    answered: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Customer Queries</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Query Management</CardTitle>
            <CardDescription>
              Respond to customer inquiries and questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search queries..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select
                value={statusFilter}
                onValueChange={(value) => setStatusFilter(value as QueryStatus | "all")}
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="answered">Answered</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredQueries.map((query) => (
                    <TableRow key={query.id}>
                      <TableCell className="font-medium">
                        {query.subject}
                      </TableCell>
                      <TableCell>
                        <div>
                          <div>{query.customerName}</div>
                          <div className="text-xs text-muted-foreground">
                            {query.customerEmail}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">
                        {query.message}
                      </TableCell>
                      <TableCell>
                        {new Date(query.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={statusColors[query.status]}
                        >
                          {query.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleOpenDialog(query)}
                        >
                          <MessageSquare className="mr-2 h-4 w-4" />
                          {query.status === "pending" ? "Respond" : "View Response"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>
                {selectedQuery?.status === "pending"
                  ? "Respond to Customer Query"
                  : "Customer Query Response"}
              </DialogTitle>
              <DialogDescription>
                {selectedQuery?.status === "pending"
                  ? "Provide a helpful response to the customer's inquiry."
                  : "View or edit your response to this customer query."}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div>
                <h3 className="mb-2 text-sm font-medium">Customer Information</h3>
                <p className="text-sm">
                  <span className="font-medium">Name:</span> {selectedQuery?.customerName}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Email:</span> {selectedQuery?.customerEmail}
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium">Query Details</h3>
                <p className="text-sm">
                  <span className="font-medium">Subject:</span> {selectedQuery?.subject}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Message:</span>
                </p>
                <p className="rounded-md bg-muted p-3 text-sm">
                  {selectedQuery?.message}
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium">Your Response</h3>
                <Textarea
                  value={responseText}
                  onChange={(e) => setResponseText(e.target.value)}
                  placeholder="Type your response here..."
                  rows={5}
                  disabled={selectedQuery?.status === "answered" && !responseText}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              {(selectedQuery?.status === "pending" || responseText !== selectedQuery?.response) && (
                <Button onClick={handleSubmitResponse}>
                  {selectedQuery?.status === "pending" ? "Send Response" : "Update Response"}
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}