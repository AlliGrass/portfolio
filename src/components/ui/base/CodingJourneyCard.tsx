

export default function CodingJourneyCard({timePeriodDetails}: any) {
     
    return (
        <div className="p-5 group relative flex h-20 items-center justify-center">
            <div className="z-10 transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
             group-hover:-translate-x-20">
                <h3>{timePeriodDetails.title}</h3>
                <span>{timePeriodDetails.timeline}</span>
            </div>
            
            <p className="absolute transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
             opacity-0 translate-x-full
             group-hover:opacity-100 group-hover:translate-x-20">
                {timePeriodDetails.summary}
            </p>
        </div>
    )
}