
import ProjectCard from "../../ui/base/projects/ProjectCard"
import { useContentData } from "@/context/ContentDataContext"
import parseData from "@/lib/db/parseData"



const Projects = ({selectedTags, changeFeaturedProject}: any) => {
    const {pageContent} = useContentData()

    return (
        <div>
            <div className="flex justify-evenly list-none flex-wrap">

                {
                    (selectedTags.length === 0? 
                        parseData([pageContent, "projects"]) : parseData([pageContent, "projects"]).filter(project => project.tag.some(tag => selectedTags.includes(tag)))
                    ).map((project) => {
                        return (
                            <ProjectCard projectDetails={project} changeFeaturedProject={changeFeaturedProject}/>
                        )
                    })
                }

            </div>
            
        </div>
    )
}

export default Projects