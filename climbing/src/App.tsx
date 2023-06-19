import Navbar from "@/componets/navbar/Navbar"
import { useState } from 'react'
import { SelectedPage } from "./types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home); 
  return (
    <section className="bg-gray-20">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </section>
  )
}

export default App
