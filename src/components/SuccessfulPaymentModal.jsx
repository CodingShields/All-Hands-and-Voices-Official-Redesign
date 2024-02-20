import { useState, useEffect } from "react";

const SuccessfulPaymentModal = ({ show, handleClose }) => {
	const [show, setShow] = useState(show);

	const handleClose = () => {
		console.log("Close Successful Payment Modal");
		setShow(!show);
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<div className={classNames(show ? "fixed h-full w-full bg-black bg-opacity-50 top-0 left-0 " : "collapse")}>
			<div className='flex flex-row justify-between w-full h-fit bg-white mt-16 shadow-2xl shadow-black '>
				<div className='w-fit my-auto ml-4'>
					<img src={logo} className='h-12 ' />
				</div>
				<div className='w-fit'>
					<h1 className='italic text-4xl text-center font-bold text-hvorange p-4 w-full h-fit'>Payment Successful</h1>
				</div>
				<div className='w-fit my-auto'>
					<button onClick={handleClose} className='bg-hvorange text-white p-2 m-4 rounded-lg'>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default SuccessfulPaymentModal;
