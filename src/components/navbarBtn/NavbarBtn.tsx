import classNames from 'classnames';
import { useLayoutEffect, useRef } from 'react';

type navbarBtnType = {
	label: string;
	setActive: (arg: DOMRect) => void;
	setIsScrollingIntoView: React.Dispatch<React.SetStateAction<boolean>>;
	initial?: boolean;
	className: string;
	style: React.CSSProperties;
};

NavbarBtn.defaultProps = {
	className: '',
	style: {},
};

function NavbarBtn({
	label,
	setActive,
	setIsScrollingIntoView,
	initial,
	className,
	style,
}: navbarBtnType) {
	const ref = useRef<HTMLButtonElement | null>(null);

	useLayoutEffect(() => {
		if (initial) {
			setActive(ref.current?.getBoundingClientRect() as DOMRect);
		}
	}, [ref.current]);

	return (
		<button
			ref={ref}
			style={style}
			id={label}
			onClick={(e) => {
				const target = e.target as HTMLElement;
				setIsScrollingIntoView(true);
				setActive(target.getBoundingClientRect());
				document.getElementById('#' + label)?.scrollIntoView();
				setTimeout(() => setIsScrollingIntoView(false), 500);
			}}
			className={classNames(
				'draw-to-canvas px-3 py-2 rounded-3xl relative text-xl overflow-hidden transition-colors duration-[400ms] z-20',
				className
			)}
		>
			{label}
		</button>
	);
}

export default NavbarBtn;
