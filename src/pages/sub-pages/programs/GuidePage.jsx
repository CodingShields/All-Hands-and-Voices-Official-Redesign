import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GBYSPersonalForm from "../../../components/GBYSPersonalForm";
import GbysReferralForm from "../../../components/GbysReferralForm";
import GbysLogo from "../../../assets/images/programs/guide-page/gbys-logo.png";
import DecorativeLine from "../../../components/DecorativeLine";

const GuidePage = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		successMessage: "",
		personalForm: true,
		referralForm: false,
	});

	const [showModal, setShowModal] = useState(false);

	const navigate = useNavigate();

	return (
		<div>
			<div className='w-full h-96 '>
				<div className='w-full h-96 absolute left-36 '>
					<div className='w-fit h-fit bg-hvorange-500 mt-10 rounded-lg p-4 shadow-xl shadow-hvblue-200'>
						<img src={GbysLogo} className='w-64 ' />
					</div>
				</div>
				<div className='w-full bg-hvblue-400 text-white py-24 pl-36'>
					<div className='w-1/2 mx-auto'>
						<h1 className='text-3xl text-center font-bold p-4'>Alabama Hands & Voices Guide By Your Side</h1>
						<p>
							At Alabama Hands & Voices, we understand the power of parents sharing and connecting. The Alabama Hands & Voices Guide By Your Side
							program is dedicated to directly supporting families and their children who have been diagnosed with a hearing loss, by offering
							families the opportunity to talk or meet, face-to-face, with a trained Parent Guide.
						</p>
					</div>
				</div>
			</div>

			<div className='w-full text-center my-20'>
				<div className='w-3/4 mx-auto'>
					<h1 className='text-3xl font-bold text-hvorange-500 p-4'>WHAT THE GBYS PROGRAM CAN DO FOR YOU</h1>
					<p className='w-1/2 mx-auto text-left pb-4'>
						Parent Guides are parents of children who are deaf or hard of hearing who have been trained to provide support and advocacy to families.
						Our guides are able to bring their own experiences in raising a deaf/hh child and are knowledgeable about this journey. To summarize, we
						have been where you currently are.
					</p>
				</div>
			</div>
			<div className='w-full bg-hvblue-400 py-12'>
				<div className='flex flex-row justify-evenly items-center w-1/2 mx-auto py-6'>
					<DecorativeLine />
					<h1 className='text-3xl text-center font-bold text-hvorange-500 '>SERVICES AVAILABLE</h1>
					<DecorativeLine />
				</div>

				<div className='w-3/5 grid grid-cols-3 mx-auto text-white gap-6 text-left'>
					<p>Connection to resources locally, statewide, and nationally specific to hearing loss.</p>
					<p>Regional social events, connection to other families or deaf/hh adults, training and workshops</p>
					<p>Guides specifically for Spanish-speaking families, and/or families with unilateral hearing loss, deaf plus, and more.</p>
					<p>
						Advocacy for families through Early Intervention, transition to school systems, IFSP and IEP development, Special Education law
						information and training, navigating the education maze.
					</p>
					<p>
						Direct parent support from an experienced parent who can support you in understanding your child’s unique needs specific to your family
						journey.
					</p>
				</div>
				<p className='w-1/2 mx-auto text-white text-center p-4 pt-24'>
					Through the support of generous donors, we are able to offer this program free of charge. Enrollment in the program can be anytime from the
					moment you learn your child has a hearing loss or later in life.
				</p>
			</div>
			<div className='w-full'>
				<div className='w-full bg-gray-200 text-left'>
					<p className='w-1/2 mx-auto text-center p-4 py-12'>
						To be connected with a Parent Guide, please fill out the form below. To become an Alabama Hands & Voices member, please go to the
						<a
							onClick={() => {
								navigate("/membership");
							}}
							className='text-hvorange-500 font-bold hover:cursor-pointer'
						>
							{""} Membership page.
						</a>
					</p>
					<p className='w-1/2 mx-auto text-center p-4 py-6'>View or Download GBYS Pamphlet – English or Spanish</p>
				</div>
				{state.GbysPersonalForm && <GBYSPersonalForm />}
			</div>
		</div>
	);
};

export default GuidePage;
