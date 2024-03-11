import { Navigate, useNavigate } from "react-router-dom";
import HVMembershipForm from "../../../assets/documents/HV-Membership-Form.pdf";
import aboutUsBanner from "../../../assets/images/about-us/who-we-are/aboutUsBanner.jpg";
import aboutUsWhoWeAre1 from "../../../assets/images/about-us/who-we-are/aboutUsWhoWeAre1.jpg";
import aboutUsWhoWeAreFamily from "../../../assets/images/about-us/who-we-are/aboutUsWhoWeAreFamily.jpg";
import aboutUsWhoWeAreTrail from "../../../assets/images/about-us/who-we-are/aboutUsWhoWeAreTrail.jpeg";
const WhoWeAre = () => {
	const Navigate = useNavigate();

	const handleFormDownload = () => {
		window.open(HVMembershipForm);
	};

	return (
		<div>
			<div className='w-full bg-cover bg-center flex flex-col justify-center items-center '>
				<div className='w-full h-fit bg-black bg-opacity-30 py-4 text-white text-center absolute left-50 z-10'>
					<h1 className=' sm:text-5xl lg:text-7xl font-kaushan '>About Us</h1>
					<h1 className='sm:text-5xl lg:text-3xl  '>
						Our goal is work together to benefit children who are deaf or hard of hearing and their families
					</h1>
				</div>

				<img src={aboutUsBanner} className='h-64 w-full bg-fixed object-cover opacity-80' />
			</div>

			<div className='bg-hvblue block py-8'>
				<div className='flex flex-row mx-auto w-3/4 justify-center border-b-8 border-hvorange py-4'>
					<div className='w-96 px-12 py-12'>
						<h2 className='text-2xl font-extrabold tracking-tight text-hvorange text-left w-3/4'>WHO WE ARE</h2>
						<p className='text-lg  text-white'>
							We are parents of kids who are deaf or hard of hearing (to whatever degree). We are parents of ASL and other visual language signers,
							kids who use listening and spoken language, cued speech users, total communicators, kids with hearing aids and/or cochlear implants, and
							kids who do not use technology to hear. We are people who have common interests connected through the community of deafness.
							<p className=' text-white text-lg mt-4'>
								Hands & Voices is a safe place to explore options, get unemotional support, learn from one another and share what we have in common.
								We value diversity and honor the role of parents and family as the single greatest factor in raising a well-adjusted, successful kid.
							</p>
						</p>
					</div>
					<img src={aboutUsWhoWeAre1} className='w-1/2 object-cover h-auto rounded-2xl' />
				</div>
				<div className='w-full  mt-10'>
					<div className='w-1/2 mx-auto'>
						<p className=' text-white text-lg '>
							There is room in the community of deafness for an organization like Hands & Voices, and in fact, I think parents, and many
							professionals, have been crying out for a group like this” says Leeanne Seaver, of Hands & Voices. "Somehow parents connecting to other
							parents provides an element of credibility; there's a level of 'knowing & feeling' that only a parent experiences. And parents,
							especially parents of babies newly identified with deafness or hearing loss, need a way to connect like this without being wary of a
							sponsoring agenda from a service provider."
							<p className='text-white text-lg mt-4'>
								Hands & Voices is a non-profit, parent-driven national organization dedicated to supporting families of children who are deaf or hard
								of hearing. We are non-biased about communication methodologies and believe that families can make the best choices for their child if
								they have access to good information and support. Our membership includes families who communicate manually and/or orally. From
								American Sign Language to cochlear implants and spoken language, our organization represents people from all different approaches to,
								and experiences with, deafness or hearing loss. We are one of over 40 Hands & Voices chapters comprised mainly of parents along with
								professionals.
							</p>
						</p>
						<div className='w-full py-10 flex justify-center items-center'>
							<button
								class='rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-indigo-700 shadow-md hover:bg-hvorange hover:text-white hover:shadow-white hover:shadow-lg ease-in-out duration-300 transition-all  sm:inline-block sm:w-auto'
								onClick={() => {
									Navigate("/about/contact-us");
								}}
							>
								CONTACT US
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full text-black'>
				<div className=' w-full mx-auto bg-gray-100'>
					<div className='py-10 px-10 space-y-2 w-3/5 text-left mx-auto'>
						<h1 className='text-3xl font-bold text-hvorange'>WHY WE ARE HERE</h1>
						<p>
							Many organizations for the deaf or hard of hearing rally around a philosophy of communication. Hands & Voices does not promote specific
							communication choices or methodologies, but we have information about them and can direct families or professionals to support
							organizations for specific information. Our rallying points are areas of interest that are common to all people, but especially parents,
							connected by the interests of the deaf or hard of hearing, and include these values ….
						</p>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center w-full h-full mt-4 space-x-10'>
					<div className='flex flex-row justify-center items-start overflow-y-hidden h-96 w-3/4'>
						<img src={aboutUsWhoWeAreFamily} className='w-1/2 px-24 object-cover' />
						<ul className='list-disc w-1/6 space-y-4'>
							<li>We all want the best for our children who are deaf or hard of hearing.</li>
							<li>
								We deserve respect and honor for our role as parents/families. We require a beneficial, successful educational experience for our
								kids.
							</li>
							<li>We need information from a wide variety of sources.</li>
							<li>We want to know about opportunities and resources.</li>
						</ul>
					</div>
					<div className='flex flex-col justify-center items-center w-3/4 h-full mt-4 space-x-10'>
						<div className='flex flex-row justify-center items-start overflow-y-hidden h-96 '>
							<ul className='list-disc w-1/6 space-y-4'>
								<li>We need training and support to become effective advocates for our kids. </li>
								<li>We are stronger united by our common interests than divided by differing communication choices.</li>
								<li>We must lend our organized support to all kinds of efforts that promote our common interests - strength in numbers!</li>
							</ul>
							<img src={aboutUsWhoWeAreTrail} className='w-1/2 px-24 object-cover' />
						</div>
					</div>
				</div>
				<div className='bg-gray-100 text-center'>
					<h1 className='font-kaushan text-5xl text-hvorange-500 py-10'>JOIN HANDS & VOICES</h1>
					<p className='w-1/2 mx-auto text-lg text-black-500 px-10 pb-10'>
						Whether you're signing up for the first time or renewing your membership to Alabama Hands & Voices, please take time now to download the
						membership form or visit our online membership page. Your contribution helps us to continue developing and disseminating resources
						designed to give families unbiased information for their children who are deaf or hard-of-hearing. We are grateful for your support. Thank
						you!
					</p>
					<p className='w-1/2 mx-auto text-lg text-black-500 px-10 pb-10'>
						Scholarships are available for parents upon request{" "}
						<a href={HVMembershipForm} onClick={handleFormDownload} className='text-hvorange-500 font-bold underline hover:cursor-pointer ' download>
							Download
						</a>{" "}
						our Membership Form or visit our{" "}
						<span
							onClick={() => {
								Navigate("/membership");
							}}
							className='text-hvorange-500 font-bold underline hover:cursor-pointer'
						>
							Membership Sign-up Page
						</span>{" "}
						to pay online.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
