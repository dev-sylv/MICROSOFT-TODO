import { Request, Response } from "express";
import mongoose from "mongoose";
import TaskModel from "../Model/TaskModel";
import UserModel from "../Model/UserModel";

const getTask = async (req: Request, res: Response) => {
	await TaskModel.find();
	res.status(200).json({
		message: "found",
	});
};
const getSingleTask = async (req: Request, res: Response) => {
	await TaskModel.find();
	res.status(200).json({
		message: "found",
	});
};

const CreateTask = async (req: Request, res: Response): Promise<Response> => {
	try {
		const getUser = await UserModel.findById(req.params.userID);

		if (getUser) {
			const { title, date } = req.body;

			let myDate1 = new Date().toDateString();

			const creatingTask = await TaskModel.create({
				title,
				date: date ? date : myDate1,
				remainder: "",
				status: false,
				note: "",
			});

			await getUser?.myDay?.push(
				new mongoose.Types.ObjectId(creatingTask!._id),
			);
			await getUser?.task?.push(new mongoose.Types.ObjectId(creatingTask!._id));

			getUser.save();

			return res.status(200).json({
				message: "success",
				data: creatingTask,
			});
		} else {
			return res.status(404).json({
				message: "user not found",
			});
		}
	} catch (err) {
		return res.status(404).json({
			message: "an error occurred While Creating task",
		});
	}
};

const CompleteTask = async (req: Request, res: Response) => {
	try {
		const getUser = await UserModel.findById(req.params.userID);

		if (getUser) {
			const completed = await TaskModel.findByIdAndUpdate(
				req.params.TaskID,
				{
					status: true,
				},
				{
					new: true,
				},
			);
			return res.status(200).json({
				message: "updated successfully",
				data: completed,
			});
		} else {
			return res.status(400).json({
				message: "Access Denied",
			});
		}
	} catch (err) {
		return res.status(404).json({
			message: "an error occurred While Creating task",
		});
	}
};
const UnCompleteTask = async (req: Request, res: Response) => {
	try {
		const getUser = await UserModel.findById(req.params.userID);

		if (getUser) {
			const completed = await TaskModel.findByIdAndUpdate(
				req.params.TaskID,
				{
					status: false,
				},
				{
					new: true,
				},
			);
			return res.status(200).json({
				message: "updated successfully",
				data: completed,
			});
		} else {
			return res.status(400).json({
				message: "Access Denied",
			});
		}
	} catch (err) {
		return res.status(404).json({
			message: "an error occurred While Creating task",
		});
	}
};

export { CreateTask, getTask, CompleteTask, UnCompleteTask };
