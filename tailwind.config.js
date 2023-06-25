/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#03C988',
                secondary: '#1B6B93',
                'secondary-dark': '#164B60',
                'secondary-light': '#4FC0D0',
            },
            keyframes: {
                ripple: {
                    to: {
                        transform: 'scale(4)',
                        opacity: 0,
                    },
                },
            },
            animation: {
                ripple: 'ripple 600ms linear',
            },
        },
    },
    plugins: [],
};
