import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import Apps from "@/app/components/Apps";
import Services from "@/app/components/Services";
import Process from "@/app/components/Process";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Apps />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
