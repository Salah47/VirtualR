import FeatureSection from "./Components/FeatureSection"
import Footer from "./Components/Footer"
import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import Price from "./Components/Price"
import Testimonial from "./Components/Testimonial"
import Workflow from "./Components/Workflow"


const App = () => {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
      </div>
      <FeatureSection/>
      <Workflow/>
      <Price/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
