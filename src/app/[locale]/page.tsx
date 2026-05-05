import Sidebar from "@/components/Sidebar";
import VegaHero from "@/components/VegaHero";
import VegaFeatures from "@/components/VegaFeatures";
import VegaLocation from "@/components/VegaLocation";
import VegaStats from "@/components/VegaStats";
import VegaVideo from "@/components/VegaVideo";
import VegaFloorPlan from "@/components/VegaFloorPlan";
import VegaFooter from "@/components/VegaFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <VegaHero />
        <VegaFeatures />
        <VegaLocation />
        <VegaStats />
        <VegaVideo />
        <VegaFloorPlan />
        <VegaFooter />
      </div>
    </div>
  );
}
