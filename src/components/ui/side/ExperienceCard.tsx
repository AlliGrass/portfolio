

export default function ExperienceCard({experienceDetails}: any) {
    
    return (
        <div className="w-100 md:w-150 xl:w-180 p-10 m-5 rounded-lg bg-secondary-light dark:bg-secondary-dark">
            <h1 className="text-xl">{experienceDetails.title}</h1>
            <h2 className="text-lg">{experienceDetails.job}</h2>
            {
                experienceDetails.concluded? <span className="text-sm">{experienceDetails.start_date + " - " + (experienceDetails.finish_date ?? experienceDetails.finish_date)}</span> : <></>
            }
            
            <ul className="list-disc">
                {
                    experienceDetails.notes.map((note: any) => {
                        return (
                            <li>{note}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}