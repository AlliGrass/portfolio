import { RefObject } from 'react';
import ThemeSwitcher from "../ui/tempThemeSwitch";
import { useNavigationRefs } from "@/context/NavigationRefsContext";
import { useContentData } from "@/context/ContentDataContext";
import parseData from "@/lib/db/parseData";
import { useTheme } from "next-themes";

interface NavBarProps {
    currentPage: boolean,
    toggleSidePage: () => void
}



export default function NavBar({currentPage, toggleSidePage}: NavBarProps) {
    const { theme } = useTheme()
    const { pageContent } = useContentData()
    const {projectRef, experienceRef} = useNavigationRefs()

    const sectionsDetails = {
        experience: true,
        projects: false,
    }

    const navigateSection = (navInput: string, sectionRef: RefObject<HTMLElement>) => {
        if (sectionsDetails[navInput] !== currentPage) toggleSidePage()
        sectionRef.current?.scrollIntoView({ behaviour: "smooth", block: "start"})
    }
    
    const logoDetails = parseData([pageContent, "personalLinks"]).find((socialDetails) => socialDetails.social === "logo")
    console.log(logoDetails)

    return (
        <div className="h-15 bg-[linear-gradient(0deg,#F0F0FF47_0%,#424874_11%,#f0f0ff_14%)] dark:bg-[linear-gradient(0deg,#1a1a1d47_0%,#A64D79_11%,#1a1a1d_14%)] sticky top-0 z-10 p-2 flex justify-between">
            <a className="inline-block max-w-full max-h-full" href={logoDetails.href_link}>
                <img className="max-w-full max-h-full w-auto h-auto object-contain" src={theme === "light"? "assets/page-contents/initialLogoLight.png" : "assets/page-contents/initialLogoDark.png" } alt={logoDetails.social}/>
            </a>
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