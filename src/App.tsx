// components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViewer from "./components/ProductViewer";

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";

// registering the gsap plugins
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </div>
  );
};

export default App;
