
import ExperienceCard from "../../ui/side/ExperienceCard"
import React from "react"
import { useContentData } from "@/context/ContentDataContext"
import parseData from "@/lib/db/parseData"

const Experience = React.forwardRef<HTMLDivElement>((_,ref) => {
    const {pageContent} = useContentData()

    return (
        <div ref={ref} className="p-10">
            <h1 className="text-center text-section-heading-2xl">Experience</h1>
            <div className="p-10 justify-items-center">
                {
                    Object.values(parseData([pageContent, 'experience'])).map((experience, index) => {
                        return (
                            <ExperienceCard key={index} experienceDetails={experience}/>
                        )
                    })
                }
            </div>
        </div>
    )
})

export default Experience