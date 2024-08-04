import { NavLink } from "react-router-dom";
import alabamahvLogo from "../assets/images/footer/alabamahvlogo.svg";
import home from "../assets/icons/home.svg";
import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
const Footer = () => {

	return (
		<div>
			<div className='w-full h-fit bg-gradient-to-r from-hvblue to-white flex flex-row justify-evenly items-center py-4 border-t-8 border-hvorange'>
				<h1 className='text-white text-2xl text-center font-bold'>
					Want To Donate to the <span className='font-kaushan font-thin text-3xl text-hvorange'> Mission?</span>
				</h1>
				<a
					href='https://www.paypal.com/donate?token=Iy-0G-kWrPEa7vNtfOzaGW2lfss5eN8iaUvglAI-DJEwgJ91Z9ayc7G-RcYVr_WMmssLxgekK3SeIHOW'
					target='_blank'
					className='bg-hvorange text-white h-fit w-fit px-4 py-2 rounded-lg hover:shadow-2xl hover:shadow-hvorange hover:bg-hvblue ease-in-out duration-300'
				>
					Donate Here!
				</a>
			</div>
			<div className='xl:grid xl:grid-cols-3 xl:gap-8 py-4'>
				<div className='px-4'>
					<img src={alabamahvLogo} />
					<p className='text-sm'>Making the world a better place through constructing elegant hierarchies.</p>
					<div className='flex flex-row w-full justify-start space-x-8 py-4 ml-8'>
						<a href='https://www.facebook.com/alabamahandsandvoices/' target='_blank' className='text-gray-400 hover:text-gray-500'>
							<span className='sr-only'>Facebook</span>
							<img src={facebook} className='w-6 hover:grayscale-0 grayscale duration-300 hover:scale-125' />
						</a>
						<a href='https://www.instagram.com/handsandvoices/?hl=en' className='text-gray-400 hover:text-gray-500'>
							<span className='sr-only'>Instagram</span>
							<img src={instagram} className='w-6 hover:grayscale-0 grayscale duration-300 hover:scale-125' />
						</a>
						<a href='https://twitter.com/handsandvoices?lang=en' className='text-gray-400 hover:text-gray-500'>
							<span className='sr-only'>Twitter</span>
							<img src={twitter} className='w-6 rounded-md hover:grayscale-0 grayscale duration-300 hover:scale-125' />
						</a>
					</div>
				</div>
				<div className='mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
					<div className='md:grid md:grid-cols-2 md:gap-8'>
						<div>
							<h3 className='text-sm font-semibold uppercase tracking-wider text-gray-400'>Pages</h3>
							<ul role='list' className='mt-4 space-y-4'>
								<li>
									<NavLink to='/' className='text-base text-gray-500 hover:text-gray-900'>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink to='/about/who-we-are' className='text-base text-gray-500 hover:text-gray-900'>
										About
									</NavLink>
								</li>
								<li>
									<NavLink to='/programs/guide' className='text-base text-gray-500 hover:text-gray-900'>
										Programs
									</NavLink>
								</li>
								<li>
									<NavLink to='/resources' className='text-base text-gray-500 hover:text-gray-900'>
										Resources
									</NavLink>
								</li>
								<li>
									<NavLink to='/membership' className='text-base text-gray-500 hover:text-gray-900 hover:cursor-pointer'>
										Membership
									</NavLink>
								</li>
								<li>
									<NavLink to='/admin' className='text-base text-gray-500 hover:text-gray-900 hover:cursor-pointer'>
										Admin Portal
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<div className='space-y-4'>
						<h3 className='text-sm font-semibold uppercase tracking-wider text-gray-400 '>Contact</h3>
						<ul className=' space-y-6'>
							<li>
								<a className='inline-flex text-base text-gray-500 hover:text-gray-900 whitespace-nowrap justify-start items-center'>
									<img src={home} className='h-6 pr-4' />
									P.O. Box 130627 Birmingham, AL 35213
								</a>
							</li>
							<li>
								<a
									href='mailto:alabamahinfo@gmail.com'
									className='inline-flex text-base text-gray-500 hover:text-gray-900 whitespace-nowrap justify-start items-center'
								>
									<img src={mail} className='h-6 pr-4' />
									alabamahinfo@gmail.com
								</a>
							</li>
							<li>
								<a
									href='+1 205 677-3136'
									className='inline-flex text-base text-gray-500 hover:text-gray-900 whitespace-nowrap justify-start items-center'
								>
									<img src={phone} className='h-6 pr-4' />
									+1 205 677-3136
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='mt-12 border-t border-gray-200 pt-8'>
				<p className='text-base text-gray-400 xl:text-center'>&copy; 2020 Workflow, Inc. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
