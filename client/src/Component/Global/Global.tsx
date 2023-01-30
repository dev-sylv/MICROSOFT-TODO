import React, { createContext, useState } from "react";

interface User {
	name: string;
	email: string;
	_id: string;
}
interface ContextData {
	showDetail: boolean;
	toggleShow: () => void;
	currentUser: User;
	setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
}

export const GlobalContext = createContext<ContextData>({
	showDetail: false,

	toggleShow: () => {},
	currentUser: {
		name: "",
		email: "",
		_id: "",
	},
	setCurrentUser: (currentUser: {}) => {},
});

export const MainContext: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [showDetail, setShowDetail] = useState(false);
	const [currentUser, setCurrentUser] = useState<User>({} as User);

	const toggleShow = () => {
		setShowDetail(!showDetail);
	};

	React.useEffect(() => {
		if (window.localStorage.getItem("userData")) {
			const myData = JSON.parse(window.localStorage.getItem("userData") || "");
			setCurrentUser(myData);
		}

		return;
	}, []);
	return (
		<GlobalContext.Provider
			value={{
				showDetail,
				toggleShow,
				currentUser,
				setCurrentUser,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
