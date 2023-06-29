import profile from '../../assets/profile.png';
import DownloadCvBtn from '../downloadCvBtn/DownloadCvBtn';
function About() {
	return (
		<section
			id='#About'
			className='bg-primary flex flex-wrap px-3 lg:px-20 pt-40 w-full h-screen'
		>
			<div className='flex-2'>
				<div className='flex mb-4'>
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
				<div className='md:pt-2 text-2xl lg:tracking-wider max-w-full flex flex-col '>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
					<div className='self-start md:self-end'>
						<DownloadCvBtn />
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
