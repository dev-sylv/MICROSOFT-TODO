import {
	CreateTask,
	getTask,
	CompleteTask,
	UnCompleteTask,
} from "../Controller/TaskController";
import express from "express";
const router = express.Router();

router.route("/createTask/:userID").post(CreateTask);
router.route("/completeTask/:userID/:TaskID").patch(CompleteTask);
router.route("/uncompleteTask/:userID/:TaskID").patch(UnCompleteTask);

export default router;
