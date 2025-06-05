import projects from "@/temp/data/projects.json"
import ProjectCard from "../ui/projects/ProjectCard"

export default function Projects({selectedTags}: any) {


    return (
        <div>
            <h2>Featured Projects</h2>
            <div className="flex justify-evenly list-none flex-wrap">

                {
                    (selectedTags.length === 0? 
                        Object.values(projects) : Object.values(projects).filter(project => project.tag.some(tag => selectedTags.includes(tag)))
                    ).map((project) => {
                        return (
                            <ProjectCard projectDetails={project}/>
                        )
                    })
                }

            </div>
            
        </div>
    )
}