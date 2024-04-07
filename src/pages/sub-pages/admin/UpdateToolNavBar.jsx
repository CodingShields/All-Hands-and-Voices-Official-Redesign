import { useState, useEffect } from "react";
import AdminUpdateHome from "./AdminUpdateHome";
const UpdateToolNavBar = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: true,
		activeMenu: "",
		activeSubMenu: "",
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
			setState({ ...state, subPageNavBar: target, subPageNavBarOpen: true, activeMenu: target });
		} else {
			setState({ ...state, activeMenu: target, subPageNavBarOpen: false });
		}
		console.log(target);
	};

	const handleSubPageNavBar = (e) => {
		const target = e.target.innerText;
		setState({ ...state, activeSubMenu: target });
		console.log(target);
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<div className='w-full h-full flex flex-row '>
			<div className='h-dvh bg-gray-200 px-16'>
				<ul className='flex flex-col justify-start items-start w-[175px] h-full space-y-8 whitespace-nowrap '>
					{pages.map((page, index) => {
						return (
							<li key={index}>
								<h1
									name={page.name}
									onClick={handleNavBar}
									className={classNames(
										"hover:cursor-pointer underline hover:bg-hvblue-200 hover:px-2 hover:py-2 hover:text-white m-2 transition-all duration-100 ease-in-out rounded-2xl whitespace-nowrap",
										state.activeMenu === page.name && "text-hvorange-500 font-semibold whitespace-nowrap"
									)}
								>
									{page.name}
								</h1>
								{page.subPages && state.subPageNavBar === page.name && state.subPageNavBarOpen ? (
									<ul>
										{page.subPages.map((subPage, index) => {
											return (
												<li onClick={handleSubPageNavBar} name={subPage} key={index}>
													<h1
														className={classNames(
															"hover:cursor-pointer underline hover:bg-hvblue-200 hover:px-2 hover:py-2 hover:text-white  m-2 translate-x-6 transition-all rounded-2xl duration-100 ease-in-out",
															state.activeSubMenu === subPage && "text-hvorange-300 font-semibold whitespace-nowrap"
														)}
													>
														{subPage}
													</h1>
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
			<div className='w-full	 h-full flex'>
				<AdminUpdateHome />
			</div>
		</div>
	);
};

export default UpdateToolNavBar;
