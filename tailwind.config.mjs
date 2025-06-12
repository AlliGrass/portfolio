import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './node_modules/my-library/**/*.js',
    ],

    darkMode: 'class', // or 'media' for OS-level dark mode

    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            colors: {
                brand: {
                    light: '#a5b4fc',
                    DEFAULT: '#6366f1',
                    dark: '#4f46e5',
                },
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
        },
    },

    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                '.text-shadow': {
                    'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.1)',
                },
            });
        }),
    ],

    // Force include certain classes (e.g., for CMS-generated content)
    safelist: [
        'bg-red-500',
        'text-xl',
        {
            pattern: '/bg-(red|blue|green)-(100|500|800)/',
        },
    ],
};