"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface dashboardCardProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  count: number;
}

const DashboardCard = ({ icon, title, count }: dashboardCardProps) => {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-2">
      <CardContent>
        <div className="flex flex-row justify-center items-center mt-4 gap-5">
          <div className="justify-center mb-2">{icon}</div>
          <div className="flex flex-col justify-start">
            <h3 className="text-2xl font-semibold text-blue-500">{title}</h3>
            <div className="text-md text-slate-500 dark:text-slate-200">
              {count}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
