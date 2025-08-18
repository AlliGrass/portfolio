"use client";

import React, { createContext, useContext } from "react";



const ContentDataContext = createContext<PageDataProps>({} as PageDataProps)

interface ContentDataProviderProps {
    children: React.ReactNode,
    pageContent: PageDataProps
}

export function ContentDataProvider({ children, pageContent}: ContentDataProviderProps) {

    return (
        <ContentDataContext.Provider value={pageContent}>
            {children}
        </ContentDataContext.Provider>
    )
}

export function useContentData() {
    const context = useContext(ContentDataContext)
    if (!context) {
        throw new Error('useContentData must be used within a ContentDataProvider');
    }
    return context
}