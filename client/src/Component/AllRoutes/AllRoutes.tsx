import React from "react";
import { useRoutes } from "react-router-dom";
import Assigned from "../Assigned/Assigned";
import Important from "../Important/Important";
import MyDay from "../MyDay/MyDay";
import Planned from "../Planned/Planned";
import SignUp from "../SignUp/SignUp";
import Tasks from "../Tasks/Tasks";

const AllRoutes = () => {
	let element = useRoutes([
		{
			path: "/myday",
			element: <MyDay />,
		},
		{
			path: "/tasks",
			element: <Tasks />,
		},

		{
			path: "/planned",
			element: <Planned />,
		},
		{
			path: "/important",
			element: <Important />,
		},
		{
			path: "/assigned",
			element: <Assigned />,
		},
	]);
	return element;
};

export default AllRoutes;
