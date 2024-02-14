import React, { useEffect, useState } from "react";
import ChevDownBtn from "../components/ChevDownBtn";
import { NavLink, Outlet } from "react-router-dom";
import NavBarDropDown from "../components/NavBarDropDown";
import aboutDropDownProps from "../data/arrays/aboutNavBarDropDown";
import programsDropDownProps from "../data/arrays/programsNavBarDropDown";

export default function DashBoardLayout() {
	const [aboutDropDown, setAboutDropDown] = useState(false);
	const [programsDropDown, setProgramsDropDown] = useState(false);

	const handleAboutClick = () => {
		setAboutDropDown(!aboutDropDown);
		setProgramsDropDown(false);
		console.log("success");
	};

	const handleProgramsClick = () => {
		setProgramsDropDown(!programsDropDown);
		setAboutDropDown(false);
		console.log("success");
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<>
			<nav className='flex justify-evenly text-white bg-hvblue  p-4 text-2xl font-bold border-b-2 border-hvorange shadow-md shadow-hvorange'>
				<NavLink to='/' className='hover:text-hvorange'>
					Home
				</NavLink>
				<div>
					<NavLink id='about' onClick={handleAboutClick} className='hover:text-hvorange w-fit flex flex-row justify-center items-center'>
						About <ChevDownBtn onClick={handleAboutClick} />
					</NavLink>

					<div
						className={classNames(
							aboutDropDown
								? "absolute scale-125 ease-in-out duration-500 transition-all mt-12 z-20 bg-hvblue-400 rounded-lg shadow-hvorange shadow-2xl"
								: "ease-in-out duration-500 transition-all scale-0 absolute"
						)}
					>
						<NavBarDropDown data={aboutDropDownProps} show={aboutDropDown} />
					</div>
				</div>
				<div>
					<NavLink id='programs' onClick={handleProgramsClick} className='hover:text-hvorange w-fit flex flex-row justify-center items-center'>
						Programs <ChevDownBtn onClick={handleProgramsClick} />
					</NavLink>
					<div
						className={classNames(
							programsDropDown
								? "absolute scale-125 ease-in-out duration-500 transition-all mt-12 z-20 bg-hvblue-400 rounded-lg shadow-hvorange shadow-2xl"
								: "ease-in-out duration-500 transition-all scale-0 absolute"
						)}
					>
						<NavBarDropDown data={programsDropDownProps} />
					</div>
				</div>
				<NavLink to='resources' className='hover:text-hvorange'>
					Resources
				</NavLink>

				<NavLink to='membership' className='hover:text-hvorange'>
					Membership
				</NavLink>
			</nav>

			<Outlet />
		</>
	);
}
