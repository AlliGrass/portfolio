import skills from "@/temp/data/skills.json"

export default function ProjectSkillCard({skillKey}: any) {
    const skillDetails = skills.fullList[skillKey] 

    return (
        <img className="w-8 p-1 border rounded-full m-1 bg-[linear-gradient(30deg,#8086B0_0%,#f0f0ff_44%,#A6B1E1_79%)] border-defined-light dark:bg-[linear-gradient(30deg,#59244A_0%,#450C32_44%,#A64D79_79%)] dark:border-defined-dark" src={skillDetails.img_src} alt={skillDetails.title}/>
    )
}