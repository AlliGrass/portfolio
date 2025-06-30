import experiences from "@/temp/data/experience.json"
import ExperienceCard from "../../ui/side/ExperienceCard"
import React from "react"

const Experience = React.forwardRef<any, any>(({toggleSidePage}: any, ref) => {
    return (
        <div ref={ref} className="p-10">
            <h1 className="text-center text-section-heading-2xl">Experience</h1>
            <div className="p-10 justify-items-center">
                {
                    Object.values(experiences).map((experience) => {
                        return (
                            <ExperienceCard experienceDetails={experience}/>
                        )
                    })
                }
            </div>
            
        </div>
    )
})

export default Experience