import skills from "@/temp/data/skills.json"
import SkillCard from "../ui/SkillCard"

export default function Skills({updateTags}: any) {

    return (
        <div>
            <h2>Skills</h2>
            <h3>Languages</h3>
            <div className="flex justify-evenly list-none flex-wrap">
                {
                    skills.languages.map((languageKey) => {
                        return (
                            <SkillCard skillKey={languageKey} updateTags={updateTags}/>
                        )
                    })
                }
            </div>

            <h3>Technologies</h3>
            <div className="flex justify-evenly list-none flex-wrap">
                {
                    skills.technologies.map((technologyKey) => {
                        return (
                            <SkillCard skillKey={technologyKey} updateTags={updateTags}/>
                        )
                    })
                }
            </div>
        </div>
    )
}