import { Battery, Zap, Sun, Leaf, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatsCard from "@/components/StatsCard";
import EnergyFlow from "@/components/EnergyFlow";
import ChargingStation from "@/components/ChargingStation";
import heroImage from "@/assets/hero-charging.jpg";
import sunplugLogo from "@/assets/sunplug-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={sunplugLogo} 
                alt="SUNPLUG Logo" 
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Accueil
              </a>
              <a href="/map" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Carte
              </a>
              <a href="#history" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Historique
              </a>
              <Button size="sm" className="bg-gradient-energy shadow-glow">
                Mon Compte
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-solar/20 text-solar font-medium text-sm rounded-full border border-solar/30">
                  ☀️ 100% Énergie Renouvelable
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Laissez le soleil
                <span className="block bg-gradient-energy bg-clip-text text-transparent">
                  recharger votre voiture
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Optimisez votre recharge avec l'énergie solaire locale. 
                Économisez jusqu'à 40% sur vos coûts énergétiques tout en réduisant votre empreinte carbone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-energy shadow-glow hover:shadow-xl transition-shadow">
                  <Zap className="w-5 h-5 mr-2" />
                  Démarrer une recharge
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/map">
                    <MapPin className="w-5 h-5 mr-2" />
                    Trouver une borne
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-energy opacity-30 blur-3xl rounded-full" />
              <img 
                src={heroImage}
                alt="Véhicule électrique en recharge sous ombrière solaire"
                className="relative rounded-2xl shadow-glow w-full h-auto border border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Energy Flow Visualization */}
      <section className="py-12 bg-card/50 backdrop-blur-sm border-y border-border/50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Flux énergétique en temps réel
          </h3>
          <EnergyFlow />
        </div>
      </section>

      {/* Stats Dashboard */}
      <section id="dashboard" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground">Tableau de bord</h3>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Aujourd'hui
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatsCard
              title="Énergie solaire produite"
              value="42.8"
              unit="kWh"
              icon={Sun}
              trend="+12%"
              gradient="bg-gradient-solar"
            />
            <StatsCard
              title="Énergie consommée"
              value="38.5"
              unit="kWh"
              icon={Zap}
              trend="+8%"
              gradient="bg-primary"
            />
            <StatsCard
              title="Niveau de batterie"
              value="85"
              unit="%"
              icon={Battery}
              gradient="bg-gradient-energy"
            />
            <StatsCard
              title="CO₂ évité"
              value="12.4"
              unit="kg"
              icon={Leaf}
              trend="+15%"
              gradient="bg-secondary"
            />
          </div>

          {/* Impact Card */}
          <div className="bg-gradient-energy rounded-2xl p-8 shadow-glow text-primary-foreground">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h4 className="text-2xl font-bold mb-2">Votre impact environnemental</h4>
                <p className="text-primary-foreground/80">
                  Ce mois-ci, vous avez évité l'émission de l'équivalent de 
                  <span className="font-bold"> 342 kg de CO₂</span>
                </p>
              </div>
              <Leaf className="w-12 h-12" />
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-primary-foreground/70 mb-1">Taux solaire</p>
                <p className="text-2xl font-bold">87%</p>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70 mb-1">Économies</p>
                <p className="text-2xl font-bold">142€</p>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70 mb-1">Recharges</p>
                <p className="text-2xl font-bold">28</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charging Stations */}
      <section id="stations" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Bornes à proximité</h3>
              <p className="text-muted-foreground">Trouvez la station de recharge idéale</p>
            </div>
            <Button variant="outline" asChild>
              <a href="/map">
                <MapPin className="w-4 h-4 mr-2" />
                Voir la carte
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ChargingStation
              name="Parking Solar+ Centre-Ville"
              type="AC"
              power="22 kW"
              distance="0.8 km"
              available={3}
              total={8}
              price="0.25€/kWh"
            />
            <ChargingStation
              name="Station FastCharge Autoroute"
              type="DC"
              power="150 kW"
              distance="2.3 km"
              available={2}
              total={4}
              price="0.45€/kWh"
            />
            <ChargingStation
              name="Ombrière Solaire Gare"
              type="AC"
              power="11 kW"
              distance="1.2 km"
              available={5}
              total={6}
              price="0.18€/kWh"
            />
            <ChargingStation
              name="SuperCharger Retail Park"
              type="DC"
              power="100 kW"
              distance="3.5 km"
              available={0}
              total={6}
              price="0.42€/kWh"
            />
            <ChargingStation
              name="EcoCharge Résidentiel"
              type="AC"
              power="7 kW"
              distance="0.5 km"
              available={8}
              total={10}
              price="0.15€/kWh"
            />
            <ChargingStation
              name="Station Hub Innovation"
              type="DC"
              power="150 kW"
              distance="4.1 km"
              available={1}
              total={3}
              price="0.48€/kWh"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={sunplugLogo} 
                  alt="SUNPLUG" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                La solution intelligente pour une mobilité électrique durable et économique.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-foreground">Produit</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-foreground">Entreprise</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-foreground">Légal</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Conditions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mentions légales</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2024 SUNPLUG. Tous droits réservés. 🌱 Propulsé par l'énergie solaire.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
