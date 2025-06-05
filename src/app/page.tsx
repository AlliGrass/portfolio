"use client"
import SidePage from "@/components/pages/SidePage";
import Image from "next/image";
import BasePage from "@/components/pages/BasePage";
import { useState } from "react";

import footerLinks from "@/temp/data/personalLinks.json"
import FooterLink from "@/components/ui/FooterLink";

export default function Home() {
  const [showSidePage, setShowSideComponent] = useState(false)

  const toggleSidePage = () => {
    setShowSideComponent(!showSidePage)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="relative flex flex-col gap-[32px] row-start-2 items-center sm:items-start overflow-hidden">


        <div className={`
          relative
          inset-0
          transition-transform duration-500 ease-in-out ${showSidePage ? '-translate-x-full' : 'translate-x-0'}
        `}>
          <BasePage toggleSidePage={toggleSidePage}/>
        </div>


        <div className={`
          absolute
          inset-0
          transition-transform duration-500 ease-in-out ${showSidePage ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <SidePage toggleSidePage={toggleSidePage}/>
        </div>

      </main>


      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {
          Object.values(footerLinks).map((socialDetails) => {
            return (
              <FooterLink socialDetails={socialDetails}/>
            )
          })
        }
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
