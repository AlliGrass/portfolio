
import ProjectCard from "../../ui/base/projects/ProjectCard"
import { useContentData } from "@/context/ContentDataContext"
import parseData from "@/lib/db/parseData"



const Projects = ({selectedTags, changeFeaturedProject}: any) => {
    const {pageContent} = useContentData()

    const skillList = parseData([pageContent, "skills"])
    

    return (
        <div>
            <div className="flex justify-evenly list-none flex-wrap">

                {
                    (selectedTags.length === 0? 
                        parseData([pageContent, "projects"]) : parseData([pageContent, "projects"]).filter(project => project.skill_list.some(tag => selectedTags.includes(tag)))
                    ).map((project) => {
                        return (
                            <ProjectCard projectDetails={project} changeFeaturedProject={changeFeaturedProject} skillList={skillList.filter((skillDetails) => project.skill_list.includes(skillDetails.skill_key))} />
                        )
                    })
                }

            </div>
            
        </div>
    )
}

export default Projects