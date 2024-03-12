import { useState, useEffect } from "react";

import { membershipFormsTableData } from "../../../assets/data-arrays/adminFormData";

const MembershipFormsTable = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: true,
	});

	const initialState = {
		error: false,
		errorMessage: "",
		loading: true,
	};

	const [tableData, setTableData] = useState(null);
	const membershipFormData = membershipFormsTableData[0].fields;

	useEffect(() => {
		setState(initialState);
		if (membershipFormData.length > 0) {
			setState({ ...state, loading: false });
			setTableData(membershipFormData);
		} else {
			setState({ ...state, loading: true });
		}
	}, []);

	return (
		<div className='w-full h-full bg-gray-200 overflow-x-auto mx-auto'>
			<table class='table-fixed w-full border-2 border-black'>
				<thead>
					{tableData === null ? (
						"Loading ..."
					) : (
						<tr>
							{tableData.map((field, index) => {
								return (
									<th key={index} class='w-32 h-fit text-[14px] border-2 border-black'>
										{field}
										<input type='radio' className='m-2' />
									</th>
								);
							})}
						</tr>
					)}
				</thead>
				<tbody>
					<tr>
						<td>Need To Map Data</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default MembershipFormsTable;
