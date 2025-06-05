import skills from "@/temp/data/skills.json"

export default function SkillCard({skillKey, updateTags}: any) {
    const skillDetails = skills.fullList[skillKey] 

    return (
        <h4 onClick={() => {updateTags(skillKey)}} className="bg-red-500 p-14 rounded-full m-10">{skillDetails.title}</h4>
    )
}