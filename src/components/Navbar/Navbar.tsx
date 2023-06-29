import NavbarBtn from '../navbarBtn/NavbarBtn';
import { useEffect } from 'react';
import Logo from '../../assets/logo';
import { useMotionValue, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';

type navBarType = {
	activePosition?: DOMRect;
	setActviePosition: (arg: DOMRect) => void;
	setIsScrollingIntoView: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({
	activePosition,
	setActviePosition,
	setIsScrollingIntoView,
}: navBarType) => {
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
				<Logo />
			</div>

			<div className='flex md:gap-4 gap-2 relative px-2'>
				<NavbarBtn
					label='Home'
					setActive={setActviePosition}
					setIsScrollingIntoView={setIsScrollingIntoView}
					className='draw-to-canvas animate-slide-top'
					initial
				/>

				<NavbarBtn
					label='About'
					setActive={setActviePosition}
					setIsScrollingIntoView={setIsScrollingIntoView}
					className='draw-to-canvas animate-slide-top '
					style={{ animationDelay: '100ms' }}
				/>
				<NavbarBtn
					label='Skills'
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
