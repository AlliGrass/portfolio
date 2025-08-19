"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            className="bg-gray-200 dark:bg-blue-500"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
    );
};

export default ThemeToggle;