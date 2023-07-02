import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import Tech from './Tech';
import ServiceCard from './ServiceCard';

const About = () => {
	return (
		<>
			<section
				id='#Overview'
				className='pt-20'
			>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>Introduction</p>
					<h2 className={styles.sectionHeadText}>Overview.</h2>
				</motion.div>

				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='text-[17px] max-w-3xl leading-[30px]'
				>
					I'm a skilled software developer with experience in TypeScript and
					JavaScript, and expertise in frameworks like React, Node.js, and
					Three.js. I'm a quick learner and collaborate closely with clients to
					create efficient, scalable, and user-friendly solutions that solve
					real-world problems. Let's work together to bring your ideas to life!
				</motion.p>
			</section>

			<div className='mt-10 flex flex-wrap gap-20 xs:justify-center md:justify-start'>
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
			<Tech />
		</>
	);
};

export default SectionWrapper(About, 'about');
