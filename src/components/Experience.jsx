import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import ExperienceCard from './ExperienceCard';

const Experience = ({ data }) => {
    const { title1, title2, cards } = data;

    return (
        <section id="#Experience" className="min-h-screen">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>{title1}</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>{title2}</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {cards.map((experience, index) => (
                        <ExperienceCard key={`experience-${index}`} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default SectionWrapper(Experience, 'work');
