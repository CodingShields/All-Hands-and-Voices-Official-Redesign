import CloseButton from "./CloseButton";

const ErrorModal = ({ error, onClose }) => {
	return (
		<div className='w-full h-full flex justify-center'>
			<div className='w-fit h-fit mx-auto my-auto  bg-red-100 p-4 rounded-2xl shadow-xl shadow-red-400'>
					<CloseButton onClick={onClose} />
				<h2 className='text-2xl font-bold text-red-500 text-center'>Error:</h2>
				<p className='text-lg font-bold text-red-500 text-center'>{error}</p>
			</div>
		</div>
	);
};

export default ErrorModal;
