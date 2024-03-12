import { useEffect, useState } from "react";
import AdminUpdateTool from "../pages/sub-pages/admin/AdminUpdateTool";
import AdminSubmittedForms from "../pages/sub-pages/admin/AdminFormPage";
import AdminFormPage from "../pages/sub-pages/admin/AdminFormPage";

const AdminPage = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		modal: false,
		activeTab: "form",
	});

	const initialState = {
		error: false,
		errorMessage: "",
		loading: false,
		modal: false,
		activeTab: "form",
	};

	useEffect(() => {
		setState(initialState);
	}, []);

	const handleNavBarSelection = (e) => {
		const name = e.target.name;
		if (name === "update") {
			setState({ ...state, activeTab: "update" });
		} else {
			setState({ ...state, activeTab: "form" });
		}
	};

	return (
		<div>
			<div className='w-full h-fit flex flex-row justify-evenly items-center bg-hvorange-200  p-2 mx-auto'>
				<button
					onClick={handleNavBarSelection}
					name='update'
					className={state.activeTab === "update" ? "text-white font-bold underline text-xl" : "text-hvblue-500 text-lg hover:text-white"}
				>
					Update Tool
				</button>
				<button
					onClick={handleNavBarSelection}
					name='form'
					className={state.activeTab === "form" ? "text-white font-bold underline text-xl" : "text-hvblue-500 text-lg hover:text-white"}
				>
					Submitted Forms
				</button>
			</div>
			<div>{state.activeTab === "form" ? <AdminFormPage /> : <AdminUpdateTool />}</div>
		</div>
	);
};

export default AdminPage;
