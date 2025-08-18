import AboutMe from "@/components/sections/base/AboutMe";
import Capabilities from "@/components/sections/base/Capabilities";
import { useNavigationRefs } from "@/context/NavigationRefsContext";
import { useState } from "react";

export default function BasePage() {
    

    const {projectRef} = useNavigationRefs()
    const [featuredProject, setFeaturedProject] = useState<ProjectDetailProps>({
        "id": 0,
        "title": "Portfolio",
        "description": "Veritatis optio eius doloribus, quidem repellat, illo facilis architecto",
        "skill_list": ["ts", "rct", "next", "tw"],
        "img_src": "",
        "gif": "",
        "github": "https://github.com/AlliGrass/portfolio",
        "status": "View"
    })

    const handleFeaturedProjectChange: FeaturedProjectFunctionType = (project) => {
        setFeaturedProject(project)
    }

    return (
        <div className="2xl:px-25">
            
        
            <AboutMe featuredProject={featuredProject}/>
    
            <Capabilities ref={projectRef} changeFeaturedProject={handleFeaturedProjectChange}/>
        </div>
    )
}