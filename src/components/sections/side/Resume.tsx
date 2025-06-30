import resumeDetails from "@/temp/data/resume.json"

export default function Resume() {

    return (
        <div className="px-100">
            <h1>{resumeDetails.profile.name}</h1>
            <span>{resumeDetails.profile.email + " | " + resumeDetails.profile.website}</span>
            <p>{resumeDetails.profile.summary}</p>
            {/* line */}

            <h2>Key Skills</h2>
            {
                resumeDetails.skill.languages.map((skill) => { // join(", ")
                    return (
                        <p>{skill}</p>
                    )
                })
            }
        </div>
        
    )
}