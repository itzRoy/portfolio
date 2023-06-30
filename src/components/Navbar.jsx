import NavbarBtn from './NavbarBtn';
import { useEffect } from 'react';
import { useMotionValue, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { logo } from '../assets';

const Navbar = ({
	activePosition,
	setActviePosition,
	setIsScrollingIntoView,
}) => {
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
			className='draw-to-canvas flex w-full transition ease-in duration-300 fixed left-0 inset-x-0 bg-secondaryLight px-4 items-center top-0 z-40'
		>
			<div
				style={{
					width: activePosition?.width,
					height: activePosition?.height,
					left: activePosition?.left ? activePosition?.left : 2000,
				}}
				className=' animate-opacity bg-secondary z-10 absolute transition-all duration-[500ms]  rounded-3xl'
			/>
			<div className='w-1/2 min-w-[46.67px]'>
				<img src={logo} alt='logo' />
			</div>

			<div className='flex md:gap-4 gap-2 relative px-2'>
				<NavbarBtn
					label='Home'
					setActive={setActviePosition}
					setIsScrollingIntoView={setIsScrollingIntoView}
					className='draw-to-canvas animate-slide-top'
				/>

				<NavbarBtn
					label='Overview'
					setActive={setActviePosition}
					setIsScrollingIntoView={setIsScrollingIntoView}
					className='draw-to-canvas animate-slide-top '
					style={{ animationDelay: '100ms' }}
				/>
				<NavbarBtn
					label='Experience'
					setActive={setActviePosition}
					setIsScrollingIntoView={setIsScrollingIntoView}
					className='draw-to-canvas animate-slide-top '
					style={{ animationDelay: '200ms' }}
				/>
				<NavbarBtn
					label='Projects'
					setActive={setActviePosition}
					setIsScrollingIntoView={setIsScrollingIntoView}
					className='draw-to-canvas animate-slide-top '
					style={{ animationDelay: '300ms' }}
				/>
				<NavbarBtn
					label='Contact'
					setActive={setActviePosition}
					setIsScrollingIntoView={setIsScrollingIntoView}
					className='draw-to-canvas animate-slide-top'
					style={{ animationDelay: '400ms' }}
				/>
			</div>
		</motion.div>
	);
};

export default Navbar;
