/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                agdasima: [ 'Agdasima', 'sans-serif']
            }, 
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
                'slide-right': {
                    '0%': {
                        transform: 'translateX(-100px)',
                            opacity: 0
                        },
                 
                    '100%': {
                        transform: 'translateX(0)',
                        opacity: 1
                    }
                },
                'slide-left': {
                    '0%': {
                        transform: 'translateX(500px)',
                            opacity: 0
                        },
                 
                    '100%': {
                        transform: 'translateX(0)',
                        opacity: 1
                    }
                },
                'slide-top': {
                    '0%': {
                        transform: 'translateY(150px)',
                            opacity: -1
                        },
                 
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: 1
                    }
                },
                'slide-bottom': {
                    '0%': {
                        transform: 'translateY(-150px)',
                            opacity: -1
                        },
                 
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: 1
                    }
                },
                opacity: {
                    '0%': {
            
                            opacity: 0
                        },
                 "99%": {
                    opacity: 0
                 },
                    '100%': {
                        opacity: 1
                    }
                }
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
