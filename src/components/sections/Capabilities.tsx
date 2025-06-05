"use client";
import { useState } from "react"
import Projects from "./Projects"
import Skills from "./Skills"


export default function Capabilities() {
    const [selectedTags, setSelectedTags] = useState([])

    const toggleSelectedTags = (updatingTag: string) => {
        setSelectedTags( currentTags => currentTags.includes(updatingTag)? currentTags.filter(tag => tag !== updatingTag) : [...currentTags, updatingTag])
    }

    return (
        <div>

            <h1>
                {selectedTags}
            </h1>

            <Skills updateTags={toggleSelectedTags}/>


            <Projects selectedTags={selectedTags}/>
        </div>
    )
}