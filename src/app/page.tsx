"use client"
import SidePage from "@/components/pages/SidePage";
import BasePage from "@/components/pages/BasePage";
import { useState } from "react";


import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import NavBar from "@/components/sections/NavBar";

export default function Home() {
  const [showSidePage, setShowSidePage] = useState(false)

  const toggleSidePage = () => {
    setShowSidePage(!showSidePage)
  }

  return (
      <main className="">
        <Hero/>
        <NavBar currentPage={showSidePage} toggleSidePage={toggleSidePage}/>
        <div className="relative flex flex-col gap-[32px] row-start-2 p-10 items-center sm:items-start overflow-clip">
          <div className={`
            relative
            inset-0
            transition-transform duration-500 ease-in-out ${showSidePage ? '-translate-x-full' : 'translate-x-0'}
          `}>
            <BasePage/>
          </div>


          <div className={`
            absolute
            inset-0
            transition-transform duration-500 ease-in-out ${showSidePage ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <SidePage/>
          </div>
        </div>  
        <Footer/>
      </main>

  );
}
