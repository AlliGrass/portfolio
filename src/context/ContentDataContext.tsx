"use client";

import React, { createContext, useContext } from "react";

interface ContentDataContextProps {
    [key: string]: string
}

const ContentDataContext = createContext<ContentDataContextProps | null>(null)

interface ContentDataProviderProps {
    children: React.ReactNode,
    pageContent: any
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