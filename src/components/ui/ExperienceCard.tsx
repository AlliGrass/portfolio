

export default function ExperienceCard({experienceDetails}: any) {
    
    return (
        <div className="bg-blue-500 p-10 m-5">
            <h1>{experienceDetails.title}</h1>
            <h2>{experienceDetails.position}</h2>
            <span>{experienceDetails.start + " - " + experienceDetails.finish}</span>
            <p>{experienceDetails.description}</p>
            <ul className="list-disc">
                {
                    experienceDetails.experienceNotes.map((note: any) => {
                        return (
                            <li>{note}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}