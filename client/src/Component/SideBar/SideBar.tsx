import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdOutlineWbSunny } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GlobalContext } from "../Global/Global";

const SideBar = () => {
	const { setCurrentUser } = useContext(GlobalContext);
	return (
		<Cont>
			<Holder>
				<Up>Menu</Up>

				<Main>
					<NavLink
						to='/myday'
						style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}>
						<NavHold>
							<IconHold>
								<MdOutlineWbSunny />
							</IconHold>
							<Nav>MyDay</Nav>
						</NavHold>
					</NavLink>
				</Main>

				<Main>
					<NavLink
						to='/important'
						style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}>
						<NavHold>
							<IconHold>
								<AiOutlineStar />
							</IconHold>
							<Nav>Important</Nav>
						</NavHold>
					</NavLink>
				</Main>

				<Main>
					<NavLink
						to='/planned'
						style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}>
						<NavHold>
							<IconHold>
								<BiCalendar />
							</IconHold>
							<Nav>Planned</Nav>
						</NavHold>
					</NavLink>
				</Main>

				<Main>
					<NavLink
						to='/assigned'
						style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}>
						<NavHold>
							<IconHold>
								<FaRegUser />
							</IconHold>
							<Nav>Assigned to me</Nav>
						</NavHold>
					</NavLink>
				</Main>
				<Main>
					<NavLink
						to='/tasks'
						style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}>
						<NavHold>
							<IconHold>
								<FiHome />
							</IconHold>
							<Nav>Tasks</Nav>
						</NavHold>
					</NavLink>
				</Main>
				<Main
					onClick={() => {
						window.localStorage.removeItem("userData");
					}}>
					<NavLink
						to='/'
						style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}>
						<NavHold>
							<IconHold>
								<FiHome />
							</IconHold>
							<Nav>Log Out</Nav>
						</NavHold>
					</NavLink>
				</Main>
			</Holder>
		</Cont>
	);
};

export default SideBar;

const MainNav = styled(NavLink)`
	&.active {
		background-color: red;
	}
`;

const Up = styled.div`
	margin-left: 30px;
`;

const Main = styled.div`
	/* text-decoration: none; */
	color: black;
	/* margin-top: 10px; */
	/* height: 100%; */
	width: 100%;
	/* margin-top: 5px; */
`;
const NavHold = styled.div`
	display: flex;
	margin-left: 30px;
	display: flex;
	align-items: center;
`;
const IconHold = styled.div`
	margin-right: 20px;
	margin-top: 5px;
`;
const Nav = styled.div``;

const Holder = styled.div`
	margin-top: 50px;
	/* width: 100%; */
`;
const Cont = styled.div`
	height: calc(100vh - 50px);
	position: fixed;
	background-color: white;
	width: 230px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;
