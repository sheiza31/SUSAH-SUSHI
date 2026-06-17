import Navbar from "./components/Navbar";
import RootLayout from "./layout";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import BestSeller from "./components/BestSeller";
import Ourclient from "./components/OurClient";
import Contact from "./components/Contact";
import HomeContextProvider from "./context/HomeContext";

export default function Home() {
  return (
   <>
   <RootLayout>
  <HomeContextProvider>
   <Navbar />
   <HeroSection />
   <AboutUs />
   <BestSeller />
   <Ourclient />
   <Contact />
   </HomeContextProvider>
   </RootLayout>
   </>
  );
}
