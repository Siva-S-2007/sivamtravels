import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Packages from '@/components/Packages';
import Navagraha from '@/components/Navagraha';
import WhyChoose from '@/components/WhyChoose';
import UpcomingJourneys from '@/components/UpcomingJourneys';
import Gallery from '@/components/Gallery';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Navagraha />
        <WhyChoose />
        <UpcomingJourneys />
        <Gallery />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
