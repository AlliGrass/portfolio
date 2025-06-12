'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type Theme = "light" | "dark"
type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: any) {
    const [theme, setTheme] = useState<Theme>("light")
    //     () => {
    //     if (typeof window !== 'undefined') {
    //         const savedTheme = localStorage.getItem('theme') as Theme | null
    //         if (savedTheme) return savedTheme

    //         const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    //         return systemPrefersDark ? "dark" : "light"
    //     }
    //     return "light" 
    // })

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.classList.toggle("dark", theme === "dark")
    }, [theme])

    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === "dark" ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    return context
}