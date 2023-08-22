import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import Tech from './Tech';
import ServiceCard from './ServiceCard';

const About = ({ data }) => {
    const { title1, title2, content, cards, balls } = data;

    const [thisSection, setThisSection] = useState({});

    useEffect(() => {
        setThisSection(document.getElementById('#Overview')?.getBoundingClientRect());
    }, []);

    return (
        <>
            <section id="#Overview" className="pt-20">
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>{title1}</p>
                    <h2 className={styles.sectionHeadText}>{title2}</h2>
                </motion.div>

                <motion.p variants={fadeIn('', '', 0.1, 1)} className="text-[17px] max-w-3xl leading-[30px]">
                    {content}
                </motion.p>
            </section>

            <div className="mt-10 flex flex-wrap gap-20 xs:justify-center md:justify-start">
                {cards.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
            {thisSection?.x > 20 ? <Tech technologies={balls} /> : null}
        </>
    );
};

export default SectionWrapper(About, 'about');
