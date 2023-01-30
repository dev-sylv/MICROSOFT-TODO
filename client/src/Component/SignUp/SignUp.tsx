import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/log2.png";
import axios from "axios";
import { GlobalContext } from "../Global/Global";

const SignUp = () => {
	const [fullName, setFullName] = useState("");
	const Navigate = useNavigate();
	const { setCurrentUser, currentUser } = useContext(GlobalContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const RegisterUser = async (e: any) => {
		e.preventDefault();
		await axios
			.post("http://localhost:5000/api/register", {
				name: fullName,
				email,
				password,
			})
			.then((res) => {
				console.log(res);

				window.localStorage.setItem("userData", JSON.stringify(res.data.data));

				Navigate("/myday");
			});
	};

	console.log("this is the current user", currentUser);

	return (
		<Container>
			<Card onSubmit={RegisterUser}>
				<Logo src={logo} />
				<h3>Create Account</h3>
				<Input
					value={fullName}
					onChange={(e) => {
						setFullName(e.target.value);
					}}
					required
					placeholder='Enter your fullName'
				/>
				<Input
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					required
					type='email'
					placeholder='Enter your email'
				/>
				<Input
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					required
					type='password'
					placeholder='Enter your password'
				/>
				<span>
					Already have an Account ? <Link to='/signin'>SignIn</Link>
				</span>
				<ButtonHold>
					<Button type='submit'>Sign Up</Button>
				</ButtonHold>
			</Card>
		</Container>
	);
};

export default SignUp;

const ButtonHold = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;
const Button = styled.button`
	height: 40px;
	width: 120px;
	background-color: #005da6;
	border: none;
	outline: none;
	color: white;
	transition: all 350ms;
	cursor: pointer;

	:hover {
		transform: scale(0.98);
		text-decoration: underline;
	}
`;

const Input = styled.input`
	border: none;
	outline: none;
	border-bottom: 1px solid #f1f1f1;
	padding-bottom: 10px;
	transition: all 350ms;
	height: 20px;
	margin-bottom: 15px;

	:hover {
		border-color: silver;
	}
`;

const Logo = styled.img`
	width: 100px;
`;

const Card = styled.form`
	height: 300px;
	width: 390px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-radius: 3px;

	span {
		font-size: 13px;
	}

	h3 {
		font-weight: 600;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	/* background-color: #ebebeb; */
	background-image: linear-gradient(#f1f1f1, #f1f1f1, #dfdede);
`;
