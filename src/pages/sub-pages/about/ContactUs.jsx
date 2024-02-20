import contactUs from "../../../assets/images/contact-us/contactUs.jpg";

const ContactUs = () => {
	return (
		<div
		className="w-full h-full bg-hvorange bg-opacity-50"
		>
			<div className='flex flex-row w-4/6 mx-auto bg-hvblue pt-8 pb-24'>
				<div className='mx-auto bg-hvblue h-fit p-8 mt-8'>
					<img src={contactUs} className='w-96 shadow-2xl rounded-xl' />
				</div>
				<div className='w-2/6 mr-auto space-y-8 mb-8 bg-hvblue text-white px-4'>
					<h1 className='text-3xl font-bold text-hvorange mt-10 mb-5'>Contact us</h1>
					<p>
						Thank you for visiting our website where it is our mission to support families with children who are deaf or hard of hearing without bias
						towards communication mode. We believe what works for your child is what makes the choice right. If you have questions or comments for our
						team, please <a className='text-hvorange font-bold hover:underline hover:cursor-pointer ease-in-out duration-200'>Email</a> or call{" "}
						<span className='text-hvorange font-bold'>205-677-3136</span>.
					</p>{" "}
					<p>Visit our Guide By Your Side page for more information or to refer a family or yourself.</p>
					<p>
						If you have any questions or suggestions regarding the website, please feel free to email us. We are dedicated to making this site work
						for you. We look forward to connecting with you.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
