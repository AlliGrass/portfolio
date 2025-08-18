type PageContentSectionType = "experience" | "personalLinks" | "projects" | "skills" | "about" | "hero"

type SkillCategoryType = "languages" | "technologies"

interface SectionTextProps {
    id: number,
    page_section: string,
    section_text: string[]
}

interface SocialLinkProps {
    id: number,
    social: string,
    img_src: string,
    href_link: string
}

interface SkillDetailProps {
    id: number,
    skill_key: string,
    title: string,
    category: SkillCategoryType,
    img_src: string
}

interface ProjectDetailProps {
    id: number,
    title: string,
    description: string,
    skill_list: string[],
    img_src: string,
    gif: string,
    github: string,
    status: string
}

interface ExperienceDetailProps {
    id: number,
    title: string,
    concluded: boolean,
    start_date: string,
    finish_date: string,
    job: string,
    notes: string[]
}

interface PageDataProps {
    hero: Record<string, SectionTextProps>[],
    about: Record<string, SectionTextProps>[],
    personalLinks: Record<string, SocialLinkProps>[],
    skills: Record<string, SkillDetailProps>[],
    projects: Record<string, ProjectDetailProps>[],
    experience: Record<string, ExperienceDetailProps>[]
}


type FeaturedProjectFunctionType = (project: ProjectDetailProps) => void


