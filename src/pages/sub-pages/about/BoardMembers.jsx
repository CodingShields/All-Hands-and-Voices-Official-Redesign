import mariaLawson from "../../../assets/images/about-us/board-members/maria-lawson.jpg";
import susanFingerle from "../../../assets/images/about-us/board-members/susan-fingerle.jpg";
import julibethJones from "../../../assets/images/about-us/board-members/julibeth-jones.jpg";
import hvlogo from "../../../assets/images/about-us/board-members/hvlogo.png";
import jeriGoce from "../../../assets/images/about-us/board-members/jeri-goce.jpg";
import ryanHickman from "../../../assets/images/about-us/board-members/ryan-hickman.jpg";
import Kochie from "../../../assets/images/about-us/board-members/Kochie.jpg";
import lisaClayton from "../../../assets/images/about-us/board-members/lisa-clayton.jpg";
import sarah from "../../../assets/images/about-us/board-members/sarah.jpeg";
import sandraWare from "../../../assets/images/about-us/board-members/sandra-ware.jpg";
import kristine from "../../../assets/images/about-us/board-members/kristine.jpg";
const BoardMembers = () => {
	return (
		<div>
			<div className='w-full h-fit bg-hvorange text-white text-center px-4 mx-auto'>
				<h1 className='font-kaushan text-4xl py-4 '>Alabama Hands & Voices Board of Directors</h1>
				<p className='w-3/5 mx-auto text-left text-white text-xl'>
					The Alabama Hands & Voices Board of Directors oversees the programs, staff, and fundraising efforts of our nonprofit in support of families
					raising children who are deaf or hard of hearing. The Board is comprised parents, professionals and Deaf/hard of hearing adults who
					represent a diverse community. The President of every Hands & Voices Chapter Board must be a parent of a child who is deaf or hard of
					hearing. We are always looking to develop parent leaders, whether serving on the board, as Parent Guides, or on committees locally and
					statewide. For more information about board positions, please contact the Executive Director at{" "}
					<a className='hover:text-blue-800 hover:font-bold' href='mailto:alabamahinfo@gmail.com'>
						Alabamahinfo@gmail.com
					</a>
				</p>
			</div>
			<div className='w-full h-full bg-gradient-to-t from-hvblue to-hvorange py-8'>
				<div className='grid grid-cols-2  p-4 text-2xl w-3/5 gap-6 mx-auto '>
					<div className='bg-slate-200 w-96 h-76 p-4 text-center rounded-xl'>
						<div className='w-full h-fit p-2 bg-white rounded-xl'>
							<img src={mariaLawson} className='w-auto h-56 mx-auto' />
						</div>
						<h3 className='font-bold underline text-xl'>Maria Katz</h3>
						<p className='text-sm'>Parent of deaf/hard of hearing child</p>
					</div>
					<div className='bg-slate-200 w-96 h-76 p-4 text-center rounded-xl'>
						<div className='w-full h-fit p-2 bg-white rounded-xl'>
							<img src={susanFingerle} className='w-auto h-56 mx-auto' />
						</div>
						<h3 className='font-bold underline text-xl'>Susan Fingerle</h3>
						<p className='text-sm'>Parent of deaf/hard of hearing child</p>
					</div>
					<div className='bg-slate-200 w-96 h-76 p-4 text-center rounded-xl'>
						<div className='w-full h-fit p-2 bg-white rounded-xl'>
							<img src={julibethJones} className='w-auto h-56 mx-auto' />
						</div>
						<h3 className='font-bold underline text-xl'>Julibeth Jones</h3>
						<p className='text-sm'>Audiologist</p>
					</div>
					<div className='bg-slate-200 w-96 h-76 p-4 text-center rounded-xl'>
						<div className='w-full h-fit p-2 bg-white rounded-xl'>
							<img src={hvlogo} className='w-auto h-62 mx-auto' />
						</div>
						<h3 className='font-bold underline text-xl'>Christie Cumbest</h3>
						<p className='text-sm'>Deaf/Hard of Hearing adult, parent/grandparent of deaf/hard of hearing child</p>
					</div>
					<div className='bg-slate-200 w-96 h-76 p-4 text-center rounded-xl'>
						<div className='w-full h-fit p-2 bg-white rounded-xl'>
							<img src={jeriGoce} className='w-auto h-56 mx-auto' />
						</div>
						<h3 className='font-bold underline text-xl'>Jeri Goce</h3>
						<p className='text-sm'>Parent of deaf/hard of hearing child</p>
					</div>
					<div className='bg-slate-200 w-96 h-76 p-4 text-center rounded-xl'>
						<div className='w-full h-fit p-2 bg-white rounded-xl'>
							<img src={ryanHickman} className='w-auto h-56 mx-auto' />
						</div>
						<h3 className='font-bold underline text-xl'>Ryan Hickman</h3>
						<p className='text-sm'>Deaf adult</p>
					</div>
					<div className='bg-slate-200 w-96 h-76 p-4 text-center rounded-xl'>
						<div className='w-full h-fit p-2 bg-white rounded-xl'>
							<img src={Kochie} className='w-auto h-56 mx-auto' />
						</div>
						<h3 className='font-bold underline text-xl'>Christy Kochie</h3>
						<p className='text-sm'>Deaf adult, parent of deaf/hard of hearing child</p>
					</div>
					<div className='bg-slate-200 w-96 h-76 p-4 text-center rounded-xl'>
						<div className='w-full h-fit p-2 bg-white rounded-xl'>
							<img src={lisaClayton} className='w-auto h-56 mx-auto' />
						</div>
						<h3 className='font-bold underline text-xl'>Lisa Clayton</h3>
						<p className='text-sm'>Parent of deaf/hard of hearing child</p>
					</div>
					<div className='bg-slate-200 w-96 h-76 p-4 text-center rounded-xl'>
						<div className='w-full h-fit p-2 bg-white rounded-xl'>
							<img src={sarah} className='w-auto h-56 mx-auto' />
						</div>
						<h3 className='font-bold underline text-xl'>Sarah McGuire</h3>
						<p className='text-sm'>Parent of deaf/hard of hearing child</p>
					</div>
					<div className='bg-slate-200 w-96 h-76 p-4 text-center rounded-xl'>
						<div className='w-full h-fit p-2 bg-white rounded-xl'>
							<img src={hvlogo} className='w-auto h-56 mx-auto' />
						</div>
						<h3 className='font-bold underline text-xl'>Harry Wood</h3>
						<p className='text-sm'>Deaf/Hard of Hearing adult</p>
					</div>
				</div>
				<div className='bg-slate-200 w-96 h-76 p-4 text-center rounded-xl mx-auto'>
					<div className='w-full h-fit p-2 bg-white rounded-xl'>
						<img src={sandraWare} className='w-auto h-96 mx-auto' />
					</div>
					<h3 className='font-bold underline text-xl'>Sandra Ware</h3>
					<p className='text-sm'>Educational Administrator</p>
				</div>
			</div>

			<div className='bg-slate-100 w-full h-fit p-4 flex flex-row justify-center'>
				<div className='w-1/3 p-4 text-center space-y-4'>
					<h1 className='text-xl text-left font-bold text-black'>KRISTINE LEMOYNE MATHIS HENDERSON</h1>
					<h1 className='text-3xl font-bold text-hvorange text-left'>In Memoriam</h1>

					<p className='text-left  text-black text-md'>
						Kristine Lemoyne Mathis Henderson was instrumental in founding Alabama Hands & Voices. She attended one of our earliest get togethers
						became a member of the Board of Directors in 2018. As the child of deaf parents (CODA - Child of Deaf Adult), a nurse, and the mother of a
						deaf son she brought so much wisdom to the formation of Alabama Hands & Voices. Her calm and warm personality drew people to her. She
						served on the board while fighting cancer. She passed away far too young in March 2020. We miss her very much and dedicate ourselves to
						serving families of deaf and hard of hearing children in her honor.
					</p>
				</div>
				<div className='w-fit h-fit p-4 bg-white'>
					<img src={kristine} className='w-96' />
				</div>
			</div>
		</div>
	);
};

export default BoardMembers;
