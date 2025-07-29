'use server'
import { neon } from "@neondatabase/serverless";

export async function getData() {
    const portfolioDb = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
    
    const experiencesRaw = await portfolioDb`SELECT * FROM experience`
    const personalLinksRaw = await portfolioDb`SELECT * FROM personal_link`
    const projectsRaw = await portfolioDb`SELECT * FROM project`
    const skillsRaw = await portfolioDb`SELECT * FROM skill`
    const aboutInfoRaw = await portfolioDb`SELECT * FROM page_info WHERE page_section = 'about'`
    const heroRaw = await portfolioDb`SELECT * FROM page_info WHERE page_section = 'hero'`

    // return experiencesRaw
    return {
        experience: experiencesRaw,
        personalLinks: personalLinksRaw,
        projects: projectsRaw,
        skills: skillsRaw,
        about: aboutInfoRaw,
        hero: heroRaw
    }
}

