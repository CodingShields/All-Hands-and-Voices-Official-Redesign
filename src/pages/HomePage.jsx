import { useState, useEffect } from "react";
import {collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import hvLogoPng2x from "../assets/images/home-page-images/hv_logo-png_2x.png";
import signKid from "../assets/images/home-page-images/sign-kid.jpg";
import lawson from "../assets/images/home-page-images/lawson.jpg";
import family from "../assets/images/home-page-images/family.jpg";
import LoadingModal from "../components/LoadingModal";
const HomePage = () => {
	const [state, setState] = useState({
		loading: true,
		error: null,
		errorMessage: "",
	});
	const [data, setData] = useState([]);

	useEffect(() => {
		setState({
			loading: true,
			error: false,
		});
		const fetchData = async () => {
			await getDocs(collection(db, "update-pages")).then((snapshot) => {
				const pageData = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setData(pageData[0].currentEvent, "test");
				setState({ loading: false, error: false, errorMessage: "" });
			});
		};

		fetchData();
	}, []);

	return (
		<div>
			<LoadingModal open={state.loading} />
			<div className='overflow-hidden bg-white animate-fadeIn'>
				<div className='relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8'>
					<div className='absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block'></div>
					<div className='mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8'>
						<div>
							<h2 className='text-base font-semibold uppercase tracking-wide text-hvorange'></h2>
							<h3 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>First, take a deep breath</h3>
						</div>
					</div>
					<div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
						<div className='relative lg:col-start-2 lg:row-start-1'>
							<svg
								className='absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block'
								width='404'
								height='384'
								fill='none'
								viewBox='0 0 404 384'
								aria-hidden='true'
							>
								<defs>
									<pattern id='de316486-4a29-4312-bdfc-fbce2132a2c1' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
										<rect x='0' y='0' width='4' height='4' className='text-hvblue' fill='currentColor' />
									</pattern>
								</defs>
								<rect width='404' height='384' fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)' />
							</svg>
							<div className='relative mx-auto max-w-prose text-base lg:max-w-none'>
								<figure>
									<div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
										<img
											className='rounded-lg object-cover object-center shadow-slate-600 shadow-2xl'
											src={family}
											alt='Family holding hands with child'
											width='1184'
											height='1376'
										/>
									</div>
								</figure>
							</div>
						</div>
						<div className='mt-8 lg:mt-0'>
							<div className='mx-auto max-w-prose text-base lg:max-w-none'>
								<p className='prose prose-indigo text-gray-500'>
									Whether your child was just identified with a hearing loss, or you are just going through the testing, or you are a seasoned parent
									just looking for support & information to help your child thrive, welcome!
								</p>
							</div>
							<div className='prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none'>
								<p className='prose prose-indigo text-gray-500'>
									This is a place where we focus on what we can do as parents to help our kids succeed. We want that child of yours to change the
									world, our world. Alabama Hands & Voices is a nonprofit made up of parents just like you. We collaborate with deaf and hard of
									hearing adults and like-minded professionals who share our belief that "what works for your child is what makes the choice right".
								</p>

								<p>
									We hope to build this chapter into a place where you will find practical and sometimes inspiring information to guide you in
									parenting your own child. If you are going through the hearing screening process, you might want to start with the
									{/* <span className='font-bold text-hvorange'> */}
									Parent Road Map
									{/* </span>  */}
									and especially the
									{/* <a
										className='font-bold text-hvorange hover:text-hvorange-700'
										href='https://www.youtube.com/watch?v=8NM6u8VOfrk'
										target='_blank'
										rel='noopener'
									> */}{" "}
									Loss &amp; Found video
									{/* </a> */}.
								</p>
								<p className='prose prose-indigo text-gray-500'>
									More questions? Visit the Virtual Waiting Room at our parent organization, Hands & Voices. It's always open!
								</p>
								<p>
									You can find us through this page, through phone calls and emails, and our {""}
									<a
										className='font-bold text-hvorange hover:text-hvorange-700'
										href='https://www.facebook.com/alabamahandsandvoices/'
										target='_blank'
										rel='noopener'
									>
										Facebook Page
									</a>
									{" "} or our{" "}
									<a
										href='https://www.facebook.com/groups/Alabamahandsandvoices/'
										target='_blank'
										rel='noreferrer'
										className='text-hvorange underline font-bold'
									>
										Facebook Group Page
									</a>
									.
								</p>
								<p>
									You can do this and there's a whole community here to help!
									<br />
									Standing with you,
									<br />
								</p>
								<p className="text-hvorange font-semibold italic indent-4">Your fellow parents at Alabama Hands & Voices</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='overflow-hidden bg-hvblue py-16 text-white lg:py-24'>
				<div className='relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
					<svg
						className='absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block'
						width='404'
						height='784'
						fill='none'
						viewBox='0 0 404 784'
						aria-hidden='true'
					>
						<defs>
							<pattern id='b1e6e422-73f8-40a6-b5d9-c8586e37e0e7' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
								<rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
							</pattern>
						</defs>
						<rect width='404' height='784' fill='url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)' />
					</svg>
					<div className='relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
						<div className='relative'>
							<h3 className='text-2xl font-extrabold tracking-tight text-hvorange sm:text-3xl'>OUR MISSION</h3>
							<p className='mt-4 text-lg'>
								Hands & Voices is dedicated to supporting families with children who are deaf or hard of hearing without a bias around communication
								modes or methodology.
							</p>
							<p className='mt-4 text-lg'>
								We are a parent-driven, non-profit organization providing families with the resources, networks, and information they need to improve
								communication access and educational outcomes for their children.
							</p>
							<p className='mt-4 text-lg'>
								Our outreach activities, parent/professional collaboration, and advocacy efforts are focused on enabling deaf or hard of hearing
								children to reach their highest potential.
							</p>
							<a className='text-lg font-bold text-hvorange' href='http://www.handsandvoices.org/'>
								www.handsandvoices.org
							</a>
						</div>

						<div className='relative -mx-4 mt-10 lg:mt-0' aria-hidden='true'>
							<svg
								className='absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden'
								width='784'
								height='404'
								fill='none'
								viewBox='0 0 784 404'
							>
								<defs>
									<pattern id='ca9667ae-9f92-4be7-abcb-9e3d727f2941' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
										<rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
									</pattern>
								</defs>
								<rect width='784' height='404' fill='url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)' />
							</svg>
							<img className='relative mx-auto h-96 w-96 object-cover shadow-white shadow-2xl rounded-lg' width='490' src={signKid} alt='' />
						</div>
					</div>

					<svg
						className='absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block'
						width='404'
						height='784'
						fill='none'
						viewBox='0 0 404 784'
						aria-hidden='true'
					>
						<defs>
							<pattern id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
								<rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
							</pattern>
						</defs>
						<rect width='404' height='784' fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)' />
					</svg>

					<div className='relative mt-12 sm:mt-16 lg:mt-24'>
						<div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8'>
							<div className='lg:col-start-2'>
								<h3 className='text-2xl font-extrabold tracking-tight text-hvorange sm:text-3xl'>MEMBERSHIP</h3>
								<p className='mt-3 text-lg'>
									Thank you for your interest in Alabama Hands & Voices. Please consider joining our chapter. Membership fees help fund our chapter
									activities and operations and provide members with newsletters from Hands & Voices headquarters. Yearly membership fees are $25 for
									families, students, and deaf or hard of hearing adults, $40 for professionals, and $50 for organizations.
								</p>
								<p className='mt-3 text-lg'>
									If you are interested in becoming a member, please follow this
									<a className='font-bold text-hvorange' href='membership.html' target='_blank' rel='noopener'>
										{" "}
										link{" "}
									</a>
									to online membership application or download this
									<a className='font-bold text-hvorange' href='assets/hv-membership-form.docx' target='_blank' rel='noopener'>
										{" "}
										form{" "}
									</a>
									and scan or mail in.
								</p>
							</div>

							<div className='relative -mx-4 mt-10 lg:col-start-1 lg:mt-0'>
								<svg
									className='absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden'
									width='784'
									height='404'
									fill='none'
									viewBox='0 0 784 404'
									aria-hidden='true'
								>
									<defs>
										<pattern id='e80155a9-dfde-425a-b5ea-1f6fadd20131' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
											<rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
										</pattern>
									</defs>
									<rect width='784' height='404' fill='url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)' />
								</svg>
								<img className='relative mx-auto h-96 w-96 object-cover shadow-white shadow-xl rounded-lg' width='490' src={lawson} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='relative bg-white py-16'>
				<div className='absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block' aria-hidden='true'></div>
				<div className='mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent  lg:px-8'>
					<div className='lg:grid lg:grid-cols-12'>
						<div className='relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16'>
							<div className='absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden' aria-hidden='true'></div>
							<div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
								<div className='aspect-h-6 aspect-w-10 bg-hvorange rounded-2xl  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-w-1'>
									<img className='object-contain object-center p-4 shadow-2xl' src={hvLogoPng2x} alt='Hands and Voices Logo' />
								</div>
							</div>
						</div>
						<div className='relative bg-hvblue lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl '>
							<div className='absolute inset-0 hidden overflow-hidden rounded-3xl lg:block' aria-hidden='true'>
								<svg
									className='absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0'
									width='404'
									height='384'
									fill='none'
									viewBox='0 0 404 384'
									aria-hidden='true'
								>
									<defs>
										<pattern id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
											<rect x='0' y='0' width='4' height='4' className='text-indigo-500' fill='currentColor' />
										</pattern>
									</defs>
									<rect width='404' height='384' fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)' />
								</svg>
								<svg
									className='absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2'
									width='404'
									height='384'
									fill='none'
									viewBox='0 0 404 384'
									aria-hidden='true'
								>
									<defs>
										<pattern id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
											<rect x='0' y='0' width='4' height='4' className='text-indigo-500' fill='currentColor' />
										</pattern>
									</defs>
									<rect width='404' height='384' fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)' />
								</svg>
							</div>
							<div className='relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0'>
								<h2 className='text-3xl font-extrabold text-hvorange' id='join-heading'>
									Support Our Mission
								</h2>
								<p className='text-lg text-white w-3/4'>
									If you would like to donate to provide operational funds for Alabama Hands & Voices, Inc, we are an Alabama non-profit corporation
									with 501(c)(3) status.
								</p>
								<button
									className='block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-indigo-700 shadow-md hover:bg-hvorange hover:text-white hover:shadow-white hover:shadow-lg ease-in-out duration-300 transition-all  sm:inline-block sm:w-auto'
									href='#'
								>
									Donate Here!
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mx-auto w-full bg-hvblue text-white  '>
				<div className='w-1/2 text-center mx-auto h-fit py-8 flex justify-center items-center flex-col'>
					<h1 className='text-2xl'>
						Our lives and our children&apos;s lives have been enriched by those who have walked this path with us and ahead of us, and we want all
						parents of deaf/hard of hearing children to have the support they need!
					</h1>
					<h1>Alabama Hands & Voices Founders Susan Fingerle, Jessica Havard, Maria Katz</h1>
				</div>
			</div>
			<div className='mx-auto w-full text-black  '>
				<div className='w-1/2 text-center mx-auto h-fit py-8 flex justify-center items-center flex-col'>
					<h1 className='text-5xl text-hvorange font-bold'>EVENTS</h1>
					<h1 className='text-2xl my-4'>
						We are hosting monthly virtual gatherings for parents/caregivers to connect, learn, and share with other families on similar journeys.
						More dates coming soon. Stay tuned.
					</h1>
					<div className='w-fit h-fit border-4 rounded-xl border-hvorange  px-6 py-2 shadow-2xl shadow-black/50 bg-hvblue-500 text-hvorange'>
						<h1 className='text-3xl my-4 text-white'>Current Event</h1>
						<h1 className='text-2xl my-4'>{data}</h1>
					</div>

					<h1 className='text-2xl mb-4  mt-8'>
						Please reach out for questions to:{" "}
						<a
							className='text-hvorange hover:underline'
							href='mailto:alabamahinfo@gmail.com'
							// target='_blank'
							// rel='noreferrer'
						>
							mhendrick@alhandsandvoices.org
						</a>
					</h1>
					<h1 className='text-2xl my-4'>We are always planning events. In-person and virtual! </h1>
					<h1 className='text-2xl my-4'>
						{" "}
						Please visit our{" "}
						<a
							href='https://www.facebook.com/alabamahandsandvoices/'
							target='_blank'
							rel='noreferrer'
							className='text-hvorange underline font-semibold'
						>
							Facebook Page
						</a>{" "}
						or{" "}
						<a
							href='https://www.facebook.com/groups/Alabamahandsandvoices/'
							target='_blank'
							rel='noreferrer'
							className='text-hvorange underline font-semibold'
						>
							Facebook Group
						</a>
						.
					</h1>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
