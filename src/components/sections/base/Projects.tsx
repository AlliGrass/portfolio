
import ProjectCard from "../../ui/base/projects/ProjectCard"
import { useContentData } from "@/context/ContentDataContext"
import parseData from "@/lib/db/parseData"



interface ProjectProps {
    selectedTags: string[],
    changeFeaturedProject: FeaturedProjectFunctionType
}

const Projects = ({selectedTags, changeFeaturedProject}: ProjectProps) => {
    const pageContent = useContentData()

    const skillList = parseData([pageContent, "skills"])
    

    return (
        <div>
            <div className="flex justify-evenly list-none flex-wrap">

                {
                    (parseData([pageContent, "projects"]) as unknown as ProjectDetailProps[])
                    .filter(project => 
                        selectedTags.length === 0 ||
                        project.skill_list.some(tag => selectedTags.includes(tag))
                    )
                    .map((project) => (
                        <ProjectCard
                        key={project.id}
                        projectDetails={project}
                        changeFeaturedProject={changeFeaturedProject}
                        skillList={(skillList as unknown as SkillDetailProps[])
                            .filter(skillDetails => 
                            project.skill_list.includes(skillDetails.skill_key)
                            )}
                        />
                    ))
                }

            </div>
            
        </div>
    )
}

export default Projects