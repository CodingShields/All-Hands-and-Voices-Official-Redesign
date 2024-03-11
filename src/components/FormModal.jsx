import { useState, useEffect } from "react";

const FormModal = ({ show, handleCloseModal, forms }) => {
	const [showModal, setShowModal] = useState(show);
	const [formsArray, setForms] = useState({ forms });

	const handleClose = () => {
		setShowModal(false);
		handleCloseModal();
	};

	return (
		<div
			className={
				showModal
					? "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center scale-100 transition-all ease-in-out duration-300"
					: "hidden"
			}
        ><div>
               
        </div>
            

        </div>
	);
};

export default FormModal;
