import experiences from "@/temp/data/experience.json"
import ExperienceCard from "../../ui/side/ExperienceCard"
import React, { useEffect } from "react"
import { getData } from "@/lib/db/getData"
import { useContentData } from "@/context/ContentDataContext"
import parseData from "@/lib/db/parseData"

const Experience = React.forwardRef<any, any>(({toggleSidePage}: any, ref) => {
    const {pageContent} = useContentData()

    return (
        <div ref={ref} className="p-10">
            <h1 className="text-center text-section-heading-2xl">Experience</h1>
            <div className="p-10 justify-items-center">
                {
                    Object.values(parseData([pageContent, 'experience'])).map((experience) => {
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