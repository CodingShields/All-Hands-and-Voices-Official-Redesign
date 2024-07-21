import ourLogo from "../../../assets/images/programs/childrens-safety-project/our-logo.png";
import hvLogo from "../../../assets/images/programs/childrens-safety-project/hv-logo.png";
import GBYSLogo from "../../../assets/images/programs/childrens-safety-project/GBYS-logo.png";
import alabamahvlogo from "../../../assets/images/programs/childrens-safety-project/alabamahvlogo.png";
const ChildSafety = () => {
	return (
		<div className='w-full h-full my-8 animate-fadeIn'>
			<div className='w-1/2 h-fit mx-auto text-center my-12'>
				<h1 className='font-kaushan text-4xl'>O.U.R. Children’s Safety Project</h1>
				<img src={ourLogo} className='mx-auto' />
			</div>
			<div className='w-1/2 mx-auto space-y-6 text-xl my-8 h-fit'>
				<p>
					We don't like to think about it, but our kids who are deaf or hard of hearing are at a higher risk for both abuse and neglect. Like any
					children, they are at risk. As children who might not always be able to communicate easily and fluently, or understand the nuances of
					conversation with neighbors, caregivers, or strangers, they are at an even higher risk of being victims of someone, somewhere.
				</p>
				<p>
					There is more you can do as parents. Start with reading the{" "}
					<a href='https://handsandvoices.org/resources/OUR/index.htm' target='_blank' className='font-bold underline text-hvorange-500'>
						Parent Safety Toolkit.
					</a>{" "}
					Below are resources that will be useful to parents in developing skills that will prepare us to share effectively with their own children.
					But don’t just stop at your own child or student, here are some things that you can do to help others be prepared:
				</p>
			</div>
			<div className='grid grid-cols-2 gap-12 w-1/2 mx-auto my-12 h-full'>
				<div className='w-fit h-fit shadow-2xl p-4 rounded-xl h-full'>
					<img src={hvLogo} className='w-auto h-36' />
					<h2 className='font-kaushan text-2xl pt-4 '>Pass It On</h2>
					<p>
						Share the articles on our{" "}
						<a
							href='https://handsandvoices.org/resources/OUR/index.htm'
							target='_blank'
							className='text-hvorange-500 transition-all duration-300 ease-in-out font-bold underline'
						>
							Hands Voices website
						</a>{" "}
						and its related resources, with at least one other parent, and then ask them to “pass-it-on.”
					</p>
				</div>
				<div className='w-fit h-fit shadow-2xl p-4 rounded-xl h-full'>
					<img src={GBYSLogo} className='w-auto h-36' />
					<h2 className='font-kaushan text-2xl pt-4 '>Share The Story</h2>
					<p>
						Have a conversation with your child about abuse and neglect (see attached “Helping Parents Talk to Children” below) then share the story
						of how it went so that other parents can learn from your experience.
					</p>
				</div>
			</div>
			<div className='w-1/2 mx-auto py-4'>
				<div className='w-full shadow-2xl rounded-xl p-8'>
					<img src={alabamahvlogo} className='w-auto h-28' />
					<h2 className='font-kaushan text-2xl pt-4'>Recognize the Best and Challenge Everyone Else</h2>
					<p>
						Ask the professionals who work with your child what they are doing to protect your child from abuse and neglect, then share the resulting
						reactions, information, resources, programs, and questions so that we recognize the best and challenge everyone else.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ChildSafety;
