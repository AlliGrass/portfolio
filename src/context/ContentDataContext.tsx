"use client";

import { createContext, useContext } from "react";

const ContentDataContext = createContext<any>(null)

export function ContentDataProvider({ children, pageContent }: any) {

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