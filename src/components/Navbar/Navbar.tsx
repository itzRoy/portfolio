import NavbarBtn from '../navbarBtn/NavbarBtn';
import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import { useMotionValue, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
	const [activePosition, setActviePosition] = useState<DOMRect | undefined>();
	const { scrollY } = useScroll();
	const height = useMotionValue(90);
	const backgroundColor = useMotionValue('#164b60');

	useEffect(() => {
		return scrollY.onChange((current) => {
			let previous = scrollY.getPrevious();
			let diff = current - previous;

			if (diff > 0) {
				height.set(Math.max(height.get() - diff * 0.4, 55));
				backgroundColor.set('#03c988');
			} else {
				height.set(Math.min(height.get() - diff, 90));
				backgroundColor.set('#164b60');
			}
		});
	});
	return (
		<motion.div
			style={{ height, backgroundColor }}
			className='flex w-full transition ease-in duration-300 fixed left-0 inset-x-0 bg-secondaryLight px-4 items-center top-0 z-50'
		>
			<div className='w-1/2'>
				<img
					src={logo}
					alt='logo'
				/>
			</div>

			<div className='flex gap-4 relative'>
				<div
					style={{
						width: activePosition?.width,
						height: activePosition?.height,
						left: activePosition?.left
							? activePosition?.left - document.body.offsetWidth / 2
							: 0,
					}}
					className='bg-secondary z-10 absolute transition-all duration-[500ms]  rounded-3xl'
				/>
				<NavbarBtn
					label='About'
					setActive={setActviePosition}
					initial
				/>
				<NavbarBtn
					label='Skills'
					setActive={setActviePosition}
				/>
				<NavbarBtn
					label='Projects'
					setActive={setActviePosition}
				/>
				<NavbarBtn
					label='contact'
					setActive={setActviePosition}
				/>
			</div>
		</motion.div>
	);
};

export default Navbar;
