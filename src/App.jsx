import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobeSection from "./components/GlobeSection"
import Hero from "./components/Hero"
import InvestmentSection from "./components/InvestmentSection"
import Navbar from "./components/Navbar"
import PropertySection from "./components/PropertySection"
import WaitlistForm from "./components/WaitlistForm"
import PoweredByBase from "./components/PoweredByBase";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <GlobeSection />
      <PropertySection />
      <InvestmentSection />
      <PoweredByBase />
      <WaitlistForm />
      <Footer />
      <ToastContainer position="top-right" />
    </>
  )
}

export default App
