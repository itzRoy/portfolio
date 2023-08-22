import React from 'react';

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ProjectCard from './ProjectCard';

const Works = ({ data }) => {
    const { title1, title2, content, cards } = data;

    return (
        <>
            <section id="#Projects">
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText} `}>{title1}</p>
                    <h2 className={`${styles.sectionHeadText}`}>{title2}</h2>
                </motion.div>

                <div className="w-full flex">
                    <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-3 text-[17px] max-w-3xl leading-[30px]">
                        {content}
                    </motion.p>
                </div>
            </section>
            <div className="justify-center md:justify-start mt-20 flex flex-wrap gap-7">
                {cards.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, '');
