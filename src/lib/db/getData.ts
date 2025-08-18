'use server'
import { neon } from "@neondatabase/serverless";

export async function getData() {
    const portfolioDb = neon(process.env.NEXT_PUBLIC_DATABASE_URL || '');
    
    const [experiencesRaw, personalLinksRaw, projectsRaw, skillsRaw, aboutInfoRaw, heroRaw] = 
        await Promise.all([
        portfolioDb`SELECT * FROM experience`,
        portfolioDb`SELECT * FROM personal_link`,
        portfolioDb`SELECT * FROM project`,
        portfolioDb`SELECT * FROM skill`,
        portfolioDb`SELECT * FROM page_info WHERE page_section = 'about'`,
        portfolioDb`SELECT * FROM page_info WHERE page_section = 'hero'`
    ]);

    const result = { // json response
        experience: experiencesRaw,
        personalLinks: personalLinksRaw,
        projects: projectsRaw,
        skills: skillsRaw,
        about: aboutInfoRaw,
        hero: heroRaw
    }

    console.log(result)
    // return experiencesRaw
    return result
}

