import { motion } from 'framer-motion';
import Typed from 'react-typed';
import { styles } from '../styles';
import DownloadCvBtn from './DownloadCvBtn';
import { GithubSvg, art, LinkedinSvg } from '../assets';

const Hero = ({ setActive, setIsScrollingIntoView }) => {
	const onScrollClick = () => {
		setIsScrollingIntoView(true);
		document.getElementById('#Overview').scrollIntoView();
		setActive(document.getElementById('Overview').getBoundingClientRect());
		setTimeout(setIsScrollingIntoView(false), 500);
	};
	return (
		<section
			id='#Home'
			className={`relative w-full min-h-screen mx-auto mt-44`}
		>
			<divscreen
				className={` inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
			>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='w-5 h-5 rounded-full bg-[#f0f0f0]' />
					<div className='w-1 h-80 green-gradient' />
				</div>

				<div className='W-full flex-1 flex items-center justify-baseleine text-[2rem] lg:text-[3rem]'>
					<div className='w-full'>
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
							className='animate-slide-top opacity-0  bg-transparent'
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
						<div className='overflow-hidden mt-10 flex items-center gap-4 w-1/2'>
							<div
								className='animate-slide-left opacity-0'
								style={{
									animationDelay: '2s',
								}}
							>
								<a
									href='https://github.com/itzRoy'
									target='_blank'
								>
									<LinkedinSvg />
								</a>
							</div>
							<div
								className='animate-slide-left opacity-0 w-10 '
								style={{
									animationDelay: '2.1s',
								}}
							>
								<a
									href='https://github.com/itzRoy'
									target='_blank'
								>
									{/* <img
										alt='github-link'
										src={GithubSvg}
										className='w-10'
									/> */}
									<GithubSvg />
								</a>
							</div>
						</div>
						<DownloadCvBtn />
					</div>
				</div>
				<div className=' hidden flex-1 md:flex items-center justify-end'>
					<div
						className='w-full min-w-1/2 my-0 mx-auto animate-slide-left opacity-0'
						style={{ animationDelay: '0.6s' }}
					>
						<img src={art} />
					</div>
				</div>
			</divscreen>

			<div className='absolute bottom-48 w-full flex justify-center items-center'>
				<div
					onClick={onScrollClick}
					className='cursor-pointer w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
				>
					<motion.div
						animate={{
							y: [0, 24, 0],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							repeatType: 'loop',
						}}
						className='w-3 h-3 rounded-full bg-secondary mb-1'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
