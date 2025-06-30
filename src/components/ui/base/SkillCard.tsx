import skills from "@/temp/data/skills.json"

export default function SkillCard({skillKey, updateTags, selectedTags}: any) {
    const skillDetails = skills.fullList[skillKey] 

    return (
        <div onClick={() => {updateTags(skillKey)}} className="flex items-center rounded hover:cursor-pointer hover:bg-hover-light hover:dark:bg-hover-dark">
            <img className={`m-1 ${selectedTags.includes(skillKey)? 'w-10 p-1 m-2 border rounded-full bg-[linear-gradient(30deg,#8086B0_0%,#f0f0ff_44%,#A6B1E1_79%)] border-defined-light dark:bg-[linear-gradient(30deg,#59244A_0%,#450C32_44%,#A64D79_79%)] dark:border-defined-dark': 'w-12 p-2'}`} src={skillDetails.img_src} alt={skillDetails.title}/>
            <p className="md:hidden lg:block">{skillDetails.title}</p>
        </div>
    )
}