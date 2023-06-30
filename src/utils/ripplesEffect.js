function createRipple(event) {
	const button = event.target;
		const circle = document.createElement('span');
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - button?.offsetLeft - radius}px`;

		circle.style.top = `${event.clientY - button?.offsetTop - radius}px`;
		circle.classList.add(
			...[
				'animate-ripple',
				'absolute',
				'bg-white',
				'rounded-[50%]',
				'z-30',
				'opacity-40',
			]
		);

		const ripple = button.getElementsByClassName('animate-ripple')[0];

		if (ripple) {
			ripple.remove();
		}

		button.appendChild(circle);
}

export default createRipple;
