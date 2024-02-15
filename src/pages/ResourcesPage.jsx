import ehdiLogoSquare from "../assets/images/resources-page/ehdiLogoSquare.png";
import resourcesHeader from "../assets/images/resources-page/resourcesHeader.jpg";
const ResourcesPage = () => {
	return (
		<div>
			<div className='w-full h-full bg-white'>
				<div className='w-full h-72 flex flex-row justify-center items-center'>
					<img className='absolute w-full h-72 object-cover object-center brightness-125' src={resourcesHeader} />
					{/* <div
					className="w-fit h-fit px-12 py-2 bg-slate-600 z-10 rounded-3xl bg-opacity-80"
					> */}
					<h1 className='text-8xl text-black font-kaushan z-10'>Resources</h1>
					{/* </div> */}
				</div>
				<div className='flex flex-row justify-center items-center w-full h-full bg-white mt-4 space-x-10'>
					<div className='w-2/6 h-fit '>
						<h3 className='bg-hvorange-300'>Alabama Hands & Voices Resources </h3>
						<h3 className='bg-hvorange-300'>Confirmed Hearing Loss</h3>
						<h3>Get connected now with Guide by Your Side and Educational Advocacy</h3>
						<h3 className='bg-hvorange-300 text-center'>Children Ages 0-3</h3>
						<div>
							<div className='flex grid grid-cols-2 gap-4  p-4 text-2xl'>
								<h3 href='http://alabamaparentcenter.com/web/' className='hover:underline hover:cursor-pointer py-4'>
									Alabama Parent Education Center
								</h3>
								<h3 href='https://www.alabamaachieves.org/special-education/' className='hover:underline hover:cursor-pointer py-4'>
									Alabama Department of Special Education Services
								</h3>
								<h3 href='https://www.rehab.alabama.gov/services/vr/vr' className='hover:underline hover:cursor-pointer py-4'>
									Alabama Vocational Rehabilitation Services
								</h3>
								<h3 href='https://deafedguidelines.org/' className='hover:underline hover:cursor-pointer py-4'>
									Deaf Education Guidelines
								</h3>
								<h3
									href='https://alhandsandvoices.org/assets/08_ALHV%20V15%20Communication%20Plan%20-%20fillable%20form.docx'
									className='hover:underline hover:cursor-pointer py-4'
								>
									Alabama Hands & Voices Communication Plan
								</h3>
								<h3
									href='https://alhandsandvoices.org/assets/11_List%20of%20Resources%20and%20Providers%20Age%203+.pdf'
									className='hover:underline hover:cursor-pointer py-4'
								>
									List of Resources and Providers
								</h3>
							</div>
							<h3></h3>
						</div>
					</div>
					<div className='w-96 bg-blue-400  '>
					
						<img className='h-auto w-72 mx-auto border-2 border-hvorange  mt-4' src={ehdiLogoSquare} />
						<div
						className="w-fit mx-auto text-white "
						>
							<p>
								The EHDI-PALS directory has information about hearing (audiology) services for children from birth to age five. All of the facilities
								in this directory report that they have the equipment and expertise to serve children and have licensed audiologists. The directory
								contains clinic information, including:
							</p>
							<ul>
								<li>audiology (hearing) services</li>
								<li>languages available</li>
								<li>payment options</li>
								<li>appointment availability</li>
							</ul>
							<p>To learn more about childhood hearing loss and to find a pediatric audiologist, visit:</p>
							<button>ehdi-pals.org</button>
						</div>

						<div>
							<h3>Alabama Options for Services for Deaf/Hard of Hearing Children</h3>
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
