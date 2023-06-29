import art from '../../assets/art.svg';
import DownloadCvBtn from '../downloadCvBtn/DownloadCvBtn';
import Typed from 'react-typed';

function Home() {
	return (
		<section
			id='#Home'
			className='flex pt-[100px] bg-primary h-screen px-[80px]'
		>
			<div className='W-full flex-1 flex items-center justify-baseleine text-[3rem]'>
				<div className='w-full mt-52'>
					<h1
						style={{ animationDelay: '1s' }}
						className=' animate-slide-bottom opacity-0'
					>
						Hello, it's Roy
					</h1>
					<h2
						style={{ animationDelay: '0.6s' }}
						className='animate-slide-name opacity-0 my-3'
					>
						And I am
					</h2>
					<div
						style={{ animationDelay: '1s' }}
						className='animate-slide-top opacity-0  bg-primary'
					>
						<Typed
							className='text-green'
							strings={[
								'',
								'',
								' a Front',
								' a Back',
								' a Full-stack developer',
							]}
							typeSpeed={30}
							backDelay={500}
							backSpeed={60}
						/>
					</div>
					<div className=''>
						<DownloadCvBtn />
					</div>
				</div>
			</div>
			<div className='flex-1 flex items-center justify-end'>
				<div
					className='w-1/2 min-w-[496.5px] my-0 mx-auto animate-slide-left opacity-0'
					style={{ animationDelay: '0.6s' }}
				>
					<img src={art} />
				</div>
			</div>
		</section>
	);
}

export default Home;
