import Link from "next/link";
import ThemeSwitcher from "../ui/tempThemeSwitch";
import { useNavigationRefs } from "@/context/NavigationRefsContext";


export default function NavBar({currentPage, changeCurrentPage}: any) {
    const {projectRef, experienceRef} = useNavigationRefs()

    const sectionsDetails = {
        experience: true,
        projects: false,
    }

    const navigateSection = (navInput: string, sectionRef: any) => {
        if (sectionsDetails[navInput] !== currentPage) changeCurrentPage()
        sectionRef.current?.scrollIntoView({ behaviour: "smooth", block: "start"})
    }

    return (
        <div className="bg-[linear-gradient(0deg,#F0F0FF47_0%,#424874_11%,#f0f0ff_14%)] dark:bg-[linear-gradient(0deg,#1a1a1d47_0%,#A64D79_11%,#1a1a1d_14%)] sticky top-0 z-10 p-2 flex justify-between">
            <div>Logo</div>
            <div>
                <button onClick={() => navigateSection("projects", projectRef)}>Project</button>
                <button onClick={() => navigateSection("experience", experienceRef)}>Experience</button>
                {/* <a href="">Resume</a> */}
                <ThemeSwitcher/>
            </div>
            
        </div>
    )
}