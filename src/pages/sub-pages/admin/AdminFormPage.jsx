import { useState, useEffect } from "react";
import { adminFormDataNavBar } from "../../../assets/data-arrays/adminFormData";
import AllFormsTable from "./AllFormsTable";
import GBYSFormsTable from "./GBYSFormsTable";
import MembershipFormsTable from "./MembershipFormsTable";
import AstraFormsTable from "./AstraFormsTable";

const AdminFormPage = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		modal: false,
		activeTab: "",
		activeTable: 0,
	});
	const initialState = {
		error: false,
		errorMessage: "",
		loading: false,
		modal: false,
		activeTab: "",
		activeTable: 0,
	};
	console.log(state.activeTab);
	console.log(state.activeTable);
	const tableData = [<AllFormsTable />, <GBYSFormsTable />, <MembershipFormsTable />, <AstraFormsTable />];

	useEffect(() => {
		setState(initialState);
	}, []);

	const handleTabSelection = (e) => {
		e.preventDefault();
		const name = e.target.name;
		setState({ ...state, activeTab: name });
		if (name === "All Forms") {
			setState({ ...state, activeTable: 0 });
		} else if (name === "GBYS Forms") {
			setState({ ...state, activeTable: 1 });
		} else if (name === "Membership Forms") {
			setState({ ...state, activeTable: 2 });
		} else if (name === "ASTra Forms") {
			setState({ ...state, activeTable: 3 });
		}
	};

	return (
		<div className='w-full h-full'>
			<div className='w-full flex flex-row justify-center items-center py-2 space-x-4'>
				<h1 className='w-fit text-right underline text-xl font-bold'>Form View:</h1>

				<div className='w-fit border-2 border-hvorange-500 overflow-hidden rounded-2xl'>
					{adminFormDataNavBar.map((forms, id) => {
						return (
							<button
								key={id}
								name={forms.name}
								onClick={handleTabSelection}
								className={
									state.activeTab === forms.name
										? "w-fit h-fit px-4 py-2 bg-hvorange-500 text-white font-bold overflow-hidden"
										: "w-fit h-fit px-4 py-2 bg-hvorange-300 hover:bg-hvorange-500 overflow-hidden"
								}
							>
								{forms.name}
							</button>
						);
					})}
				</div>
			</div>
			<div className='flex justify-center items-center w-full'>{tableData[state.activeTable]}</div>
		</div>
	);
};

export default AdminFormPage;
