import classNames from 'classnames';
import { useLayoutEffect, useRef } from 'react';

NavbarBtn.defaultProps = {
	className: '',
	style: {},
};

function NavbarBtn({
	label,
	setActive,
	setIsScrollingIntoView,
	className,
	style,
}) {
	const ref = useRef(null);

	return (
		<button
			ref={ref}
			style={style}
			id={label}
			onClick={(e) => {
				const target = e.target;
				setIsScrollingIntoView(true);
				setActive(target.getBoundingClientRect());
				document.getElementById('#' + label)?.scrollIntoView();
				setTimeout(() => setIsScrollingIntoView(false), 500);
			}}
			className={classNames(
				'text-sm px-2 md:px-3 py-2 rounded-3xl relative md:text-xl overflow-hidden transition-colors duration-[400ms] z-20',
				className
			)}
		>
			{label}
		</button>
	);
}

export default NavbarBtn;
