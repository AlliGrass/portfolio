import skills from "@/temp/data/skills.json"

export default function ProjectSkillCard({skillKey}: any) {
    const skillDetails = skills.fullList[skillKey] 

    return (
        <h4 className="bg-red-500 p-4 rounded-full m-2 text-xs">{skillDetails.title}</h4> // imgs
    )
}