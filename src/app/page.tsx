import Header from "@/components/header";
import Slider from "@/components/slider";
import SpeakersSection from "@/components/speakers";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background">
      <Header />
      <Slider />
      <SpeakersSection />
    </div>
  );
}
