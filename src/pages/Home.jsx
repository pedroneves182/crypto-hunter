import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Market from "../components/Market";

export default function Home(props) {
  return (
    <main>
      <Hero />
      <Market />
    </main>
  )
}