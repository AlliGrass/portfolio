import journey from "@/temp/data/journey.json"
import CodingJourneyCard from "../../ui/base/CodingJourneyCard"
import text from "@/temp/data/text.json"

const AboutMe = ({featuredProject}: any) => {
    const aboutMeText = text.about

    return(
        <div className="px-20 xl:grid xl:grid-cols-2"> 
            <section className="px-5 justify-items-center">
            
                <h2 className="text-section-heading-2xl">About Me</h2>
                {
                    aboutMeText.map((text, index) => {
                        return (
                            <p className="p-5 text-lg">{text}</p>
                        )
                    })
                }
            </section>



            <section className="justify-items-center">
                <h2 className="text-section-heading-2xl">Featured Project</h2>
                
                <div>
                    <img className="p-4" src="https://placehold.co/1980x1080" alt="" />
                    <div className="px-10">
                        <h3 className="text-xl">{featuredProject.title}</h3>
                        <p>{featuredProject.description}</p> 
                    </div>

                    
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