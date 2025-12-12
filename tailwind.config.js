/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./layouts/**/*.html",
        "./content/**/*.md",
        "./static/admin/**/*.html"
    ],
    theme: {
        extend: {
            colors: {
                'brand-orange': '#F97316',
                'brand-black': '#111111',
                'brand-gray': '#F5F5F5',
            },
            fontFamily: {
                'serif': ['"Playfair Display"', 'Georgia', 'serif'],
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
