import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { GlobalContext } from "../Global/Global";
import logo from "../img/log2.png";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	const { setCurrentUser } = useContext(GlobalContext);

	const LoginUser = async (e: any) => {
		e.preventDefault();
		await axios
			.post("http://localhost:5000/api/login", {
				email,
			})
			.then((res: any) => {
				console.log(res);
				window.localStorage.setItem("userData", JSON.stringify(res.data.data));
				Swal.fire({
					icon: "success",
					title: "Successfully Sign In",
					// text: res!.response!.data!.message,
					timer: 3000,
				});
				navigate("/myday");
				window.location.reload();
			})
			.catch((res) => {
				Swal.fire({
					icon: "error",
					title: "An Error occured",
					text: res!.response!.data!.message,
				});
			});
	};

	return (
		<Container>
			<Card onSubmit={LoginUser}>
				<Logo src={logo} />
				<h3>Welcome Back</h3>

				<Input
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					required
					type='email'
					placeholder='Enter your email'
				/>

				<span>
					Don't have an Account ? <Link to='/'>SignIn</Link>
				</span>
				<ButtonHold>
					<Button type='submit'>Sign Up</Button>
				</ButtonHold>
			</Card>
		</Container>
	);
};

export default SignIn;

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
	height: 220px;
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
