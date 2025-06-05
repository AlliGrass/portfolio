import ProjectDemoButton from "./ProjectDemoButton"
import ProjectSkillCard from "./ProjectSkillCard"


export default function ProjectCard({projectDetails}: any) {

    

    return (
        <div className="bg-blue-500 p-10 grid grid-cols-2 m-5">
            <div>
                <h1>{projectDetails.title}</h1>
                <p>{projectDetails.description}</p>
                <div className="flex justify-between">
                    <a href={projectDetails.GitHub}>GitHub</a>
                    <ProjectDemoButton projectPreviewLink={projectDetails.preview} projectStatus={projectDetails.status}/>
                </div>
                <div className="flex justify-evenly flex-wrap">
                    {
                        projectDetails.tag.map((skillKey) => {
                            return (
                                <ProjectSkillCard skillKey={skillKey}/>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <img src="https://placehold.co/400x400" alt="" />
            </div>
            
        </div>
    )
} 