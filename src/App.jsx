import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout.jsx";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import MembershipPage from "./pages/MembershipPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='about' element={<AboutPage />} />
					<Route path='programs' element={<ProgramsPage />} />
					<Route path='resources' element={<ResourcesPage />} />
					<Route path='membership' element={<MembershipPage />} />
					<Route path='admin' element={<AdminPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
