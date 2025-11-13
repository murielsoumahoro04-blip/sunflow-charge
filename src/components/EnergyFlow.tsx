import { Battery, Zap, Sun, Car } from "lucide-react";

const EnergyFlow = () => {
  return (
    <div className="relative w-full py-12">
      <div className="flex items-center justify-between max-w-4xl mx-auto px-4">
        {/* Solar Production */}
        <div className="flex flex-col items-center gap-3 flex-1">
          <div className="relative">
            <div className="absolute inset-0 bg-solar/20 blur-xl rounded-full animate-pulse" />
            <div className="relative bg-gradient-solar p-6 rounded-2xl shadow-glow">
              <Sun className="w-8 h-8 text-solar-foreground" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">Production</p>
            <p className="text-2xl font-bold text-solar">8.4 kW</p>
          </div>
        </div>

        {/* Flow Arrow */}
        <div className="flex-1 flex justify-center">
          <div className="h-1 w-full bg-gradient-to-r from-solar via-secondary to-primary animate-pulse" />
        </div>

        {/* Storage */}
        <div className="flex flex-col items-center gap-3 flex-1">
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full animate-pulse" />
            <div className="relative bg-gradient-to-br from-secondary to-accent p-6 rounded-2xl shadow-glow">
              <Battery className="w-8 h-8 text-secondary-foreground" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">Stockage</p>
            <p className="text-2xl font-bold text-secondary">85%</p>
          </div>
        </div>

        {/* Flow Arrow */}
        <div className="flex-1 flex justify-center">
          <div className="h-1 w-full bg-gradient-to-r from-secondary to-primary animate-pulse" />
        </div>

        {/* Vehicle Charging */}
        <div className="flex flex-col items-center gap-3 flex-1">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
            <div className="relative bg-gradient-energy p-6 rounded-2xl shadow-glow">
              <Car className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">Véhicule</p>
            <p className="text-2xl font-bold text-primary">68%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyFlow;
