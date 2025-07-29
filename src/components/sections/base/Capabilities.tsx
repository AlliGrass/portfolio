"use client";
import React from "react"
import { useState } from "react"
import Projects from "./Projects"
import Skills from "./Skills"

interface FeaturedProject {
    featuredProject: {
        title: string;
        description: string;
        tag: string[];
        github: string;
        preview: string;
        status: string;
    }
}

interface CapabilitiesProps {
    changeFeaturedProject: (project: FeaturedProject) => void
}


const Capabilities = React.forwardRef<HTMLDivElement, CapabilitiesProps>(
    function Capabilities({ changeFeaturedProject }, ref) {
    
    const [selectedTags, setSelectedTags] = useState([])

    const toggleSelectedTags = (updatingTag: string) => {
        setSelectedTags( currentTags => currentTags.includes(updatingTag)? currentTags.filter(tag => tag !== updatingTag) : [...currentTags, updatingTag])
    }

    return (
        <section ref={ref} className="py-10">
            <h2 className="text-center text-section-heading-2xl">Projects</h2>
            <div className="lg:grid lg:grid-cols-5">
                <div className="col-span-1">
                    <Skills updateTags={toggleSelectedTags} selectedTags={selectedTags}/>
                </div>
                
                <div className="col-span-4">
                    <Projects selectedTags={selectedTags} changeFeaturedProject={changeFeaturedProject}/>
                </div>

            
            </div>
        </section>
        
    )
})

export default Capabilities