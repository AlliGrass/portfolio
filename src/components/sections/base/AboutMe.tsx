import { useContentData } from "@/context/ContentDataContext"
import parseData from "@/lib/db/parseData"

interface AboutMeProps {
    featuredProject: ProjectDetailProps
}

const AboutMe = ({featuredProject}: AboutMeProps) => {
    const pageContent = useContentData()

    return(
        <div className="px-20 xl:grid xl:grid-cols-2"> 
            <section className="px-5 justify-items-center">
            
                <h2 className="text-section-heading-2xl">About Me</h2>
                {(parseData([pageContent, "about"]) as unknown as Array<{section_text?: string[]}>)
                    .flatMap(section => 
                        section.section_text?.map((text, index) => (
                        <p className="p-5 text-lg" key={index}>{text}</p>
                        )) || []
                )}
            </section>



            <section className="justify-items-center">
                <h2 className="text-section-heading-2xl">Featured Project</h2>
                <h3 className="text-xl">{featuredProject.title}</h3>
                <p>{featuredProject.status}</p>
                <div>
                    <img className="p-4" src="https://placehold.co/1980x1080" alt="" />
                </div>
                
                {/* need to switch order to descending or relabel
                {Object.entries(journey).map(([, details]) => {
                    return (
                        <CodingJourneyCard timePeriodDetails={details}/>
                    )
                })} */}
            </section>
        </div>
    )
}

export default AboutMe