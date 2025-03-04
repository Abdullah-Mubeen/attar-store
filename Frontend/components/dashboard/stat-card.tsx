import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DivideIcon as LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function StatCard({ title, value, description, icon: Icon, trend }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {trend && (
          <div className="mt-2 flex items-center text-xs">
            <span
              className={
                trend.isPositive
                  ? "text-emerald-500"
                  : "text-rose-500"
              }
            >
              {trend.isPositive ? "+" : "-"}
              {trend.value}%
            </span>
            <span className="ml-1 text-muted-foreground">from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}