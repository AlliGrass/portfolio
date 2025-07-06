import ProjectDemoButton from "./ProjectDemoButton"
import ProjectSkillCard from "./ProjectSkillCard"


export default function ProjectCard({projectDetails, changeFeaturedProject}: any) {

    

    return (
        <div className="w-100 sm:w-120 md:w-120 lg:w-100 xl:w-120 2xl:w-130 p-10 rounded-lg grid grid-cols-2 gap-4 m-2 bg-secondary-light dark:bg-secondary-dark">
            <div className="flex flex-col justify-between">
                <h1 className="text-center text-xl">{projectDetails.title}</h1>
                <p>{projectDetails.description}</p>
                <div>
                    <div className="flex justify-between text-sm">
                        <a className="border rounded p-1 border-defined-light hover:cursor-pointer bg-button-light hover:bg-hover-light dark:border-defined-dark dark:bg-button-dark hover:dark:bg-hover-dark" href={projectDetails.GitHub}>GitHub</a>
                        <button onClick={() => changeFeaturedProject(projectDetails)} className="border rounded p-1 border-defined-light hover:cursor-pointer bg-button-light hover:bg-hover-light dark:border-defined-dark dark:bg-button-dark hover:dark:bg-hover-dark">{projectDetails.status}</button>
                        {/* <ProjectDemoButton projectPreviewLink={projectDetails.preview} projectStatus={projectDetails.status}/> */}
                    </div>
                    <div className="flex flex-wrap">
                        {
                            projectDetails.skill_list.map((skillKey) => {
                                return (
                                    <ProjectSkillCard skillKey={skillKey}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div>
                <img className="" src="https://placehold.co/400x400" alt="" />
            </div>
            
        </div>
    )
} 