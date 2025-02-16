import BirdBanner from "@/components/bird-banner";
import CircleCountdownTimer from "@/components/circle-timer";
import Header from "@/components/header";
import Slider from "@/components/home-slider";
import MedicineFutureSection from "@/components/medicine-future";
import ScheduleSection from "@/components/schedule-section";
import SpeakersSection from "@/components/speakers";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background overflow-hidden">
      <Header />
      <Slider />
      <SpeakersSection />
      <MedicineFutureSection />
      <BirdBanner />
      <CircleCountdownTimer />
      <ScheduleSection />
    </div>
  );
}
