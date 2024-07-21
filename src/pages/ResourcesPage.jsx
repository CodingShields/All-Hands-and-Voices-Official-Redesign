import { useNavigate } from "react-router-dom";

import ehdiLogoSquare from "../assets/images/resources-page/ehdiLogoSquare.png";
import resourcesHeader from "../assets/images/resources-page/resourcesHeader.jpg";
const ResourcesPage = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className='w-full h-full bg-gray-100 animate-fadeIn'>
				<div className='w-full h-72 flex flex-row justify-center items-center '>
					<img className='absolute w-full h-72 object-cover object-center brightness-125' src={resourcesHeader} />
					{/* <div
					className="w-fit h-fit px-12 py-2 bg-slate-600 z-10 rounded-3xl bg-opacity-80"
					> */}
					<h1 className='text-8xl text-black font-kaushan z-10'>Resources</h1>
					{/* </div> */}
				</div>
				<div className='flex flex-row justify-center py-16'>
					<div className='w-1/2 h-full bg-hvorange-500 text-white mx-auto space-y-4 rounded-2xl shadow-2xl py-4'>
						<h1 className='text-center text-2xl border-b-2 border-hvorange-200 py-2'>Alabama Hands & Voices Resources </h1>
						<h2 className='bg-hvorange-300 text-xl text-center py-2'>Confirmed Hearing Loss</h2>
						<div className='w-full h-fit bg-hvblue-500 py-4 text-center'>
							<h3 className='px-2 text-md'>
								Get connected now with Guide by Your Side and{" "}
								<span
									onClick={() => {
										navigate("/programs/education");
									}}
									className='text-hvorange-500 hover:underline hover:cursor-pointer font-bold'
								>
									Educational Advocacy
								</span>
							</h3>
						</div>
						<h2 className='bg-hvorange-300 text-xl text-center py-2'>Children Ages 0-3</h2>
						<div>
							<div className='flex grid grid-cols-2 gap-4 text-lg text-center'>
								<h3
									href='http://alabamaparentcenter.com/web/'
									className='hover:underline hover:cursor-pointer py-4 hover:text-hvblue-500  transition-all ease-in-out duration-200'
								>
									Testing Baby’s Hearing
								</h3>
								<h3
									href='https://www.alabamaachieves.org/special-education/'
									className='hover:underline hover:cursor-pointer py-4 hover:text-hvblue-500   transition-all ease-in-out duration-200'
								>
									Alabama Newborn Screening Program
								</h3>
								<h3
									href='https://www.rehab.alabama.gov/services/vr/vr'
									className='hover:underline hover:cursor-pointer py-4 hover:text-hvblue-500   transition-all ease-in-out duration-200'
								>
									Parent’s Guide to D/HH Early Intervention (English)
								</h3>
								<h3
									href='https://deafedguidelines.org/'
									className='hover:underline hover:cursor-pointer py-4 hover:text-hvblue-500   transition-all ease-in-out duration-200'
								>
									Parent’s Guide to D/HH Early Intervention (Spanish)
								</h3>
								<h3
									href='https://alhandsandvoices.org/assets/08_ALHV%20V15%20Communication%20Plan%20-%20fillable%20form.docx'
									className='hover:underline hover:cursor-pointer py-4 hover:text-hvblue-500   transition-all ease-in-out duration-200'
								>
									Alabama Early Intervention’s System
								</h3>
								<h3
									href='https://alhandsandvoices.org/assets/11_List%20of%20Resources%20and%20Providers%20Age%203+.pdf'
									className='hover:underline hover:cursor-pointer py-4 hover:text-hvblue-500   transition-all ease-in-out duration-200'
								>
									Alabama Hearing Loss Options
								</h3>
							</div>
							<h3
								href='https://alhandsandvoices.org/assets/11_List%20of%20Resources%20and%20Providers%20Age%203+.pdf'
								className='hover:cursor-pointer py-4 text-center text-lg bg-hvblue-500 hover:underline transition-all ease-in-out duration-200  '
							>
								List of Resources and Providers
							</h3>
						</div>
						<h2 className='bg-hvorange-300 text-xl text-center py-2'>Children Ages 0-3</h2>
						<div className='w-full h-fit  text-center'>
							<div className='flex grid grid-cols-2 gap-4 px-4 text-lg text-center'>
								<a
									href='http://alabamaparentcenter.com/web/'
									target='_blank'
									className='hover:underline hover:cursor-pointer py-4 hover:text-hvblue-500   transition-all ease-in-out duration-200'
								>
									Alabama Parent Education Center
								</a>
								<a
									href='https://www.alabamaachieves.org/special-education/'
									target='_blank'
									className='hover:underline hover:cursor-pointer py-4 hover:text-hvblue-500   transition-all ease-in-out duration-200'
								>
									Alabama Department of Special Education Services
								</a>
								<a
									href='https://www.rehab.alabama.gov/services/vr/vr'
									target='_blank'
									className='hover:underline hover:cursor-pointer py-4 hover:text-hvblue-500   transition-all ease-in-out duration-200'
								>
									Alabama Vocational Rehabilitation Services
								</a>
								<a
									href='https://deafedguidelines.org/'
									target='_blank'
									className='hover:underline hover:cursor-pointer py-4 hover:text-hvblue-500   transition-all ease-in-out duration-200'
								>
									Deaf Education Guidelines
								</a>
								<a
									href='https://alhandsandvoices.org/assets/08_ALHV%20V15%20Communication%20Plan%20-%20fillable%20form.docx'
									target='_blank'
									className='hover:underline hover:cursor-pointer py-4 hover:text-hvblue-500   transition-all ease-in-out duration-200'
								>
									Alabama Hands & Voices Communication Plan
								</a>
							</div>
							<div className='w-full bg-hvblue-500 py-4'>
								<a
									target='_blank'
									href='https://alhandsandvoices.org/assets/11_List%20of%20Resources%20and%20Providers%20Age%203+.pdf'
									className=' hover:cursor-pointer text-center text-lg hover:underline transition-all ease-in-out duration-200  '
								>
									List of Resources and Providers
								</a>
							</div>
						</div>
					</div>
					<div className='w-96 h-fit bg-blue-400  mx-auto rounded-2xl shadow-2xl '>
						<img className='h-auto w-72 mx-auto border-2 border-hvorange  mt-4' src={ehdiLogoSquare} />
						<div className='w-9/12 mx-auto text-white py-4'>
							<p>
								The EHDI-PALS directory has information about hearing (audiology) services for children from birth to age five. All of the facilities
								in this directory report that they have the equipment and expertise to serve children and have licensed audiologists. The directory
								contains clinic information, including:
							</p>
							<ol className='list-disc list-inside text-white ml-4 py-4'>
								<li>audiology (hearing) services</li>
								<li>languages available</li>
								<li>payment options</li>
								<li>appointment availability</li>
							</ol>
						</div>
						<div className='flex flex-col w-full text-center space-y-4 justify-center items-center py-4'>
							<p className='text-white'>To learn more about childhood hearing loss and to find a pediatric audiologist, visit:</p>

							<a
								href='https://www.ehdi-pals.org/default.aspx#gsc.tab=0'
								target='_blank'
								className='w-fit px-8 py-2 bg-hvorange-500 text-white rounded-lg hover:bg-hvblue-300 transition-all ease-in-out duration-200 active:duration-75 active:translate-y-1 shadow-2xl'
							>
								ehdi-pals.org
							</a>
							<h3 className='text-white '>For Alabama Options for Services for Deaf/Hard of Hearing Children, please visit:</h3>
							<a
								href='https://www.ehdi-pals.org/default.aspx#gsc.tab=0'
								target='_blank'
								className='w-fit px-8 py-2 bg-hvorange-500 text-white rounded-lg hover:bg-hvblue-300 transition-all ease-in-out duration-200 active:duration-75 active:translate-y-1 shadow-2xl'
							>
								ehdi-pals.org
							</a>
						</div>
					</div>
				</div>
				<div>
					{/* YT video link */}
					<source />
					<div>
						<source />
						<source />
						<source />
						<source />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResourcesPage;
