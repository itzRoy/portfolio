import profile from '../../assets/profile.png';
import DownloadCvBtn from '../downloadCvBtn/DownloadCvBtn';

function About() {
	return (
		<div className='bg-primary flex px-20 pt-40 w-full h-screen'>
			<div className='flex flex-1 '>
				<div className='rounded-[50%] w-[60PX] h-auto bg-white border-white ring-[0.375rem] ring-white self-start overflow-hidden'>
					<img
						src={profile}
						className=''
					/>
				</div>

				<div>
					<p className='relative before:absolute before:h-1.5 ml-2 before:rounded-e-lg before:w-[105%] before:bg-white before:bottom-[-10px] before:left-[-7px] text-3xl'>
						About Me
					</p>
				</div>
			</div>
			<div className='flex-1'>
				<DownloadCvBtn />
			</div>
		</div>
	);
}

export default About;
