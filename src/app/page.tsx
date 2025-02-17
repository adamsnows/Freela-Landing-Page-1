import BirdBanner from "@/components/bird-banner";
import CircleCountdownTimer from "@/components/circle-timer";
import Footer from "@/components/footer";
import FAQ from "@/components/frequently-questions";
import Header from "@/components/header";
import Slider from "@/components/home-slider";
import HowToArriveSection from "@/components/how-to-arrive";
import MedicineFutureSection from "@/components/medicine-future";
import OrganizingCommitteeSection from "@/components/organizing-committee";
import ScheduleSection from "@/components/schedule-section";
import SpeakersSection from "@/components/speakers";
import StayInSection from "@/components/stay-in";

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
      <OrganizingCommitteeSection />
      <FAQ />
      <StayInSection />
      <HowToArriveSection />
      <Footer />
    </div>
  );
}
