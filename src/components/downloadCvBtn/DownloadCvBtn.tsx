import createRipple from '../../utils/ripplesEffect';
import withMagneticField from '../../HOC/magneticField';
import downloadIcon from '../../assets/upload.svg';
import React from 'react';

const DownloadCvBtn = React.forwardRef<HTMLButtonElement | null>(
	(props, ref) => {
		return (
			<button
				{...props}
				ref={ref}
				className='px-10 py-5 rounded-3xl animateBtn bg-secondary-dark relative text-xl overflow-hidden transition-colors duration-[400ms]'
				onClick={(e) => {
					createRipple(e);
				}}
			>
				<span>Donwload Resume</span>
				<img
					className='inline-block ml-4'
					alt='download-icon'
					src={downloadIcon}
				/>
			</button>
		);
	}
);

export default withMagneticField(DownloadCvBtn);
