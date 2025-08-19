

import { useContentData } from "@/context/ContentDataContext"
import parseData from "@/lib/db/parseData"


export default function Hero() {
    const pageContent = useContentData()
    return(
        <div className="gap-1  flex items-center justify-center md:px-30 lg:px-50 xl:p-30 2xl:p-40 xl:grid xl:grid-cols-2 bg-[linear-gradient(0deg,#f0f0ff_0%,#D3DCF2_24%,#B4C3E4_76%)] dark:bg-[linear-gradient(0deg,#1A1A1D_0%,#7d4a6b_24%,#450C32_76%)] justify-items-center">
            <div className="p-20 flex flex-col justify-center">
                <h1 className="text-5xl 2xl:text-6xl">Allison Grasso</h1>
                <span className="text-2xl mt-1 2xl:text-3xl">Software Engineer</span>
                <p className="text-xl mt-8">
                {(parseData([pageContent, "hero"]) as unknown as { section_text?: string[] }[]).flatMap(section => section.section_text || []).join(' ')}
                </p>
            </div>
            <div>
                <img className="text-center hidden xl:block xl:w-100 2xl:w-120" src="assets/page-contents/profile.jpg" alt="portrait" />
            </div>
        </div>
    )
}