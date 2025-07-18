
import SkillCard from "../../ui/base/SkillCard"
import { useState } from "react"
import { useContentData } from "@/context/ContentDataContext"
import parseData from "@/lib/db/parseData"

export default function Skills({updateTags, selectedTags}: any) {
    const {pageContent} = useContentData()
    const [openLanguagesFilter, setOpenLanguagesFilter] = useState(true)
    const [openTechnologiesFilter, setOpenTechnologiesFilter] = useState(true)

    const clearFilters = () => {
        selectedTags.forEach((tag) => {
            updateTags(tag)
        })
    }
    // console.log("hello there " + parseData([pageContent, "languages"]).map((skillDetails)))

    return (
        <div className="p-5 m-2 hidden sm:hidden md:grid md:grid-cols-3 lg:block bg-secondary-light dark:bg-secondary-dark">
            <div>
                <h2>Filters</h2>
                {/* {
                    selectedTags.length === 0? <p className="p-2">No filters applied</p> : <>
                        <div className="flex flex-wrap m-1">
                            {selectedTags.map((tag) => {
                                const tagDetails = skills.fullList[tag]
                                
                                return <img className="w-8 p-1 border rounded-full m-1 bg-[linear-gradient(30deg,#8086B0_0%,#f0f0ff_44%,#A6B1E1_79%)] border-defined-light dark:bg-[linear-gradient(30deg,#59244A_0%,#450C32_44%,#A64D79_79%)] dark:border-defined-dark" src={tagDetails.img_src} alt={tagDetails.title}/>
                            }) }
                        </div>
                        <Button buttonTitle={"Clear Filter"} linkedRef={clearFilters} isFunction={true}/>
                    </>
                    
                    
                } */}
            </div>
                
            <div>
                <h3 className="text-xl hover:cursor-pointer" onClick={() => setOpenLanguagesFilter(!openLanguagesFilter)}>Languages</h3>
                    <div className={`${openLanguagesFilter? "lg:block md:flex": "hidden"}`}>
                        {
                            parseData([pageContent, "languages"]).map((skillDetails) => { // use memo this
                                return (
                                    <SkillCard skillDetails={skillDetails} updateTags={updateTags} selectedTags={selectedTags}/>
                                )
                            })
                        }
                </div>
            </div>
            
            
            <div>
                <h3 className="text-xl hover:cursor-pointer" onClick={() => setOpenTechnologiesFilter(!openTechnologiesFilter)}>Technologies</h3>
                <div className={`${openTechnologiesFilter? "lg:block md:flex": "hidden"}`}>
                    {
                        parseData([pageContent, "technologies"]).map((skillDetails) => {
                            return (
                                <SkillCard skillDetails={skillDetails} updateTags={updateTags} selectedTags={selectedTags}/>
                            )
                        })
                    }
                </div>
            </div>
            
            
        </div>
    )
}