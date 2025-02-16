import BirdBanner from "@/components/bird-banner";
import Header from "@/components/header";
import Slider from "@/components/home-slider";
import MedicineFutureSection from "@/components/medicine-future";
import SpeakersSection from "@/components/speakers";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background overflow-hidden">
      <Header />
      <Slider />
      <SpeakersSection />
      <MedicineFutureSection />
      <BirdBanner />
    </div>
  );
}
