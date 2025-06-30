'use client';

import { createContext, useContext, useRef } from "react";

const NavigationRefsContext = createContext<any>(null)

export function NavigationRefsProvider({ children }: any) {
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