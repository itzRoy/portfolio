/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                primary: '#03C988',
                tertiary: '#151030',
                secondary: '#1B6B93',
                'secondary-dark': '#164B60',
                'secondary-light': '#4FC0D0',
                'black-100': '#100d25',
                'black-200': '#090325',
                'white-100': '#f3f3f3',
            },
            boxShadow: { card: '0px 35px 120px -15px #211e35' },
            screens: { xs: '450px' },
            backgroundImage: { 'hero-pattern': "url('/src/assets/herobg.png')" },
            keyframes: {
                ripple: {
                    to: {
                        transform: 'scale(4)',
                        opacity: 0,
                    },
                },
                'slide-right': {
                    '0%': {
                        transform: 'translateX(-100px)',
                        opacity: 0,
                    },

                    '100%': {
                        transform: 'translateX(0)',
                        opacity: 1,
                    },
                },
                'slide-left': {
                    '0%': {
                        transform: 'translateX(500px)',
                        opacity: 0,
                    },

                    '100%': {
                        transform: 'translateX(0)',
                        opacity: 1,
                    },
                },
                'slide-top': {
                    '0%': {
                        transform: 'translateY(150px)',
                        opacity: -1,
                    },

                    '100%': {
                        transform: 'translateY(0)',
                        opacity: 1,
                    },
                },
                'slide-bottom': {
                    '0%': {
                        transform: 'translateY(-150px)',
                        opacity: -1,
                    },

                    '100%': {
                        transform: 'translateY(0)',
                        opacity: 1,
                    },
                },
                opacity: {
                    '0%': { opacity: 0 },
                    '99%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                ripple: 'ripple 600ms linear',
                opacity: 'opacity 1s ease forwards',
                'slide-right': 'slide-right 1s ease forwards',
                'slide-left': 'slide-left 1s ease forwards',
                'slide-name': 'slide-right 0.6s ease forwards',
                'slide-top': 'slide-top 0.6s ease forwards',
                'slide-bottom': 'slide-bottom 0.6s ease forwards',
            },
        },
    },
    plugins: [],
};
