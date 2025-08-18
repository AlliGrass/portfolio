

import { useContentData } from "@/context/ContentDataContext"
import parseData from "@/lib/db/parseData"


export default function Hero() {
    const pageContent = useContentData()
    return(
        <div className="p-40 px-70 flex justify-between bg-[linear-gradient(0deg,#f0f0ff_0%,#D3DCF2_24%,#B4C3E4_76%)] dark:bg-[linear-gradient(0deg,#1A1A1D_0%,#7d4a6b_24%,#450C32_76%)] justify-items-center">
            <div className="flex flex-col justify-center">
                <h1 className="text-6xl">Allison Grasso</h1>
                <span className="text-3xl mt-1">Software Engineer</span>
                <p className="text-xl mt-8">
                {(parseData([pageContent, "hero"]) as unknown as { section_text?: string[] }[]).flatMap(section => section.section_text || []).join(' ')}
                </p>
            </div>
            <div>
                <img className="text-center" src="assets/page-contents/profile.jpg" alt="portrait" />
            </div>

            {/* <Button buttonTitle={"Projects"} linkedRef={"link"} isFunction={false} />
            <Button buttonTitle={"Experience"} linkedRef={toggleSidePage} isFunction={true} />
            <button>Projects \/</button> {""} */}
        </div>
    )
}