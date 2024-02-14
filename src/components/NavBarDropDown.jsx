import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

const NavBarDropDown = (props) => {
	const [dropDownData, setDropDownData] = useState(props.data);

	useEffect(() => {
		setDropDownData(props.data);
	}, [props.data]);

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}


	return (
		<div
		>
			{Array.isArray(dropDownData) &&
				dropDownData.map((item, id) => (
					<div className=' p-4 ' key={id}>
						<Link to={item.href}>
							<h1 className='whitespace-nowrap text-white hover:text-hvorange'>{item.name}</h1>
						</Link>
					</div>
				))}
		</div>
	);
};

export default NavBarDropDown;
