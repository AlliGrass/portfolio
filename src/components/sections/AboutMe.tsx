import journey from "@/temp/data/journey.json"
import CodingJourneyCard from "../ui/CodingJourneyCard"

export default function AboutMe() {

    return(
        <div className="grid grid-cols-2"> 
            <section className="justify-items-center">
            



                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio eius doloribus, quidem repellat, illo facilis architecto provident corrupti necessitatibus perspiciatis sapiente molestias maiores? Tenetur possimus provident soluta nam architecto.</p>

            </section>










            
            <section className="justify-items-center">
                <h2>Coding Journey</h2>
                {/* need to switch order to descending or relabel */}
                {Object.entries(journey).map(([, details]) => {
                    return (
                        <CodingJourneyCard timePeriodDetails={details}/>
                    )
                })}
            </section>
        </div>
    )
}