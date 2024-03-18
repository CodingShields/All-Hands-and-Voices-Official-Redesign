import { useState, useEffect } from "react";

const UpdateToolNavBar = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: true,
		subPageNavBar: "",
		subPageNavBarOpen: false,
	});

	const pages = [
		{
			name: "Home",
		},
		{
			name: "About",
			subPages: ["Board Members", "Contact Us", "Staff", "Who We Are"],
		},
		{
			name: "Programs",
			subPages: ["O.U.R. Child Safety", "GBYS", "ASTra", "Food Services", "DHH Committee"],
		},
		{
			name: "Resources",
		},
		{
			name: "Membership",
		},
	];

	const handleNavBar = (e) => {
		const target = e.target.innerText;
		if (target === "About" || target === "Programs") {
			setState({ ...state, subPageNavBar: target, subPageNavBarOpen: true });
		} else {
			setState({ ...state, subPageNavBarOpen: false });
		}
		console.log(target);
	};

	const handleSubPageNavBar = (e) => {
		const target = e.target.innerText;
		console.log(target);
	};

	return (
		<div className='w-fit h-full bg-gray-200 px-6 py-2 '>
			<ul>
				{pages.map((page, index) => {
					return (
						<li
							className='hover:cursor-pointer underline hover:text-blue-500 m-2 transition-all duration-300 ease-in-out'
							name={page.name}
							onClick={handleNavBar}
							key={index}
						>
							{page.name}
							{page.subPages && state.subPageNavBar === page.name && state.subPageNavBarOpen ? (
								<ul
									
									className='hover:cursor-pointer underline hover:text-blue-500 m-2 translate-x-6 transition-all bg-gray-200 rounded-2xl duration-300 ease-in-out'>
									{page.subPages.map((subPage, index) => {
										return (
											<li onClick={handleSubPageNavBar}
												name={subPage}
												key={index}>
												{subPage}
											</li>
										);
									})}
								</ul>
							) : null}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default UpdateToolNavBar;
