import Link from "next/link";
import ThemeSwitcher from "../ui/tempThemeSwitch";
import { useNavigationRefs } from "@/context/NavigationRefsContext";
import { useContentData } from "@/context/ContentDataContext";
import parseData from "@/lib/db/parseData";


export default function NavBar({currentPage, changeCurrentPage}: any) {
    const { pageContent } = useContentData()
    const {projectRef, experienceRef} = useNavigationRefs()

    const sectionsDetails = {
        experience: true,
        projects: false,
    }

    const navigateSection = (navInput: string, sectionRef: any) => {
        if (sectionsDetails[navInput] !== currentPage) changeCurrentPage()
        sectionRef.current?.scrollIntoView({ behaviour: "smooth", block: "start"})
    }
    
    const logoDetails = parseData([pageContent, "personalLinks"]).find((socialDetails) => socialDetails.social === "logo")
    console.log(logoDetails)

    return (
        <div className="h-15  bg-[linear-gradient(0deg,#F0F0FF47_0%,#424874_11%,#f0f0ff_14%)] dark:bg-[linear-gradient(0deg,#1a1a1d47_0%,#A64D79_11%,#1a1a1d_14%)] sticky top-0 z-10 p-2 flex justify-between">
            <a className="object-contain" href={logoDetails.href_link}><img className="h-auto" src={logoDetails.img_src} alt={logoDetails.social} /></a>
            {/* <div>Logo</div> */}
            <div>
                <button onClick={() => navigateSection("projects", projectRef)}>Project</button>
                <button onClick={() => navigateSection("experience", experienceRef)}>Experience</button>
                {/* <a href="">Resume</a> */}
                <ThemeSwitcher/>
            </div>
            
        </div>
    )
}