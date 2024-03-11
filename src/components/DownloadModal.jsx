import { useState, useEffect } from "react";
import CloseButton from "./CloseButton";
import GBYSEnglish from "../assets/documents/GBYS-English.pdf";
import GBYSSpanish from "../assets/documents/GBYS-Spanish.pdf";

const DownloadModal = ({ closeModal }) => {
	const handlePdfClick = (e) => {
		const value = e.target.value;
		if (value === "English") {
			window.open(GBYSEnglish);
		} else if (value === "Spanish") {
			window.open(GBYSSpanish);
		} else if (value === "downloadEnglish") {
			const link = document.createElement("a");
			link.href = GBYSEnglish;
			link.download = "GBYS-English.pdf";
			link.click();
		} else if (value === "downloadSpanish") {
			const link = document.createElement("a");
			link.href = GBYSSpanish;
			link.download = "GBYS-Spanish.pdf";
			link.click();
		}
	};

	return (
		<div className='w-full screen bg-black bg-opacity-50 fixed top-0 left-0 z-50'>
			<div className='w-fit h-fit  bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl p-4'>
				<div className='absolute top-0 right-0 mr-6'>
					<CloseButton onClick={closeModal} />
				</div>
				<div className='grid grid-cols-2 gap-4 justify-center items-center w-full h-full p-4'>
					<button
						onClick={handlePdfClick}
						value='English'
						className='bg-hvorange-500 text-white p-2 rounded-lg hover:bg-hvorange-300 hover:text-hvblue-500 transition-all ease-in-out duration-300'
					>
						{" "}
						View English PDF
					</button>
					<button
						onClick={handlePdfClick}
						value='Spanish'
						className='bg-hvorange-500 text-white p-2 rounded-lg hover:bg-hvorange-300 hover:text-hvblue-500 transition-all ease-in-out duration-300'
					>
						{" "}
						View Spanish PDF
					</button>
					<button
						onClick={handlePdfClick}
						value='downloadEnglish'
						className='bg-hvorange-500 text-white p-2 rounded-lg hover:bg-hvorange-300 hover:text-hvblue-500 transition-all ease-in-out duration-300'
					>
						{" "}
						Download English PDF
					</button>
					<button
						onClick={handlePdfClick}
						value='downloadSpanish'
						className='bg-hvorange-500 text-white p-2 rounded-lg hover:bg-hvorange-300 hover:text-hvblue-500 transition-all ease-in-out duration-300'
					>
						{" "}
						Download Spanish PDF
					</button>
				</div>
			</div>
		</div>
	);
};

export default DownloadModal;
