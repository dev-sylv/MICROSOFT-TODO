import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineBell } from "react-icons/ai";
import { CiRepeat } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { TiAttachment } from "react-icons/ti";
import { BiCalendar } from "react-icons/bi";
import { GlobalContext } from "../Global/Global";

const DetailsComp = () => {
	const { toggleShow } = useContext(GlobalContext);
	return (
		<Cont>
			<MainCont>
				<Card>
					<IconHold>
						<input type='radio' />
					</IconHold>
					<span>dfhyjdfkfjfj</span>
				</Card>
				<Card>
					<IconHold>
						<BiCalendar />
					</IconHold>
					<span>Add Due Date</span>
				</Card>
				<Card>
					<IconHold>
						<AiOutlineBell />
					</IconHold>
					<span>Remaind Me</span>
				</Card>
				<Card>
					<IconHold>
						<CiRepeat />
					</IconHold>
					<span>Repeat</span>
				</Card>
				<Card>
					<IconHold>
						<MdOutlineLocalOffer />
					</IconHold>
					<span>Pick a Category</span>
				</Card>
				<Card>
					<IconHold>
						<TiAttachment />
					</IconHold>
					<span>Add File</span>
				</Card>
				<Card
					style={{
						flex: 1,
					}}>
					<Hol>
						<textarea placeholder='Edited...' />
						<span>Sunday, January 15</span>
					</Hol>
				</Card>
			</MainCont>
		</Cont>
	);
};

export default DetailsComp;

const Hol = styled.div`
	display: flex;
	flex-direction: column;

	span {
		font-size: 10px;
	}
`;

const IconHold = styled.div`
	margin-right: 10px;
`;
const MainCont = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	/* justify-content: center; */
	margin-top: 20px;
	flex-direction: column;
	align-items: center;
`;
const Card = styled.div`
	height: 50px;
	width: 90%;
	background-color: white;
	display: flex;
	align-items: center;
	padding-left: 10px;
	border-radius: 5px;
	margin-bottom: 10px;

	textarea {
		flex: 1;
		min-height: 200px;
		outline: none;
		border: none;
		resize: none;
	}
`;

const Cont = styled.div`
	height: calc(100vh - 50px);
	position: fixed;
	/* background-color: white; */
	width: 300px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
