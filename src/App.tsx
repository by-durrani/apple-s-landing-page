// components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViewer from "./components/ProductViewer";

// gsap
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// registering the gsap plugins
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <ProductViewer />
    </div>
  );
};

export default App;
