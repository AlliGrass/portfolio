"use client";

import React, { createContext, useContext } from "react";

interface ContentDataContextProps {
    [key: string]: string
}

const ContentDataContext = createContext<ContentDataContextProps | null>(null)


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
        notes: string[]
    }[]
}



interface ContentDataProviderProps {
    children: React.ReactNode,
    pageContent: PageContentProps
}

export function ContentDataProvider({ children, pageContent}: ContentDataProviderProps) {

    return (
        <ContentDataContext.Provider value={{pageContent}}>
            {children}
        </ContentDataContext.Provider>
    )
}

export function useContentData() {
    const context = useContext(ContentDataContext)
    return context
}