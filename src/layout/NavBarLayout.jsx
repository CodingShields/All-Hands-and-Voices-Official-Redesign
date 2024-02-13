import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function DashBoardLayout() {
	const activeStyles = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	};
	return (
		<>
			<nav>
				<NavLink to='/' exact style={({ isActive }) => (isActive ? activeStyles : null)}>
					Home
				</NavLink>

				<NavLink to='about' style={({ isActive }) => (isActive ? activeStyles : null)}>
					About
				</NavLink>

				<NavLink to='programs' style={({ isActive }) => (isActive ? activeStyles : null)}>
					Programs
				</NavLink>

				<NavLink to='resources' style={({ isActive }) => (isActive ? activeStyles : null)}>
					Resources
				</NavLink>

				<NavLink to='membership' style={({ isActive }) => (isActive ? activeStyles : null)}>
					Membership
				</NavLink>

				<NavLink to='admin' style={({ isActive }) => (isActive ? activeStyles : null)}>
					Admin
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
}
