import React from "react";
import styled from "styled-components";

const Assigned = () => {
	return (
		<Container>
			<BoxImag src='/img/2.svg' />
			<h3>Assigned Task to me</h3>
			<p>Task assigned to you in TO DO will show up here.</p>
		</Container>
	);
};

export default Assigned;
const BoxImag = styled.img`
	height: 120px;
`;

const Container = styled.div`
	min-width: calc(100vw - 230px);
	min-height: calc(100vh - 50px);

	display: flex;
	overflow: hidden;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #faf9f8;
	/* flex-direction: column; */
`;
