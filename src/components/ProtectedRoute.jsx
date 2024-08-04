import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
	const { user } = UserAuth();

	if (!user) {
		return <Navigate to='/Home' />;
	}
	return <Outlet />;
}
