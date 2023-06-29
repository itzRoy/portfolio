import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/about/About';
import Home from './components/home/Home';

function App() {
	const [activeNav, setActiveNav] = useState<DOMRect>();
	const [isScrollingIntoView, setIsScrollingIntoView] = useState(false);

	document.documentElement.classList.remove('dark');
	useEffect(() => {
		window.addEventListener('resize', () => {
			setIsScrollingIntoView(true);
			setTimeout(() => {
				setIsScrollingIntoView(false);
			}, 100);
		});
		return () =>
			window.removeEventListener('resize', () => {
				setIsScrollingIntoView(true);
				setTimeout(() => {
					setIsScrollingIntoView(false);
				}, 100);
			});
	}, []);

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.id.replace('#', '');
					const navBtn = document.getElementById(id);
					setActiveNav(navBtn?.getBoundingClientRect());
				}
			});
		},
		{
			threshold: 0.9,
		}
	);

	useEffect(() => {
		let sections = document.querySelectorAll('section');

		if (!isScrollingIntoView) {
			sections.forEach((section) => {
				observer.observe(section);
			});
		}

		return () => observer.disconnect();
	}, [isScrollingIntoView]);

	return (
		<>
			<Navbar
				setIsScrollingIntoView={setIsScrollingIntoView}
				activePosition={activeNav}
				setActviePosition={setActiveNav}
			/>
			<Home />
			<About />

			<section
				id='#Skills'
				className='h-screen bg-secondary'
			>
				<p>skills</p>
			</section>

			<section
				id='#Projects'
				className='h-screen bg-primary'
			>
				<p>projects</p>
			</section>

			<section
				id='#Contact'
				className='h-screen bg-secondary'
			>
				<p>contact</p>
			</section>
		</>
	);
}

export default App;
