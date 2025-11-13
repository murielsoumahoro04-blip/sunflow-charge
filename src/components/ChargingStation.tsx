import { MapPin, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ChargingStationProps {
  name: string;
  type: "AC" | "DC";
  power: string;
  distance: string;
  available: number;
  total: number;
  price: string;
}

const ChargingStation = ({ name, type, power, distance, available, total, price }: ChargingStationProps) => {
  const isAvailable = available > 0;
  
  return (
    <Card className="p-5 hover:shadow-glow transition-all duration-300 cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-1">{name}</h4>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{distance}</span>
          </div>
        </div>
        <Badge 
          variant={isAvailable ? "default" : "secondary"}
          className={isAvailable ? "bg-secondary" : ""}
        >
          {available}/{total} libre{available > 1 ? 's' : ''}
        </Badge>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">{type} {power}</span>
        </div>
        <div className="text-sm text-muted-foreground">
          {price}
        </div>
      </div>

      <Button 
        variant="outline" 
        size="sm" 
        className="w-full"
        disabled={!isAvailable}
      >
        {isAvailable ? 'Réserver' : 'Indisponible'}
      </Button>
    </Card>
  );
};

export default ChargingStation;
