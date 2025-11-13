import { MapPin, Navigation, Filter, Zap, Battery, Sun, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import sunplugLogo from "@/assets/sunplug-logo.png";

interface Station {
  id: number;
  name: string;
  type: "AC" | "DC";
  power: string;
  address: string;
  available: number;
  total: number;
  price: string;
  hasSolar: boolean;
  position: { x: number; y: number };
}

const stations: Station[] = [
  {
    id: 1,
    name: "Odysseum",
    type: "AC",
    power: "22 kW",
    address: "2 Place de Lisbonne, 34000 Montpellier",
    available: 8,
    total: 12,
    price: "0.18€/kWh",
    hasSolar: true,
    position: { x: 65, y: 45 }
  },
  {
    id: 2,
    name: "Polygone",
    type: "DC",
    power: "150 kW",
    address: "1 Rue des Pertuisanes, 34000 Montpellier",
    available: 2,
    total: 6,
    price: "0.42€/kWh",
    hasSolar: true,
    position: { x: 48, y: 52 }
  },
  {
    id: 3,
    name: "Auchan Sud",
    type: "AC",
    power: "11 kW",
    address: "Route de Carnon, 34970 Lattes",
    available: 5,
    total: 8,
    price: "0.15€/kWh",
    hasSolar: true,
    position: { x: 55, y: 68 }
  },
  {
    id: 4,
    name: "Corum",
    type: "AC",
    power: "22 kW",
    address: "Esplanade Charles de Gaulle, 34000 Montpellier",
    available: 0,
    total: 4,
    price: "0.25€/kWh",
    hasSolar: false,
    position: { x: 42, y: 48 }
  },
  {
    id: 5,
    name: "Géant Casino",
    type: "DC",
    power: "100 kW",
    address: "Avenue de la Mer, 34000 Montpellier",
    available: 3,
    total: 5,
    price: "0.38€/kWh",
    hasSolar: true,
    position: { x: 72, y: 38 }
  },
  {
    id: 6,
    name: "Place de la Comédie",
    type: "AC",
    power: "7 kW",
    address: "Place de la Comédie, 34000 Montpellier",
    available: 1,
    total: 3,
    price: "0.28€/kWh",
    hasSolar: false,
    position: { x: 45, y: 50 }
  }
];

const Map = () => {
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [filterType, setFilterType] = useState<"ALL" | "AC" | "DC" | "SOLAR">("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStations = stations.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         station.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = 
      filterType === "ALL" ||
      (filterType === "AC" && station.type === "AC") ||
      (filterType === "DC" && station.type === "DC") ||
      (filterType === "SOLAR" && station.hasSolar);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img 
                src={sunplugLogo} 
                alt="SUNPLUG Logo" 
                className="h-12 w-auto"
              />
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Accueil
              </a>
              <a href="/map" className="text-sm font-medium text-primary transition-colors">
                Carte
              </a>
              <Button size="sm" className="bg-gradient-energy shadow-glow">
                Mon Compte
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search & Filters */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4 text-foreground">Rechercher une borne</h3>
              
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Nom ou adresse..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground mb-3">Type de borne</p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={filterType === "ALL" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterType("ALL")}
                    className={filterType === "ALL" ? "bg-gradient-energy" : ""}
                  >
                    Toutes
                  </Button>
                  <Button
                    variant={filterType === "AC" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterType("AC")}
                    className={filterType === "AC" ? "bg-primary" : ""}
                  >
                    AC
                  </Button>
                  <Button
                    variant={filterType === "DC" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterType("DC")}
                    className={filterType === "DC" ? "bg-primary" : ""}
                  >
                    DC
                  </Button>
                  <Button
                    variant={filterType === "SOLAR" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterType("SOLAR")}
                    className={filterType === "SOLAR" ? "bg-gradient-solar" : ""}
                  >
                    <Sun className="w-4 h-4 mr-1" />
                    Solaire
                  </Button>
                </div>
              </div>

              <Button className="w-full mt-6 bg-gradient-energy shadow-glow">
                <Navigation className="w-4 h-4 mr-2" />
                Me géolocaliser
              </Button>
            </Card>

            {/* Station List */}
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {filteredStations.map((station) => (
                <Card
                  key={station.id}
                  className={`p-4 cursor-pointer transition-all hover:shadow-glow ${
                    selectedStation?.id === station.id ? "ring-2 ring-primary shadow-glow" : ""
                  }`}
                  onClick={() => setSelectedStation(station)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{station.name}</h4>
                        {station.hasSolar && (
                          <Sun className="w-4 h-4 text-solar" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{station.address}</p>
                    </div>
                    <Badge variant={station.available > 0 ? "default" : "secondary"}>
                      {station.available}/{station.total}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4 text-primary" />
                        {station.type} {station.power}
                      </span>
                      <span className="text-muted-foreground">{station.price}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="p-6 h-[calc(100vh-12rem)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-muted via-card to-muted/50">
                {/* Map Grid */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Map Title Overlay */}
                <div className="absolute top-8 left-8 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-xl border border-border/50 shadow-glow">
                  <h3 className="text-xl font-bold bg-gradient-energy bg-clip-text text-transparent flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Montpellier & Alentours
                  </h3>
                </div>

                {/* Legend */}
                <div className="absolute bottom-8 left-8 bg-card/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-border/50">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Légende</p>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <span>AC</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span>DC</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sun className="w-3 h-3 text-solar" />
                      <span>Solaire</span>
                    </div>
                  </div>
                </div>

                {/* Station Markers */}
                {filteredStations.map((station) => (
                  <div
                    key={station.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${station.position.x}%`, top: `${station.position.y}%` }}
                    onClick={() => setSelectedStation(station)}
                  >
                    {/* Pulse Animation */}
                    {station.available > 0 && (
                      <div className="absolute inset-0 animate-ping">
                        <div className={`w-8 h-8 rounded-full ${
                          station.type === "AC" ? "bg-secondary" : "bg-primary"
                        } opacity-75`}></div>
                      </div>
                    )}

                    {/* Marker */}
                    <div className={`relative w-8 h-8 rounded-full flex items-center justify-center shadow-glow transition-transform group-hover:scale-125 ${
                      station.type === "AC" ? "bg-gradient-to-br from-secondary to-accent" : "bg-gradient-to-br from-primary to-primary-glow"
                    } ${selectedStation?.id === station.id ? "ring-4 ring-solar scale-125" : ""}`}>
                      {station.hasSolar ? (
                        <Sun className="w-4 h-4 text-white" />
                      ) : (
                        <Zap className="w-4 h-4 text-white" />
                      )}
                    </div>

                    {/* Hover Tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-card/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-glow border border-border/50 whitespace-nowrap">
                        <p className="text-sm font-semibold text-foreground">{station.name}</p>
                        <p className="text-xs text-muted-foreground">{station.available}/{station.total} disponibles</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Selected Station Info */}
                {selectedStation && (
                  <div className="absolute top-8 right-8 bg-card/95 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-glow max-w-sm animate-fade-in">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                          {selectedStation.name}
                          {selectedStation.hasSolar && (
                            <Sun className="w-5 h-5 text-solar" />
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {selectedStation.address}
                        </p>
                      </div>
                      <Badge 
                        variant={selectedStation.available > 0 ? "default" : "secondary"}
                        className={selectedStation.available > 0 ? "bg-secondary" : ""}
                      >
                        {selectedStation.available}/{selectedStation.total}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Type</p>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1">
                          <Zap className="w-4 h-4 text-primary" />
                          {selectedStation.type} {selectedStation.power}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Tarif</p>
                        <p className="text-sm font-semibold text-foreground">{selectedStation.price}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-gradient-energy shadow-glow"
                        disabled={selectedStation.available === 0}
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Y aller
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1"
                        disabled={selectedStation.available === 0}
                      >
                        Réserver
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
