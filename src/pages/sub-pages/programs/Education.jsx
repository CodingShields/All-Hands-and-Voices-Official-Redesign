import { useState, useEffect } from "react";
import FormModal from "../../../components/FormModal";

import AstraFormsArray from "../../../data/arrays/astraForms";

import AstraForm from "../../../components/AstraForm";
import AstraLogo from "../../../assets/images/programs/education-page/AstraLogo.png";
import retreat from "../../../assets/images/programs/education-page/retreat.jpeg";

const Education = () => {
	const [forms, setForms] = useState({ AstraFormsArray });

	return (
		<div className='bg-gray-100 flex flex-col '>
			<FormModal show={false} formsArray={forms} />
			<div className='border-2 border-gray-100 w-fit h-fit  mx-auto  p-8 mb-4 rounded-2xl bg-white shadow-2xl mt-12'>
				<h1 className='font-kaushan text-4xl text-center text-hvorange-500 p-4 transition-all ease-in-out duration-300'>All About Astra!</h1>
				<img src={AstraLogo} className='w-64 mx-auto' />
			</div>
			<div className='bg-hvorange-500 w-full h-fit py-12 flex flex-col'>
				<p className='text-white text-2xl p-4 w-3/5 mx-auto text-left'>
					ASTra is an educational advocacy program that embodies the mission and vision of Hands & Voices. ASTra stands for the Advocacy Support and
					Training Program. We provide support to families with children who are deaf or hard of hearing (d/hh) without bias around communication
					mode, method, or educational setting so that every child has the opportunity to achieve their full potential. We foster collaboration and
					build partnerships with school districts and other professionals who serve deaf or hard of hearing students.
				</p>

				<div className='flex flex-row px-8 py-10'>
					<div className='w-full'>
						<img src={retreat} className='object-cover max-h-[300px] w-full' />
					</div>
					<div className='w-full text-left whitespace-nowrap'>
						<h2 className='text-white text-2xl p-4 w-3/5 mx-auto '>Do you have questions like this?</h2>
						<ul className='list-disc list-inside text-white text-lg p-4 w-3/5 mx-auto text-left'>
							<li>What laws support my child's education?</li>
							<li>I don't understand what my child might be eligible for.</li>
							<li>What is a Communication Plan? Safety Plan? Health Plans?</li>
							<li>I need to learn the difference between an IEP and a 504 Plan.</li>
							<li>What rights do I have as a parent?</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='w-full bg-hvblue-500 text-white text-xl p-4 w-3/5 mx-auto text-center space-y-4 py-12'>
				<h2>Help is Here! Ask for an ASTra advocate by completing an advocacy request form below.</h2>
				<h2>
					Join the wait list for Level 1 Educational Advocacy training class by registering{" "}
					<a
						className='text-hvorange-500 font-bold hover:cursor-pointer hover:underline transition-all ease-in-out duration-300'
						href='https://forms.office.com/pages/responsepage.aspx?id=Vee-Hrq-bEq6FkvjOCnbCsiY9Lj7TOtNnzzFvxmU9EZUMTBLWTBGTkE1SkZWVU1UTTdMMzgyRDNYWi4u'
						target='_blank'
					>
						Here.
					</a>
				</h2>
			</div>
			<div className='w-full bg-hvorange-500 text-white text-xl p-4 w-3/5 mx-auto text-center space-y-4 py-12'>
				<h1 className='text-2xl font-bold text-center  p-4 '>Take a look at our favorite resources available on Hands & Voices HQ</h1>
				<a
					className='text-hvblue-500 underline font-bold hover:cursor-pointer hover:underline transition-all ease-in-out duration-300'
					href='https://www.handsandvoices.org/astra/index.html'
					target='_blank'
				>
					Website
				</a>
				<div>
					<ul className='list-disc list-inside marker:text-white text-hvblue-500 text-lg p-4 w-3/5 mx-auto text-left'>
						<li className='text-hvblue-500'>
							<a href='https://handsandvoices.org/IEPmeetingplanner/' target='_blank'>
								IEP Meeting Planner
							</a>
						</li>
						<li
							className='text-hvblue-500'
							// onClick={handleModalOpen} https://handsandvoices.org/pdf/IEP_Checklist.pdf
						>
							IEP/504 Checklist
						</li>
						<li className='text-hvblue-500'>Communication Plan</li>
						<li className='text-hvblue-500'>
							<a href='https://handsandvoices.org/articles/education/popup/pop_index.html' target='_blank'>
								Pop-Up IEP
							</a>
						</li>
						<li>D/HH Student Self-Advocacy Inventory</li>
						<li>Functional Listening Evaluation</li>
					</ul>
				</div>
			</div>
			<AstraForm />
		</div>
	);
};

export default Education;
