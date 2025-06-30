import AboutMe from "@/components/sections/base/AboutMe";
import Capabilities from "@/components/sections/base/Capabilities";
import { useNavigationRefs } from "@/context/NavigationRefsContext";
import { useState } from "react";

export default function BasePage() {
    const {projectRef} = useNavigationRefs()
    const [featuredProject, setFeaturedProject] = useState({
        "title": "Portfolio",
        "description": "Veritatis optio eius doloribus, quidem repellat, illo facilis architecto",
        "tag": ["ts", "rct", "next", "tw"],
        "github": "https://github.com/AlliGrass/portfolio",
        "preview": "",
        "status": "Complete"
    })

    return (
        <div className="2xl:px-25">
            
        
            <AboutMe featuredProject={featuredProject}/>
    
            <Capabilities ref={projectRef} changeFeaturedProject={setFeaturedProject}/>
        </div>
    )
}