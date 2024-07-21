import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBarDropDown = (props) => {
	const [dropDownData, setDropDownData] = useState(props.data);

	useEffect(() => {
		setDropDownData(props.data);
	}, [props.data]);

	return (
		<>
			{Array.isArray(dropDownData) &&
				dropDownData.map((item, id) => (
					<div className=' p-4 text-xs ' key={id}>
						<Link to={item.href}>
							<h1 className='whitespace-nowrap text-white hover:text-hvorange '>{item.name}</h1>
						</Link>
					</div>
				))}
		</>
	);
};

export default NavBarDropDown;
