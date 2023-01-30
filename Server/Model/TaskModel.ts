import mongoose from "mongoose";
import { taskData2 } from "../AllInterface";

interface NewTask extends taskData2, mongoose.Document {}

const TaskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
		},
		date: {
			type: String,
		},
		remainder: {
			type: String,
		},
		note: {
			type: String,
		},
		status: {
			type: Boolean,
		},

		// day: {
		// 	type: mongoose.Schema.Types.ObjectId,
		// 	ref: "users",
		// },
	},
	{ timestamps: true },
);

export default mongoose.model<NewTask>("tasks", TaskSchema);
