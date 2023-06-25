import Navbar from './components/Navbar/Navbar';
import About from './components/about/About';

function App() {
	return (
		<div className='min-h-screen max-h-fit'>
			<Navbar />

			<About />

			<div className='w-full bg-primary h-[1000px] ' />
		</div>
	);
}

export default App;
