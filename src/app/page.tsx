import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import EventInfo from "@/components/EventInfo";
import RSVPForm from "@/components/RSVPForm";
import DigitalEnvelope from "@/components/DigitalEnvelope";
import Organizer from "@/components/Organizer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Gallery />
      <EventInfo />
      <RSVPForm />
      <DigitalEnvelope />
      <Organizer />
      <Footer />
    </main>
  );
}
