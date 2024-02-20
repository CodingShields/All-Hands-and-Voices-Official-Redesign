import { useState, useEffect } from "react";
import logo from "../assets/images/membership-modal/logo.png";
import membership1 from "../assets/images/membership-modal/membership1.jpg";
import membership2 from "../assets/images/membership-modal/membership2.jpg";
import membership3 from "../assets/images/membership-modal/membership3.png";
import membership4 from "../assets/images/membership-modal/membership4.jpg";
const MembershipModal = ({ show, closeModal }) => {
	const [showModal, setShowModal] = useState(show);

	const handleEnclosedPayment = () => {
		console.log("Enclosed Payment");
		setShowModal(!showModal);
		closeModal(!showModal);
	};
	// Function to open PayPal payment in a new window
	function openPayPalWindow(e) {
		const url = e.target.value;
		console.log(url);
		// Define the URL to redirect to after payment
		var redirectURL = url;
		// Define the width and height of the new window
		var windowWidth = 600;
		var windowHeight = 400;

		// Calculate the position of the new window to center it on the screen
		var currentWindowHeight = window.innerHeight;
		console.log(currentWindowHeight);

		var currentWindowWidth = window.innerWidth;
		console.log(currentWindowWidth);
		var windowLeft = (currentWindowWidth - windowWidth) / 2;
		var windowTop = (currentWindowHeight - windowHeight) / 2;

		// Open the new window with specified dimensions and position
		var newWindow = window.open(
			redirectURL,
			"_blank",
			"width=" + windowWidth + ", height=" + windowHeight + ", top=" + windowTop + ", left=" + windowLeft
		);

		// Attach an onunload event listener to the new window
		newWindow.onunload = function () {
			// This function will be executed when the new window is closed
			// You can perform any necessary actions here
			console.log("Window closed");
			// For example, you can reload the current page
			// window.location.reload();
		};

		// Focus on the new window (optional)
		if (newWindow) {
			newWindow.focus();
		}
	}

	return (
		<div
			className={
				show
					? "fixed h-full w-full bg-black bg-opacity-50 top-0 left-0 duration-500 transition-all ease-in-out scale-100 "
					: "fixed h-full w-full bg-black bg-opacity-50 top-0 left-0 duration-500 transition-all ease-in-out scale-0"
			}
		>
			<div className='flex flex-row justify-between w-full h-fit bg-white mt-16 shadow-2xl shadow-black '>
				<div className='w-fit my-auto ml-4'>
					<img src={logo} className='h-12 ' />
				</div>
				<div className='w-fit'>
					<h1 className='italic text-4xl text-center font-bold text-hvorange p-4 w-full h-fit'>Select Your Membership</h1>
				</div>
				<div className='w-fit my-auto'>
					<button
						onClick={handleEnclosedPayment}
						className='bg-hvorange w-fit h-fit py-2 px-4 mr-4 mx-auto rounded-lg text-white text-xs hover:bg-hvblue ease-in-out duration-300 hover:shadow-hvorange hover:shadow-md shadow-md shadow-hvblue active:translate-y-1'
					>
						I enclosed my payment
					</button>
				</div>
			</div>
			<div className='flex flex-row w-full h-3/4 justify-center items-center '>
				<div className='flex flex-col h-80 w-72 bg-white  p-2 rounded-lg mx-auto my-4 shadow-2xl shadow-black'>
					<img src={membership1} className='shadow-lg shadow-slate-400' />
					<div>
						<h1 className='text-lg font-bold text-black pt-2 text-center ease-in-out transition-all duration-30 group-hover:text-hvorange'>
							$25.00 MEMBERSHIP
						</h1>
						<p className='text-xs text-black pb-1 text-center ease-in-out transition-all duration-30 group-hover:text-hvblue'>
							Parents, Students, DHH Adults
						</p>
						<div className='flex flex-col items-center justify-end'>
							<button
								onClick={openPayPalWindow}
								value='https://www.paypal.com/webapps/hermes?token=913701388P039380N&useraction=commit&wpsFlowRedirectToXorouterSkipHermesStartTime=1708458036892&flowType=WPS&mfid=1708458036582_f9983311a3f2e'
								className='bg-hvorange w-36 text-center h-fit py-2 px-4 mt-2 rounded-lg text-white text-xs hover:bg-hvblue ease-in-out duration-300 hover:shadow-hvorange hover:shadow-md shadow-md shadow-hvblue active:translate-y-1'
							>
								$25 Membership
							</button>
						</div>
					</div>
				</div>
				<div className='flex flex-col h-80 w-72 bg-white  p-2 rounded-lg mx-auto my-4 shadow-2xl shadow-black'>
					<img src={membership2} className='shadow-lg shadow-slate-400' />
					<div className='flex flex-col items-center justify-end h-full'>
						<h1 className='text-md font-bold text-black pt-4 whitespace-nowrap text-center ease-in-out transition-all duration-30 group-hover:text-hvorange'>
							$40 PROFESSIONAL MEMBERSHIP
						</h1>
						<div className='flex flex-col h-full w-full items-center justify-end '>
							<button
								value='https://www.paypal.com/webapps/hermes?token=913701388P039380N&useraction=commit&wpsFlowRedirectToXorouterSkipHermesStartTime=1708458036892&flowType=WPS&mfid=1708458036582_f9983311a3f2e'
								className='bg-hvorange w-36 text-center h-fit py-2 px-4 rounded-lg text-white text-xs hover:bg-hvblue ease-in-out duration-300 hover:shadow-hvorange hover:shadow-md shadow-md shadow-hvblue active:translate-y-1'
							>
								$40 Membership
							</button>
						</div>
					</div>
				</div>
				<div className='flex flex-col h-80 w-72 bg-white  p-2 rounded-lg mx-auto my-4 shadow-2xl shadow-black'>
					<img src={membership3} className='shadow-lg shadow-slate-400' />
					<h1 className='text-md font-bold text-black pt-4 whitespace-nowrap text-center ease-in-out transition-all duration-30 group-hover:text-hvorange'>
						$50 ORGANIZATION MEMBERSHIPS
					</h1>
					<div className='flex flex-col items-center justify-end h-full'>
						<button
							value='https://www.paypal.com/webapps/hermes?token=913701388P039380N&useraction=commit&wpsFlowRedirectToXorouterSkipHermesStartTime=1708458036892&flowType=WPS&mfid=1708458036582_f9983311a3f2e'
							className='bg-hvorange w-36 h-fit py-2 px-4 mt-4 rounded-lg text-white text-xs hover:bg-hvblue ease-in-out duration-300 hover:shadow-hvorange hover:shadow-md shadow-md shadow-hvblue active:translate-y-1'
						>
							$50 MEMBERSHIPS
						</button>
					</div>
				</div>
				<div className='flex flex-col h-80 w-72 bg-white  p-2 rounded-lg mx-auto my-4 shadow-2xl shadow-black'>
					<img src={membership4} className='shadow-lg shadow-slate-400' />
					<h1 className='text-md font-bold text-black pt-4 whitespace-nowrap text-center ease-in-out transition-all duration-30 group-hover:text-hvorange'>
						$ Custom Donation
					</h1>
					<div className='flex flex-col items-center justify-end h-full'>
						<button
							value='https://www.paypal.com/webapps/hermes?token=913701388P039380N&useraction=commit&wpsFlowRedirectToXorouterSkipHermesStartTime=1708458036892&flowType=WPS&mfid=1708458036582_f9983311a3f2e'
							className='bg-hvorange w-36 h-fit py-2 px-4 mt-4 text-center rounded-lg text-white text-xs hover:bg-hvblue ease-in-out duration-300 hover:shadow-hvorange hover:shadow-md shadow-md shadow-hvblue active:translate-y-1'
						>
							Make a Donation
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MembershipModal;
