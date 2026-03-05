import Header from "./components/Header";
import Hero from "./components/Hero";
import BikeDetails from "./components/BikeDetails";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import CTAApp from "./components/CTAApp";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BikeDetails />
        <HowItWorks />
        <Pricing />
        <CTAApp />
      </main>
      <Footer />
    </>
  );
}
