import { useEffect, useState } from "react";
import AdminUpdateTool from "../pages/sub-pages/admin/AdminUpdateTool";
import AdminSubmittedForms from "../pages/sub-pages/admin/AdminFormPage";
import AdminFormPage from "../pages/sub-pages/admin/AdminFormPage";
import LoginPage from "../components/LoginPage";
import { UserAuth } from "../context/AuthContext";

const AdminPage = () => {
	const [adminAccess, setAdminAccess] = useState(false);

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		modal: false,
		activeTab: "form",
		adminAccess: false,
	});

	const initialState = {
		error: false,
		errorMessage: "",
		loading: false,
		modal: false,
		activeTab: "form",
		adminAccess: false,
	};

	const handleAdminAccess = (value) => {
		// Do whatever you want with the admin access value
		console.log("Admin Access:", value);
		setState({ ...state, adminAccess: value });
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
		<div className='w-full h-full'>
			{!state.adminAccess ? <LoginPage setAdminAccess={handleAdminAccess} /> : null}

			{state.adminAccess ? (
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
			) : null}
			{state.adminAccess ? <div>{state.activeTab === "form" ? <AdminFormPage /> : <AdminUpdateTool />}</div> : null}
		</div>
	);
};

export default AdminPage;
