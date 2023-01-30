import { Request, Response } from "express";
import UserModel from "../Model/UserModel";

const GetAllUser = async (req: Request, res: Response): Promise<Response> => {
	try {
		const getUser = await UserModel.find();
		return res.status(200).json({
			message: "Found SuccessFull",
			data: getUser,
		});
	} catch (err) {
		return res.status(404).json({
			message: "an error occurred",
		});
	}
};
const GetSingleUser = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	try {
		const getUser = await UserModel.findById(req.params.id).populate([
			{
				path: "myDay",
				options: {
					sort: {
						createdAt: -1,
					},
				},
			},
			{
				path: "task",
				options: {
					sort: {
						createdAt: -1,
					},
				},
			},
		]);

		return res.status(200).json({
			message: "Found SuccessFull",
			data: getUser,
		});
	} catch (err) {
		return res.status(404).json({
			message: "an error occurred",
		});
	}
};

const RegisterUser = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { email, name, password } = req.body;

		const user = await UserModel.findOne({ email });

		if (user) {
			return res.status(400).json({
				message: "User with this Email already exist",
			});
		} else {
			const regUser = await UserModel.create({
				name,
				email,
				password,
			});

			return res.status(200).json({
				massage: "user Created Successfully",
				data: regUser,
			});
		}
	} catch (err) {
		return res.status(404).json({
			message: "an error occurred",
		});
	}
};

const LoginUser = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { email } = req.body;

		const user = await UserModel.findOne({ email });

		if (user) {
			return res.status(200).json({
				message: `Welcome ${user.name}`,
				data: user,
			});
		} else {
			return res.status(404).json({
				message: "user with this email doesn't exists",
			});
		}
	} catch (err) {
		return res.status(404).json({
			message: "an error occurred",
		});
	}
};

export { GetAllUser, RegisterUser, GetSingleUser, LoginUser };
