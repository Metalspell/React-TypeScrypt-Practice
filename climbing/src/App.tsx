import Navbar from "@/componets/navbar/Navbar"
import { useState, useEffect } from 'react'
import { SelectedPage } from "@/types";
import Home from "@/componets/Home";
import Benefits from "./componets/benefits/Benefits";
import Gallery from "./componets/gallery/Gallery";
import ContactUs from "./componets/ContactUs";
import Footer from "./componets/Footer";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <section className="bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home
        setSelectedPage={setSelectedPage}
      />
      <Benefits
        setSelectedPage={setSelectedPage}
      />
      <Gallery
        setSelectedPage={setSelectedPage}
      />
      <ContactUs 
        setSelectedPage={setSelectedPage}
      />
      <Footer />
    </section>
  )
}

export default App
