import { useState, useEffect } from "react";

const GBYSPersonalForm = () => {
	
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		successMessage: "",
		personalForm: true,
		referralForm: false,
	});

	const [formData, setFormData] = useState({
		parentName: "",
		secondaryParentName: "",
		phone: "",
		childName: "",
		email: "",
		childBirth: "",
		address: "",
		city: "",
		zip: "",
		county: "",
		language: "",
		typeOfHearingLoss: "",
		degreeOfHearingLossLeft: "",
		degreeOfHearingLossRight: "",
		hearingDevice: "",
		communicationMode: "",
		other: false,
		otherData: "",
		questions: "",
	});

	const initialFormData = {
		parentName: "",
		secondaryParentName: "",
		phone: "",
		childName: "",
		email: "",
		childBirth: "",
		address: "",
		city: "",
		zip: "",
		county: "",
		language: "",
		typeOfHearingLoss: "",
		degreeOfHearingLossLeft: "",
		degreeOfHearingLossRight: "",
		hearingDevice: "",
		communicationMode: [],
		other: false,
		otherData: "",
		questions: "",
	};

	useEffect(() => {
		setFormData(initialFormData);
	}, []);

	const handleCommunicationSelection = (e) => {
		const value = e.target.value;

		if (e.target.value === "other") {
			setFormData({ ...formData, other: !formData.other });
		}else if (formData.communicationMode.includes(value)) {
			setFormData({ ...formData, communicationMode: formData.communicationMode.filter((item) => item !== value) });
		} else {
			setFormData({ ...formData, communicationMode: [...formData.communicationMode, value] });
		}
	};

	console.log(formData, "formData");
	return (
		<div className='w-full'>
			<div className='w-3/4 h-fit text-white mx-auto py-4'>
				<section>
					<form className='w-3/4 mx-auto bg-hvblue p-8 space-y-8 rounded-xl shadow-2xl'>
						<div className='flex flex-row justify-around w-full mx-auto mb-4'>
							<div className='flex flex-col w-full px-4 group'>
								<label className='group-focus:text-hvorange'>Parent/Guardian Name:</label>
								<input
									onChange={(e) => {
										setFormData({ ...formData, parentName: e.target.value });
									}}
									type='text'
									className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								/>
							</div>

							<div className='flex flex-col w-full px-4'>
								<label htmlFor='inputName'>Secondary Parent/Guardian Name:</label>
								<input
									onChange={(e) => {
										setFormData({ ...formData, secondaryParentName: e.target.value });
									}}
									type='text'
									className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								/>
							</div>
						</div>
						<div className='flex flex-row justify-around w-full mx-auto mb-4'>
							<div className='flex flex-col w-full px-4'>
								<label htmlFor='inputTel'>Phone Number:</label>
								<input
									onChange={(e) => {
										setFormData({ ...formData, phone: e.target.value });
									}}
									type='tel'
									className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								/>
							</div>
							<div className='flex flex-col w-full px-4'>
								<label htmlFor='childName'>Child's Name:</label>
								<input
									onChange={(e) => {
										setFormData({ ...formData, childName: e.target.value });
									}}
									name='childName'
									className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								/>
							</div>
						</div>

						<div className='flex flex-row justify-around w-full mx-auto mb-4'>
							<div className='flex flex-col w-full px-4'>
								<label htmlFor='inputEmail'>Email:</label>
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
							<div className='flex flex-col w-full px-4'>
								<label htmlFor='childName'>Child Birthday</label>
								<input
									onChange={(e) => {
										setFormData({ ...formData, childBirth: e.target.value });
									}}
									type='date'
									className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								/>
							</div>
						</div>

						<div className='flex flex-row w-full px-4 indent-2 '>
							<div className='flex flex-col w-full pr-2'>
								<label>Home Address:</label>
								<input
									onChange={(e) => {
										setFormData({ ...formData, address: e.target.value });
									}}
									type='text'
									className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
									placeholder='1234 Main St'
								/>
							</div>
							<div className='flex flex-col w-full px-2'>
								<label>City:</label>
								<input
									onChange={(e) => {
										setFormData({ ...formData, city: e.target.value });
									}}
									type='text'
									className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								/>
							</div>
							<div className='flex flex-col w-full pl-2 '>
								<label htmlFor='inputZip'>Zip:</label>
								<input
									onChange={(e) => {
										setFormData({ ...formData, zip: e.target.value });
									}}
									type='text'
									className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
									id='inputZip'
								/>
							</div>
						</div>
						<div className='flex flex-row justify-around w-full mx-auto mb-4'>
							<div className='flex flex-col w-full pr-2'>
								<label>County</label>
								<input
									onChange={(e) => {
										setFormData({ ...formData, county: e.target.value });
									}}
									type='text'
									className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
									id='county'
									placeholder='County'
								/>
							</div>
							<div className='flex flex-col w-full pr-2'>
								<label>Language Spoken in the Home:</label>
								<input
									onChange={(e) => {
										setFormData({ ...formData, language: e.target.value });
									}}
									type='text'
									className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
									id='county'
									placeholder='Language'
								/>
							</div>
						</div>
						<div className='flex flex-row justify-around w-full mx-auto mb-4'>
							<div className='flex flex-col w-full pr-2'>
								<label>Type Of Hearing Loss</label>
								<select
									onChange={(e) => {
										setFormData({ ...formData, typeOfHearingLoss: e.target.value });
									}}
									type='text'
									className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
									id='county'
									placeholder='County'
								>
									<option>Select One</option>
									<option value='Conductive (Middle Ear)'>Conductive (Middle Ear)</option>
									<option value='Sensorineureal (Inner ear)'>Sensorineureal (Inner ear)</option>
									<option value='Mixed (Conductive & Sensorineureal)'>Mixed (Conductive & Sensorineureal) </option>
								</select>
							</div>
							<div className='flex flex-col w-full pr-2'>
								<label htmlFor='inputSchoolDist'>Degree of Hearing Loss (left ear):</label>
								<select
									onChange={(e) => {
										setFormData({ ...formData, degreeOfHearingLossLeft: e.target.value });
									}}
									className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
									placeholder='County'
								>
									<option>Select One</option>
									<option value='Unsure'>Unsure</option>
									<option value='Normal'>Normal</option>
									<option value='Mild'>Mild</option>
									<option value='Moderate'>Moderate</option>
									<option value='Severe'>Severe</option>
									<option value='Profound'>Profound</option>
								</select>
							</div>
						</div>
						<div className='flex flex-row justify-around w-full mx-auto mb-4'>
							<div className='flex flex-col w-full pr-2'>
								<label htmlFor='inputSchoolDist'>Type Of Hearing Loss</label>
								<select
									onChange={(e) => {
										setFormData({ ...formData, typeOfHearingLoss: e.target.value });
									}}
									type='text'
									className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								>
									{" "}
									<option>Select One</option>
									<option value='Conductive (Middle Ear)'>Unsure</option>
									<option value='Sensorineureal (Inner ear)'>Normal</option>
									<option value='Mixed (Conductive & Sensorineureal)'>Mild</option>
									<option value='Mixed (Conductive & Sensorineureal)'>Moderate</option>
									<option value='Mixed (Conductive & Sensorineureal)'>Severe</option>
									<option value='Mixed (Conductive & Sensorineureal)'>Profound</option>
								</select>
							</div>
							<div className='flex flex-col w-full pr-2'>
								<label htmlFor='inputSchoolDist'>Hearing Device if used:</label>
								<select className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '>
									<option>Select One</option>
									<option>Unsure</option>
									<option>Hearing Aid(s)</option>
									<option>Cochlear Implant(s)</option>
									<option>Bone Anchored Hearing Aid(s) (BAHA)</option>
								</select>
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
							<p>Please provide initial parent questions/support requested, special needs or important information:</p>
							<textarea
								onChange={(e) => {
									setFormData({ ...formData, questions: e.target.value });
								}}
								className={
									"w-full rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange"
								}
							/>
						</div>
						<button
							type='submit'
							className='bg-hvorange text-white h-fit w-fit px-4 py-2 rounded-lg hover:shadow-2xl hover:shadow-hvorange hover:bg-hvblue ease-in-out duration-300'
						>
							Submit
						</button>
					</form>
				</section>{" "}
			</div>
		</div>
	);
};

export default GBYSPersonalForm;
