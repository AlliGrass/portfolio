'use client';

import { createContext, useContext, useRef } from "react";

interface NavigationRefsContextProps {
    [key: string]: string
}

const NavigationRefsContext = createContext<NavigationRefsContextProps | null>(null)

interface NavigationRefsProviderProps {
    children: React.ReactNode
}

export function NavigationRefsProvider({ children }: NavigationRefsProviderProps) {
    const projectsRef = useRef(null)
    const experienceRef = useRef(null)

    return(
        <NavigationRefsContext.Provider value={{projectRef: projectsRef, experienceRef: experienceRef}}>
            {children}
        </NavigationRefsContext.Provider>
    )
}

export function useNavigationRefs() {
    const context = useContext(NavigationRefsContext)
    return context
}