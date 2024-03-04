import React from "react";

function DecorativeLine() {
	return (
		<div className='flex justify-center py-12'>
			<svg viewBox='0 0 100 1' width='200%' height='2'>
				<line x1='0' y1='1' x2='200' y2='1' stroke='#FF7F32' strokeWidth='2' />
			</svg>
		</div>
	);
}

export default DecorativeLine;
