import React, { useContext } from "react";
import AllRoutes from "./Component/AllRoutes/AllRoutes";
import Header from "./Component/Header/Header";
import styled from "styled-components";
import DetailsComp from "./Component/DetailsComp/DetailsComp";
import { GlobalContext } from "./Component/Global/Global";
import RegisterRoute from "./Component/AllRoutes/RegisterRoute";

const App = () => {
	const { toggleShow, showDetail, currentUser } = useContext(GlobalContext);

	return (
		<div>
			{currentUser?.name ? <Header /> : null}
			<RegisterRoute />
			<Container>
				<AllRoutes />
				{showDetail ? <DetailsComp /> : null}
			</Container>
		</div>
	);
};

export default App;

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
`;
