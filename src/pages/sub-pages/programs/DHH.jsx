import { useState, useEffect } from "react";
import ErrorModal from "../../../components/ErrorModal";
import commiteebanner from "../../../assets/images/programs/dhh/commiteebanner.jpg";

const DHH = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		errorModal: false,
		loading: false,
		success: false,
		successMessage: "",
		authorize: false,
	});

	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		childName: "",
		email: "",
		childBirth: "",
		communicationMode: "",
		other: false,
		otherData: "",
		questions: "",
	});

	const initialState = {
		formData: {
			name: "",
			phone: "",
			childName: "",
			email: "",
			childBirth: "",
			communicationMode: "",
			other: false,
			otherData: "",
			questions: "",
		},
		state: {
			error: false,
			errorMessage: "",
			errorModal: false,
			loading: false,
			success: false,
			successMessage: "",
			authorize: false,
		},
	};
	console.log(state);

	useEffect(() => {
		setFormData(initialState.formData);
		setState(initialState.state);
	}, []);

	const handleCommunicationSelection = (e) => {
		const value = e.target.value;
		if (e.target.value === "other") {
			setFormData({ ...formData, other: !formData.other });
		} else if (formData.communicationMode.includes(value)) {
			setFormData({ ...formData, communicationMode: formData.communicationMode.filter((item) => item !== value) });
		} else {
			setFormData({ ...formData, communicationMode: [...formData.communicationMode, value] });
		}
	};

	const handleAuthorizeOnChange = () => {
		setState({ ...state, authorize: !state.authorize });
		console.log(state.authorize);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.authorize) {
			console.log(formData);
		} else {
			setState({
				...state,
				error: true,
				errorMessage: "Please authorize Alabama Hands & Voices to disclose your information to our Parent Guide(s)",
			});
			console.log("test");
		}
	};
	return (
		<div className='w-full h-full my-8 animate-fadeIn'>
			{state.error ? (
				<div className='fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50'>
					<ErrorModal error={state.errorMessage} onClose={() => setState({ ...state, error: false })} />
				</div>
			) : null}

			<div className='w-1/2 mx-auto space-y-8'>
				<h1 className='font-kaushan text-6xl text-center py-6 '>DHH Committee</h1>
				<img src={commiteebanner} className='w-3/4 mx-auto rounded-2xl shadow-2xl' />
				<p className='w-3/4 mx-auto text-justify'>
					The inclusion of Deaf and Hard of Hearing committee members can have a profound impact for everyone, child, parent and professional. Deaf
					and Hard of Hearing (DHH) committee members are uniquely qualified to provide the child, parents, professionals, and the family's broader
					community with a positive and hopeful perspective drawn from their day-to-day real life experiences as a person who lives with hearing loss.
				</p>
				<h1 className='font-bold text-3xl text-center'>Deaf or Hard of Hearing Committee Members can…</h1>
				<ol className='w-3/4 mx-auto text-justify list-disc list-inside space-y-2 text-xl'>
					<li>Provide exposure to a variety of communication modes and methods to families with children who are deaf or hard of hearing.</li>
					<li>Increase awareness of and sensitivity to issues faced by individuals who are deaf or hard of hearing.</li>
					<li>Share information through personal experiences.</li>
					<li>Create a safe place in which children, parents and professionals can ask questions about hearing loss.</li>
					<li>Provide input to families seeking a better understanding of hearing loss</li>
				</ol>
			</div>
			<div className='w-11/12 mx-auto py-4'>
				<form className='w-3/4 mx-auto bg-hvblue p-8 space-y-8 rounded-xl shadow-2xl text-white'>
					<div className='flex flex-row justify-around w-full mx-auto mb-4'>
						<div className='flex flex-col w-full px-4 group'>
							<label className='group-focus:text-hvorange'>Name:</label>
							<input
								onChange={(e) => {
									setFormData({ ...formData, parentName: e.target.value });
								}}
								type='text'
								className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
							/>
						</div>

						<div className='flex flex-col w-full px-4'>
							<label for='inputTel'>Phone Number:</label>
							<input
								onChange={(e) => {
									setFormData({ ...formData, phone: e.target.value });
								}}
								type='tel'
								className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
							/>
						</div>
						<div className='flex flex-col w-full px-4'>
							<label for='inputEmail'>Email:</label>
							<input
								onChange={(e) => {
									setFormData({ ...formData, email: e.target.value });
								}}
								type='email'
								className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								id='inputEmail'
								aria-describedby='emailHelp'
							/>
							<small id='emailHelp' className='form-text text-muted'>
								We'll never share your email with anyone else.
							</small>
						</div>
					</div>
					<div className='flex flex-row justify-around w-full mx-auto mb-4'>
						<div className='flex flex-col w-full px-4'>
							<label for='childName'>Child's Name:</label>
							<input
								onChange={(e) => {
									setFormData({ ...formData, childName: e.target.value });
								}}
								name='childName'
								className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
							/>
						</div>
						<div className='flex flex-col w-full px-4'>
							<label for='childName'>Child Birthday</label>
							<input
								onChange={(e) => {
									setFormData({ ...formData, childBirth: e.target.value });
								}}
								type='date'
								className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
							/>
						</div>
					</div>

					<div>
						<p className='pb-4'>Communication Mode(s):</p>
						<ul onChange={handleCommunicationSelection} className='grid grid-cols-1 gap-4 '>
							<li>
								<input type='checkbox' className='mr-2' value='American Sign Language' />
								American Sign Language
							</li>
							<li>
								<input type='checkbox' className='mr-2' value='Listening & Spoken English' />
								Listening & Spoken English
							</li>
							<li>
								<input type='checkbox' className='mr-2' value='Finger Spelling' />
								Finger Spelling
							</li>
							<li>
								<input type='checkbox' className='mr-2' value='Cued Speech' />
								Cued Speech
							</li>
							<li>
								<input type='checkbox' className='mr-2' value='Combination of two or more' />
								Combination of two or more:
							</li>
							<li>
								<input type='checkbox' className='mr-2' value='other' />
								Other
							</li>
						</ul>
						<textarea
							placeholder="Please specify if you've selected 'other'"
							onChange={(e) => {
								setFormData({ ...formData, otherData: e.target.value });
							}}
							className={
								formData.other
									? "mt-2 w-full rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange scale-100 transition-all ease-in-out duration-300"
									: "w-full h-0 rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange scale-0 transition-all ease-in-out duration-300"
							}
						/>{" "}
					</div>

					<div>
						<p>Please summarize any concerns or information that would be helpful to a D/HH Committee Member:</p>
						<textarea
							onChange={(e) => {
								setFormData({ ...formData, questions: e.target.value });
							}}
							className={
								"w-full rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange"
							}
						/>
					</div>
					<div className='flex flex-row justify-around w-11/12 mx-auto mb-4'>
						<input onChange={handleAuthorizeOnChange} type='checkbox' className='mx-2 my-auto' />
						<p>
							I authorize Alabama Hands & Voices to disclose to our Parent Guide(s) my name, contact information, name and age of my child so that a
							Parent Guide(s) may reach out to me regarding Alabama Hands & Voices activities and resources and parent-to-parent support.
						</p>
					</div>
					<button
						onClick={handleSubmit}
						className='bg-hvorange text-white h-fit w-fit px-4 py-2 rounded-lg hover:shadow-2xl hover:ring-1 hover:ring-hvorange-500 hover:shadow-hvorange hover:bg-hvblue ease-in-out duration-300'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default DHH;
