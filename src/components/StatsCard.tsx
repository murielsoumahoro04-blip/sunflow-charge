import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  unit: string;
  icon: LucideIcon;
  trend?: string;
  gradient?: string;
}

const StatsCard = ({ title, value, unit, icon: Icon, trend, gradient = "bg-gradient-energy" }: StatsCardProps) => {
  return (
    <Card className="p-6 shadow-card hover:shadow-glow transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`${gradient} p-3 rounded-xl`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <span className="text-sm font-medium text-secondary">{trend}</span>
        )}
      </div>
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-foreground">{value}</span>
        <span className="text-lg text-muted-foreground">{unit}</span>
      </div>
    </Card>
  );
};

export default StatsCard;
