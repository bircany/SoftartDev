/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6D28D9", // A vibrant purple
                secondary: "#4C1D95", // Darker purple
                accent: "#8B5CF6", // Lighter purple for highlights
                "background-light": "#F3F4F6", // Light gray for light mode (fallback)
                "background-dark": "#050505", // Deep black for dark mode
                "surface-dark": "#121212",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Space Grotesk", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                xl: "1rem",
                '2xl': "1.5rem",
            },
            backgroundImage: {
                'purple-gradient': 'linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)',
                'grid-pattern': "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
            },
            animation: {
                'blob': 'blob 7s infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'shimmer': 'shimmer 1.5s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shimmer: {
                    '100%': { transform: 'translateX(100%)' }
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
