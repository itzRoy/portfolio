import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from "./components";
import { useEffect, useState } from "react";

const App = () => {
	const [activeNav, setActiveNav] = useState();
	const [isScrollingIntoView, setIsScrollingIntoView] = useState(false);

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
			threshold: 0.4,
		}
	);

	useEffect(() => {
		let sectionsSelector = document.querySelectorAll('section')
		const sections = []
		sectionsSelector.forEach(sec => {if(sec.id)sections.push(sec)})
		if (!isScrollingIntoView) {
			sections.forEach((section) => {
				if(section?.id?.startsWith('#')) observer.observe(section);
			});
		}

		return () => observer.disconnect();
	}, [isScrollingIntoView]);
console.log(activeNav);
  return (
      <div className='relative z-0 bg-transparent'>
		<Navbar
				setIsScrollingIntoView={setIsScrollingIntoView}
				activePosition={activeNav}
				setActviePosition={setActiveNav}
			/>
          <Hero setActive={setActiveNav} setIsScrollingIntoView={setIsScrollingIntoView} />
        <About />
        <Experience />
        <Works />
          <Contact />
          <StarsCanvas />
      </div>
  );
}

export default App;
