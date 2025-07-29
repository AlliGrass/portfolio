type SkillCategory = "languages" | "technologies"

interface PageTextProps {
    page_section: string,
    section_text: string[]
}

interface PageContentProps {
    hero: PageTextProps,
    about: PageTextProps,
    personalLinks: {
        social: string,
        img_src: string,
        href_link: string
    },
    skills: {
      skill_key: string,
      title: string,
      category: SkillCategory,
      img_src: string
    }[],
    projects: {
        title: string,
        description: string,
        skill_list: string[],
        img_src: string,
        gif: string,
        github: string,
        status: string
    }[],
    experience: {
        title: string,
        concluded: boolean,
        start_date: string,
        finish_date: string,
        job: string,
        notes: string[],
    }[]
}


interface parseDataProps {
    pageContent: PageContentProps,
    section: string
}


const parseData = ([pageContent, section]: parseDataProps) => {
    return JSON.parse(pageContent.value)[section]
}

export default parseData