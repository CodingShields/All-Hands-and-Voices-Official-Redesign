import { useState, useEffect } from "react";

import { astraFormsTableData } from "../../../assets/data-arrays/adminFormData";

const AstraFormsTable = () => {
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

	const formFields = astraFormsTableData[0].personalFields;

	console.log(formFields);

	useEffect(() => {
		setState(initialState);
		if (formFields.length > 0) {
			setState({ ...state, loading: false });
			setTableData(formFields);
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
									<th key={index} class='w-36 h-fit text-[14px] border-2 border-black'>
										{field}
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

export default AstraFormsTable;
