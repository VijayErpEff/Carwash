import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Process from "@/components/Process";
import Coverage from "@/components/Coverage";
import Testimonials from "@/components/Testimonials";
import BookCta from "@/components/BookCta";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <RevealInit />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Showcase />
        <Process />
        <Coverage />
        <Testimonials />
        <BookCta />
      </main>
      <Footer />
    </>
  );
}
