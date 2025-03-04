import React from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>

        <Tabs defaultValue="general">
          <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Store Information</CardTitle>
                <CardDescription>
                  Update your store details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="store-name">Store Name</Label>
                    <Input id="store-name" defaultValue="Attar & Perfume Store" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="contact@attarstore.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Input id="currency" defaultValue="USD ($)" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Store Address</Label>
                  <Textarea id="address" defaultValue="123 Fragrance Lane, Perfume City, PC 12345" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tax Settings</CardTitle>
                <CardDescription>
                  Configure tax rates and settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="enable-tax" defaultChecked />
                  <Label htmlFor="enable-tax">Enable Tax Calculation</Label>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                    <Input id="tax-rate" type="number" defaultValue="7.5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tax-name">Tax Name</Label>
                    <Input id="tax-name" defaultValue="Sales Tax" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>
                  Configure when you receive email notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="new-order">New Order</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive an email when a new order is placed
                    </p>
                  </div>
                  <Switch id="new-order" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="low-stock">Low Stock Alert</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive an email when product stock is low
                    </p>
                  </div>
                  <Switch id="low-stock" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="new-review">New Review</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive an email when a customer leaves a review
                    </p>
                  </div>
                  <Switch id="new-review" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="new-query">New Customer Query</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive an email when a customer submits a query
                    </p>
                  </div>
                  <Switch id="new-query" defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Theme Settings</CardTitle>
                <CardDescription>
                  Customize the appearance of your admin dashboard
                </CardDescription>
               <CardDescription>
                  Customize the appearance of your admin dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <div className="flex items-center gap-2">
                      <Input id="primary-color" defaultValue="#f0d173" />
                      <div className="h-8 w-8 rounded-md bg-gold" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondary-color">Secondary Color</Label>
                    <div className="flex items-center gap-2">
                      <Input id="secondary-color" defaultValue="#9b692e" />
                      <div className="h-8 w-8 rounded-md bg-brown" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="dark-mode" />
                  <Label htmlFor="dark-mode">Enable Dark Mode by Default</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="animations" defaultChecked />
                  <Label htmlFor="animations">Enable Animations</Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}