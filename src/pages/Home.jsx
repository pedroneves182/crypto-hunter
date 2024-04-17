import Hero from "../components/Hero";
import Market from "../components/Market";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";

export default function Home(props) {
  return (
    <main>
      <Hero />
      <Market />
      <WhyUs />
      <Footer />
    </main>
  )
}