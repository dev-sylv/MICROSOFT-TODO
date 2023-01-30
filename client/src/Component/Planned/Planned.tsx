import React, { useContext } from "react";
import styled from "styled-components";
import { MdOutlineWbSunny } from "react-icons/md";
import DetailsComp from "../DetailsComp/DetailsComp";
import { GlobalContext } from "../Global/Global";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

const Planned = () => {
	const { toggleShow, showDetail } = useContext(GlobalContext);
	return (
		<>
			<Container>
				<Cont>
					<Hold>
						<Main>
							<IconHold>
								{" "}
								<BiCalendar />{" "}
							</IconHold>
							<h3>Planned</h3>
						</Main>

						<span>Sunday, January 15</span>
					</Hold>
					<br />

					<InputHold wd={showDetail ? "67%" : "90%"}>
						<Input2 type='radio' />
						<Input placeholder='Add Task' />
					</InputHold>
					<Down wd={showDetail ? "67%" : "90%"}>
						<First>
							<BiCalendar />
						</First>
						<Button>Add</Button>
					</Down>
					<br />
					<InputHold2 wd={showDetail ? "67%" : "90%"}>
						<Hol>
							<Input2 type='radio' />
							<TitleHold
								onClick={() => {
									toggleShow();
								}}>
								<Title>Fetching water</Title>
								<Sub>sub</Sub>
							</TitleHold>
						</Hol>
						<span>
							<AiOutlineStar />
						</span>
					</InputHold2>
				</Cont>
			</Container>
		</>
	);
};

export default Planned;

const TitleHold = styled.div`
	font-size: 12px;
	margin-left: 10px;
	flex: 1;
`;
const Sub = styled.div`
	font-size: 10px;
`;
const Title = styled.div``;
const Hol = styled.div`
	display: flex;
	align-items: center;
`;
const First = styled.div`
	margin-left: 10px;
`;
const Button = styled.button`
	margin-right: 10px;
	height: 30px;
	width: 60px;
	background-color: white;
	border: 1px solid silver;
	outline: none;
	cursor: pointer;
`;

const Down = styled.div<{ wd: string }>`
	height: 40px;
	width: ${(props) => props.wd};
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
	border-radius: 0px 0px 5px 5px;
`;

const InputHold2 = styled.div<{ wd: string }>`
	width: ${(props) => props.wd};
	background-color: white;
	height: 40px;
	display: flex;
	align-items: center;
	border-radius: 5px 5px 0px 0px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
	justify-content: space-between;
	cursor: pointer;
	transition: all 350ms;

	span {
		margin-right: 20px;
	}

	:hover {
		background-color: #e3f7fe;
	}
`;
const InputHold = styled.div<{ wd: string }>`
	width: ${(props) => props.wd};
	background-color: white;
	height: 40px;
	display: flex;
	align-items: center;
	border-radius: 5px 5px 0px 0px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

const Input2 = styled.input`
	border-color: 1px solid blue;
	margin-left: 10px;
`;
const Input = styled.input`
	border: none;
	outline: none;
	flex: 1;

	::placeholder {
		padding-left: 5px;
	}
`;

const Main = styled.div`
	display: flex;
	align-items: center;
`;
const IconHold = styled.div`
	font-size: 20px;
	margin-right: 10px;
	margin-top: 25px;
`;

const Cont = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	padding-left: 100px;
	flex-direction: column;
	/* background-color: red; */
	flex: 1;
`;
const Hold = styled.div`
	width: 100%;

	h3 {
		margin-bottom: 0;
		padding-bottom: 0;
	}

	span {
		font-size: 12px;
	}
`;

const Container = styled.div`
	min-width: calc(100vw - 230px);
	min-height: calc(100vh - 50px);

	display: flex;
	overflow: hidden;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	background-color: #faf9f8;
	/* flex-direction: column; */
`;
