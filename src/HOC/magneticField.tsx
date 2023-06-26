import { Elastic, Power4, gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const withMagneticField = (WrappedComponent: HTMLButtonElement | any) => {
	const MagneticField = () => {
		const buttonContainer = useRef<HTMLDivElement | null>(null);
		const buttonRef = useRef<HTMLButtonElement | null>(null);
		const [width, setWidth] = useState(0);
		const [height, setHeight] = useState(0);
		const [left, setLeft] = useState(0);
		const [top, setTop] = useState(0);
		const [x, setX] = useState(0);
		const [y, setY] = useState(0);
		const [cursorX, setCursorX] = useState(0);
		const [cursorY, setCursorY] = useState(0);

		const magneticPullX = 0.4;
		const magneticPullY = 0.2;
		const [isHovering, setIsHovering] = useState(false);

		const setXs = () => {
			const rect = buttonRef.current?.getBoundingClientRect();
			setWidth(rect?.width || 0);
			setHeight(rect?.height || 0);
			setLeft(rect?.left || 0);
			setTop(rect?.top || 0);
		};

		const onEnter = () => {
			gsap.to(buttonRef.current, {
				x: x * magneticPullX,
				y: y * magneticPullY,
				duration: 0.5,
				ease: Power4.easeOut,
			});
		};

		function onLeave() {
			console.log('leave');

			gsap.to(buttonRef.current, {
				x: 0,
				y: 0,
				duration: 0.7,
				ease: Elastic.easeOut.config(1.1, 0.5),
			});
		}

		useEffect(() => {
			const handleMouseMove = (e: MouseEvent) => {
				setCursorX(e.clientX);
				setCursorY(e.clientY);

				const center = {
					x: left + width / 2,
					y: top + height / 2,
				};

				setX(cursorX - center.x);
				setY(cursorY - center.y);

				const distance = Math.sqrt(x * x + y * y);
				const hoverArea = isHovering ? 0.65 : 0.5;
				console.log({ center, distance, hoverArea });

				if (distance < width * hoverArea) {
					if (!isHovering) {
						setIsHovering(true);
					}
					onEnter();
				} else {
					if (isHovering) {
						onLeave();
						setIsHovering(false);
					}
				}
			};

			buttonContainer.current?.addEventListener('mousemove', handleMouseMove);

			return () => {
				buttonContainer.current?.removeEventListener(
					'mousemove',
					handleMouseMove
				);
			};
		}, [
			cursorX,
			cursorY,
			height,
			isHovering,
			left,
			onEnter,
			onLeave,
			top,
			width,
			x,
			y,
		]);

		useEffect(() => {
			setXs();
			window.addEventListener('scrollend', setXs);
			return () => window.removeEventListener('scrollend', setXs);
		}, [buttonRef.current]);

		return (
			<div
				ref={buttonContainer}
				className='sm:w-auto md:w-[500px] md:h-[500px] md:mt-0 mt-10 flex items-center justify-center'
			>
				<WrappedComponent<HTMLButtonElement | any> ref={buttonRef} />
			</div>
		);
	};

	return MagneticField;
};

export default withMagneticField;
