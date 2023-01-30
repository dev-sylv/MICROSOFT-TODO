import React from "react";
import { useRoutes } from "react-router-dom";
import SignIn from "../SignUp/SignIn";
import SignUp from "../SignUp/SignUp";

const RegisterRoute = () => {
	let element = useRoutes([
		{
			path: "/",
			element: <SignUp />,
		},
		{
			path: "/signin",
			element: <SignIn />,
		},
	]);
	return element;
};

export default RegisterRoute;
