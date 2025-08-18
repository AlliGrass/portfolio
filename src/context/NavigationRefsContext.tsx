'use client';

import { createContext, useContext, useRef } from "react";

interface NavigationRefsContextProps {
    projectRef: React.RefObject<HTMLDivElement | null>,
    experienceRef: React.RefObject<HTMLDivElement | null>
}

const NavigationRefsContext = createContext<NavigationRefsContextProps | null>(null)

interface NavigationRefsProviderProps {
    children: React.ReactNode
}

export function NavigationRefsProvider({ children }: NavigationRefsProviderProps) {
    const projectsRef = useRef<HTMLDivElement>(null)
    const experienceRef = useRef<HTMLDivElement>(null)

    return(
        <NavigationRefsContext.Provider value={{projectRef: projectsRef, experienceRef: experienceRef}}>
            {children}
        </NavigationRefsContext.Provider>
    )
}

export function useNavigationRefs() {
    const context = useContext(NavigationRefsContext)
    if (context === null) {
        throw new Error('useNavigationRefs must be used within a NavigationRefsProvider');
    }
    return context
}