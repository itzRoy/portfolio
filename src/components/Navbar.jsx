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
	const initialHeight = window.innerWidth < 900 ? 50 : 90;
	const { scrollY } = useScroll();
	const height = useMotionValue(initialHeight);
	const backgroundColor = useMotionValue('#164b60');
	const opacity = useMotionValue(1);

	useEffect(() => {
		return scrollY.onChange((current) => {
			let previous = scrollY.getPrevious();
			let diff = current - previous;

			if (diff > 0) {
				height.set(
					Math.max(height.get() - diff * 0.4, initialHeight === 90 ? 55 : 0)
				);
				backgroundColor.set('#03c988');
				opacity.set(Math.max(opacity.get() - diff * 0.1, 0));
			} else {
				height.set(Math.min(height.get() - diff, initialHeight));
				opacity.set(Math.min(opacity.get() - diff * 0.4, 1));
				backgroundColor.set('#164b60');
			}
		});
	});
	return (
		<motion.div
			style={{
				height,
				backgroundColor,
				opacity: initialHeight === 90 ? 1 : opacity,
			}}
			className='overflow-hidden flex w-screen transition ease-in duration-300 fixed left-0 inset-x-0 bg-secondaryLight py-4 md:px-4 items-center top-0 z-40'
		>
			<div
				style={{
					width: activePosition?.width,
					height: activePosition?.height,
					left: activePosition?.left ? activePosition?.left : 2000,
				}}
				className=' animate-opacity bg-secondary z-10 absolute transition-all duration-[500ms]  rounded-3xl'
			/>
			{initialHeight === 90 ? (
				<div className='w-1/2 min-w-[60px]'>
					<img
						className='w-[30px] md:w-[40px] min-w-0'
						src={logo}
						alt='logo'
					/>
				</div>
			) : null}

			<div className='flex md:gap-4  relative px-2'>
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

			{/* <div className='w-1/2 min-w-[60px] justify-end'>
			 		<img
			 			className='ml-auto w-[30px] md:w-[40px] min-w-0'
						src={logo}
						alt='logo'
					/>
			 	</div> */}
		</motion.div>
	);
};

export default Navbar;
