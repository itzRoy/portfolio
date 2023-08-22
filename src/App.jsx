import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from './components';
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import { getFirestore } from 'firebase/firestore';
import { db } from '../firebaseconfig';
import app from '../firebaseconfig';
import { collection, getDocs } from 'firebase/firestore/lite';

const App = () => {
    const [activeNav, setActiveNav] = useState();
    const [isScrollingIntoView, setIsScrollingIntoView] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            const citiesCol = collection(db, 'metadata');
            const citySnapshot = await getDocs(citiesCol);
            const cityList = citySnapshot.docs[0].data().data;

            setData(cityList);
        };

        getData();
    }, []);

    // useEffect(() => {
    //     emailjs.send(
    //         'service_1w30xq2',
    //         'template_9k70l5q',
    //         {
    //             to_name: 'Roy Issa',
    //             to_email: 'royissa3@gmail.com',
    //             message: 'someone visited you website',
    //         },
    //         'qzQ9yjTipvbjoCWZb',
    //     );
    // }, []);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsScrollingIntoView(true);

            setTimeout(() => {
                setIsScrollingIntoView(false);
            }, 100);
        });
        return () =>
            window.removeEventListener('resize', () => {
                setIsScrollingIntoView(true);

                setTimeout(() => {
                    setIsScrollingIntoView(false);
                }, 100);
            });
    }, []);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id.replace('#', '');
                    const navBtn = document.getElementById(id);

                    setActiveNav(navBtn?.getBoundingClientRect());
                }
            });
        },
        { threshold: 0.5 },
    );

    useEffect(() => {
        let sectionsSelector = document.querySelectorAll('section');
        const sections = [];

        sectionsSelector.forEach((sec) => {
            if (sec.id) sections.push(sec);
        });

        if (!isScrollingIntoView) {
            sections.forEach((section) => {
                if (section?.id?.startsWith('#')) observer.observe(section);
            });
        }

        return () => observer.disconnect();
    }, [isScrollingIntoView, data]);

    return (
        <div className="relative z-0 bg-transparent overflow-hidden">
            {data && (
                <>
                    <Navbar
                        setIsScrollingIntoView={setIsScrollingIntoView}
                        activePosition={activeNav}
                        setActviePosition={setActiveNav}
                    />
                    <Hero setActive={setActiveNav} setIsScrollingIntoView={setIsScrollingIntoView} />
                    <About data={data?.introduction} />
                    <Experience data={data?.experience} />
                    <Works data={data?.works} />
                    <Contact />
                </>
            )}
            {window.innerWidth > 900 ? <StarsCanvas /> : null}
        </div>
    );
};

export default App;
