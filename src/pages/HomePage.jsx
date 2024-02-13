import hvLogoPng2x from "../assets/images/home-page-images/hv_logo-png_2x.png";
import signKid from "../assets/images/home-page-images/sign-kid.jpg";
import lawson from "../assets/images/home-page-images/lawson.jpg";
import family from "../assets/images/home-page-images/family.jpg";

const HomePage = () => {
	return (
		<div>
			<div class='overflow-hidden bg-white'>
				<div class='relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8'>
					<div class='absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block'></div>
					<div class='mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8'>
						<div>
							<h2 class='text-base font-semibold uppercase tracking-wide text-hvorange'>Where To Start</h2>
							<h3 class='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>First, take a deep breath</h3>
						</div>
					</div>
					<div class='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
						<div class='relative lg:col-start-2 lg:row-start-1'>
							<svg
								class='absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block'
								width='404'
								height='384'
								fill='none'
								viewBox='0 0 404 384'
								aria-hidden='true'
							>
								<defs>
									<pattern id='de316486-4a29-4312-bdfc-fbce2132a2c1' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
										<rect x='0' y='0' width='4' height='4' class='text-hvblue' fill='currentColor' />
									</pattern>
								</defs>
								<rect width='404' height='384' fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)' />
							</svg>
							<div class='relative mx-auto max-w-prose text-base lg:max-w-none'>
								<figure>
									<div class='aspect-w-12 aspect-h-7 lg:aspect-none'>
										<img
											class='rounded-lg object-cover object-center shadow-lg'
											src={family}
											alt='Family holding hands with child'
											width='1184'
											height='1376'
										/>
									</div>
								</figure>
							</div>
						</div>
						<div class='mt-8 lg:mt-0'>
							<div class='mx-auto max-w-prose text-base lg:max-w-none'>
								<p class='prose prose-indigo text-gray-500'>
									Whether your child was just identified with a hearing loss, or you are just going through the testing, or you are a seasoned parent
									just looking for support & information to help your child thrive, welcome!
								</p>
							</div>
							<div class='prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none'>
								<p>
									This is a place where we focus on what we can do as parents to help our kids succeed. We want that child of yours to change the
									world, our world. Alabama Hands &amp; Voices is a nonprofit made up of parents just like you. We collaborate with deaf and hard of
									hearing adults and like-minded professionals who share our belief that
									<span class='font-bold'>"what works for your child is what makes the choice right"</span>.
								</p>
								<p>
									We hope to build this chapter into a place where you will find practical and sometimes inspiring information to guide you in
									parenting your own child. If you are going through the hearing screening process, you might want to start with the
									<span class='font-bold text-hvorange'>Parent Road Map</span> and especially the
									<a
										class='font-bold text-hvorange hover:text-hvorange-700'
										href='https://www.youtube.com/watch?v=8NM6u8VOfrk'
										target='_blank'
										rel='noopener'
									>
										Loss &amp; Found video
									</a>
									.
								</p>
								<p>
									You can find us through this page, through phone calls and emails, and our
									<a
										class='font-bold text-hvorange hover:text-hvorange-700'
										href='https://www.facebook.com/alabamahandsandvoices/'
										target='_blank'
										rel='noopener'
									>
										Facebook Page
									</a>
									.
								</p>
								<p>
									You can do this and there's a whole community here to help!
									<br />
									Standing with you,
									<br />
									Your fellow parents at Alabama Hands & Voices
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class='overflow-hidden bg-hvblue py-16 text-white lg:py-24'>
				<div class='relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
					<svg
						class='absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block'
						width='404'
						height='784'
						fill='none'
						viewBox='0 0 404 784'
						aria-hidden='true'
					>
						<defs>
							<pattern id='b1e6e422-73f8-40a6-b5d9-c8586e37e0e7' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
								<rect x='0' y='0' width='4' height='4' class='text-gray-200' fill='currentColor' />
							</pattern>
						</defs>
						<rect width='404' height='784' fill='url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)' />
					</svg>
					<div class='relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
						<div class='relative'>
							<h3 class='text-2xl font-extrabold tracking-tight text-hvorange sm:text-3xl'>OUR MISSION</h3>
							<p class='mt-4 text-lg'>
								Hands & Voices is dedicated to supporting families with children who are DHH without a bias around communication modes or methodology.
							</p>
							<p class='mt-4 text-lg'>
								We're a parent-driven, non-profit organization providing families with the resources, networks, and information they need to improve
								communication access and educational outcomes for their children.
							</p>
							<p class='mt-4 text-lg'>
								Our outreach activities, parent/professional collaboration, and advocacy efforts are focused on enabling DHH children to reach their
								highest potential.
							</p>
							<a class='text-lg font-bold text-hvorange' href='http://www.handsandvoices.org/'>
								www.handsandvoices.org
							</a>
						</div>

						<div class='relative -mx-4 mt-10 lg:mt-0' aria-hidden='true'>
							<svg
								class='absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden'
								width='784'
								height='404'
								fill='none'
								viewBox='0 0 784 404'
							>
								<defs>
									<pattern id='ca9667ae-9f92-4be7-abcb-9e3d727f2941' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
										<rect x='0' y='0' width='4' height='4' class='text-gray-200' fill='currentColor' />
									</pattern>
								</defs>
								<rect width='784' height='404' fill='url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)' />
							</svg>
							<img class='relative mx-auto h-96 w-96 object-cover' width='490' src={signKid} alt='' />
						</div>
					</div>

					<svg
						class='absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block'
						width='404'
						height='784'
						fill='none'
						viewBox='0 0 404 784'
						aria-hidden='true'
					>
						<defs>
							<pattern id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
								<rect x='0' y='0' width='4' height='4' class='text-gray-200' fill='currentColor' />
							</pattern>
						</defs>
						<rect width='404' height='784' fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)' />
					</svg>

					<div class='relative mt-12 sm:mt-16 lg:mt-24'>
						<div class='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8'>
							<div class='lg:col-start-2'>
								<h3 class='text-2xl font-extrabold tracking-tight text-hvorange sm:text-3xl'>MEMBERSHIP</h3>
								<p class='mt-3 text-lg'>
									Thank you for your interest in Alabama Hands & Voices. Please consider joining our Hands & Voices chapter. Membership fees help fund
									our chapter activities and operations and provide members with newsletters from Hands & Voices headquarters. Yearly membership fees
									are $25 for families, students, and deaf adults and $40 for professionals and $50 for organizations.
								</p>
								<p class='mt-3 text-lg'>
									If you are interested in becoming a member, please follow this
									<a class='font-bold text-hvorange' href='membership.html' target='_blank' rel='noopener'>
										link
									</a>
									to online membership application or download this
									<a class='font-bold text-hvorange' href='assets/hv-membership-form.docx' target='_blank' rel='noopener'>
										form
									</a>
									and scan or mail in.
								</p>
							</div>

							<div class='relative -mx-4 mt-10 lg:col-start-1 lg:mt-0'>
								<svg
									class='absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden'
									width='784'
									height='404'
									fill='none'
									viewBox='0 0 784 404'
									aria-hidden='true'
								>
									<defs>
										<pattern id='e80155a9-dfde-425a-b5ea-1f6fadd20131' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
											<rect x='0' y='0' width='4' height='4' class='text-gray-200' fill='currentColor' />
										</pattern>
									</defs>
									<rect width='784' height='404' fill='url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)' />
								</svg>
								<img class='relative mx-auto h-96 w-96 object-cover' width='490' src={lawson} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='relative bg-white py-16'>
				<div class='absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block' aria-hidden='true'></div>
				<div class='mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent lg:px-8'>
					<div class='lg:grid lg:grid-cols-12'>
						<div class='relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16'>
							<div class='absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden' aria-hidden='true'></div>
							<div class='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
								<div class='aspect-h-6 aspect-w-10 bg-hvorange sm:aspect-h-1 sm:aspect-w-2 lg:aspect-w-1'>
									<img class='rounded-3xl object-contain object-center p-4 shadow-2xl' src={hvLogoPng2x} alt='Hands and Voices Logo' />
								</div>
							</div>
						</div>
						<div class='relative bg-hvblue lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl'>
							<div class='absolute inset-0 hidden overflow-hidden rounded-3xl lg:block' aria-hidden='true'>
								<svg
									class='absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0'
									width='404'
									height='384'
									fill='none'
									viewBox='0 0 404 384'
									aria-hidden='true'
								>
									<defs>
										<pattern id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
											<rect x='0' y='0' width='4' height='4' class='text-indigo-500' fill='currentColor' />
										</pattern>
									</defs>
									<rect width='404' height='384' fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)' />
								</svg>
								<svg
									class='absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2'
									width='404'
									height='384'
									fill='none'
									viewBox='0 0 404 384'
									aria-hidden='true'
								>
									<defs>
										<pattern id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
											<rect x='0' y='0' width='4' height='4' class='text-indigo-500' fill='currentColor' />
										</pattern>
									</defs>
									<rect width='404' height='384' fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)' />
								</svg>
							</div>
							<div class='relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0'>
								<h2 class='text-3xl font-extrabold text-hvorange' id='join-heading'>
									Support Our Mission
								</h2>
								<p class='text-lg text-white'>
									If you would like to donate to provide operational funds for Alabama Hands & Voices, Inc, we are an Alabama non-profit corporation
									with 501(c)(3) status.
								</p>
								<a
									class='block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-indigo-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto'
									href='#'
								>
									Donate Here!
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
