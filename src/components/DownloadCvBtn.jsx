import createRipple from '../utils/ripplesEffect';
import withMagneticField from '../hoc/magneticField';
import { downloadIcon } from '../assets';
import React from 'react';
import cv from '../../resume.pdf';
const DownloadCvBtn = React.forwardRef((props, ref) => {
	function downloadFunc(e) {
		e.preventDefault();
		const anchor = document.createElement('a');
		anchor.setAttribute('href', cv);
		anchor.setAttribute('download', 'Roy-resume');
		ref.current.appendChild(anchor);
		anchor.click();
		ref.current.removeChild(anchor);
	}
	return (
		<button
			{...props}
			ref={ref}
			className='px-10 py-5 rounded-3xl animateBtn bg-secondary relative text-xl overflow-hidden transition-colors duration-[400ms]'
			onClick={(e) => {
				e.preventDefault();
				createRipple(e);
				downloadFunc(e);
			}}
		>
			<span>Donwload Cv</span>
			<img
				className='inline-block ml-4'
				alt='download-icon'
				src={downloadIcon}
			/>
		</button>
	);
});

export default withMagneticField(DownloadCvBtn);
