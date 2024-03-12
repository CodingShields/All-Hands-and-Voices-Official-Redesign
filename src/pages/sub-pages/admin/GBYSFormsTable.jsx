import { useState, useEffect } from "react";

import { gbysFormsTableData } from "../../../assets/data-arrays/adminFormData";

const GBYSFormsTable = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: true,
		activeForm: "personal",
	});

	const initialState = {
		error: false,
		errorMessage: "",
		loading: true,
		activeForm: "personal",
	};

	const [tableData, setTableData] = useState(null);

	const personalFieldsData = gbysFormsTableData[0].personalFields;
	const referralFieldsData = gbysFormsTableData[0].referralFields;

	const handleFieldChange = (e) => {
		const name = e.target.name;
		if (name === "personal") {
			setState({ ...state, activeForm: "personal" });
			setTableData(personalFieldsData);
		} else {
			setState({ ...state, activeForm: "referral" });
			setTableData(referralFieldsData);
		}
	};

	useEffect(() => {
		setState(initialState);
		if (personalFieldsData.length > 0) {
			setTableData(personalFieldsData);
			setState({ ...state, loading: false });
		} else if (referralFieldsData.length > 0) {
			setTableData(referralFieldsData);
			setState({ ...state, loading: false });
		} else {
			setState({ ...state, loading: true });
		}
	}, []);

	return (
		<div className='w-full h-full bg-gray-200 overflow-x-auto mx-auto'>
			<button
				className={
					state.activeForm === "personal"
						? "w-fit h-fit px-2 py-2 bg-hvorange-500 text-white front-bold overflow-hidden rounded-2xl  my-2 mx-2 text-xs ease-in-out transition-all duration-300"
						: "w-fit h-fit px-2 py-2 bg-hvorange-300 text-white overflow-hidden rounded-2xl  my-2 mx-2 text-xs hover:bg-hvblue-500 ease-in-out transition-all duration-300"
				}
				onClick={handleFieldChange}
				name='personal'
			>
				Personal Forms
			</button>
			<button
				className={
					state.activeForm === "referral"
						? "w-fit h-fit px-2 py-2 bg-hvorange-500 text-white front-bold overflow-hidden rounded-2xl  my-2 mx-2 text-xs ease-in-out transition-all duration-300"
						: "w-fit h-fit px-2 py-2 bg-hvorange-300 text-white overflow-hidden rounded-2xl  my-2 mx-2 text-xs hover:bg-hvblue-500 ease-in-out transition-all duration-300"
				}
				onClick={handleFieldChange}
				name='referral'
			>
				Referral Forms
			</button>
			<table class='table-fixed w-full border-2 border-black'>
				<thead>
					{tableData === null ? (
						"Loading ..."
					) : (
						<tr>
							{tableData.map((field, id) => {
								return (
									<th key={id} class='w-32 h-fit  text-[14px] border-2 border-black'>
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

export default GBYSFormsTable;
