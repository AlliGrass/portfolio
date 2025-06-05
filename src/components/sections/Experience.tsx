import experiences from "@/temp/data/experience.json"
import ExperienceCard from "../ui/ExperienceCard"

export default function Experience({toggleSidePage}: any) {

    return (
        <div>
            <h1>Experience</h1>
            <button onClick={toggleSidePage}>Go Back</button>
            {
                Object.values(experiences).map((experience) => {
                    return (
                        <ExperienceCard experienceDetails={experience}/>
                    )
                })
            }
        </div>
    )
}