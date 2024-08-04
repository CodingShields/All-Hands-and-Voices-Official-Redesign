import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import MembershipPage from "./pages/MembershipPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import BoardMembers from "./pages/sub-pages/about/BoardMembers.jsx";
import ContactUs from "./pages/sub-pages/about/ContactUs.jsx";
import Staff from "./pages/sub-pages/about/Staff.jsx";
import WhoWeAre from "./pages/sub-pages/about/WhoWeAre.jsx";
import ChildSafety from "./pages/sub-pages/programs/ChildSafety.jsx";
import DHH from "./pages/sub-pages/programs/DHH.jsx";
import Education from "./pages/sub-pages/programs/Education.jsx";
import GuidePage from "./pages/sub-pages/programs/GuidePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path='resources' element={<ResourcesPage />} />
						<Route path='membership' element={<MembershipPage />} />
						<Route path='about/board-members' element={<BoardMembers />} />
						<Route path='about/contact-us' element={<ContactUs />} />
						<Route path='about/staff' element={<Staff />} />
						<Route path='about/who-we-are' element={<WhoWeAre />} />
						<Route path='programs/child-safety' element={<ChildSafety />} />
						<Route path='programs/dhh' element={<DHH />} />
						<Route path='programs/education' element={<Education />} />
						<Route path='programs/guide' element={<GuidePage />} />
						<Route path='admin' element={<AdminPage />} />
						<Route element={<ProtectedRoute />} />
					</Route>
				</Routes>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
