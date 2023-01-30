import React, { useContext } from "react";
import styled from "styled-components";
import SideBar from "../SideBar/SideBar";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import {
	AiOutlineSetting,
	AiOutlineQuestion,
	AiOutlineNotification,
} from "react-icons/ai";
import { GlobalContext } from "../Global/Global";

const Header = () => {
	const { currentUser } = useContext(GlobalContext);

	return (
		<Container>
			<Head>
				<First>
					<Icons>
						<BsFillGrid3X3GapFill />
					</Icons>
					<Title>TO DO</Title>
				</First>
				<Second>
					<IconHold>
						<VscSearch />
					</IconHold>
					<Input placeholder='Search...' />
				</Second>
				<Third>
					<Icon>
						<AiOutlineSetting />
					</Icon>
					<Icon>
						<AiOutlineQuestion />
					</Icon>
					<Icon>
						<AiOutlineNotification />
					</Icon>
					<Icon>
						<Circle>{currentUser?.email?.charAt(0)}</Circle>
					</Icon>
				</Third>
			</Head>
			<SideBar />
		</Container>
	);
};

export default Header;

const Circle = styled.div`
	height: 30px;
	width: 30px;
	border: 1px solid white;
	border-radius: 50%;
	align-items: center;
	display: flex;
	justify-content: center;
`;

const Icon = styled.div`
	display: flex;
	margin-right: 10px;
	transition: all 350ms;
	height: 100%;
	align-items: center;
	display: flex;
	justify-content: center;
	width: 40px;
	cursor: pointer;

	:hover {
		background-color: rgba(0, 0, 0, 0.3);
	}
`;

const IconHold = styled.div`
	color: black;
	padding: 5px;
	margin-top: 7px;
	color: gray;
`;
const Input = styled.input`
	width: 80%;
	padding: 5px;
	border: none;
	outline: none;

	::placeholder {
		font-size: 12px;
		color: gray;
	}
`;

const Icons = styled.div`
	margin-right: 40px;
`;
const Title = styled.div`
	font-size: 17px;
	font-weight: bold;
`;
const Container = styled.div``;
const First = styled.div`
	margin-left: 10px;
	display: flex;
	align-items: center;
`;
const Second = styled.div`
	height: 30px;
	width: 300px;
	background-color: white;
	align-items: center;
	display: flex;
	border-radius: 5px;
`;
const Third = styled.div`
	margin-right: 10px;
	display: flex;
	align-items: center;
	height: 100%;
`;
const Head = styled.div`
	height: 50px;
	width: 100%;
	background-color: #3636e5;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
