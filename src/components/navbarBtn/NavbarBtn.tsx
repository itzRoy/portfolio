import { useRef } from 'react';

type navbarBtnType = {
	label: string;
	setActive: (arg: DOMRect) => void;
	setIsScrollingIntoView: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavbarBtn({
	label,
	setActive,
	setIsScrollingIntoView,
}: navbarBtnType) {
	const ref = useRef<HTMLButtonElement | null>(null);

	return (
		<button
			ref={ref}
			id={label}
			onClick={(e) => {
				const target = e.target as HTMLElement;
				setIsScrollingIntoView(true);
				setActive(target.getBoundingClientRect());
				document.getElementById('#' + label)?.scrollIntoView();
				setTimeout(() => setIsScrollingIntoView(false), 500);
			}}
			className='px-3 py-2 rounded-3xl relative text-xl overflow-hidden transition-colors duration-[400ms] z-20'
		>
			{label}
		</button>
	);
}

export default NavbarBtn;
