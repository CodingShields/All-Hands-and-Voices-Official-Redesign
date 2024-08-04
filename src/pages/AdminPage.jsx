import { useEffect, useState } from "react";
import LoginPage from "../components/LoginPage";
import { UserAuth } from "../context/AuthContext";
import AdminEventsUpdate from "../pages/sub-pages/admin/AdminEventsUpdate";

const AdminPage = () => {
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



	return (
		<div className='w-full h-full'>
			{!state.adminAccess ? <LoginPage setAdminAccess={handleAdminAccess} /> : null}

				{state.adminAccess && <AdminEventsUpdate />}
		
		</div>
	);
};

export default AdminPage;
