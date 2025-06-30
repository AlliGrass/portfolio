import projects from "@/temp/data/projects.json"
import ProjectCard from "../../ui/base/projects/ProjectCard"



const Projects = ({selectedTags, changeFeaturedProject}: any) => {
    return (
        <div>
            <div className="flex justify-evenly list-none flex-wrap">

                {
                    (selectedTags.length === 0? 
                        Object.values(projects) : Object.values(projects).filter(project => project.tag.some(tag => selectedTags.includes(tag)))
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