import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <FAQs />
      <Contact/>
    </main>
  );
}
