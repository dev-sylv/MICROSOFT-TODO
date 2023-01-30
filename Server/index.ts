import express, { Application, Request, Response } from "express";
const port: number = 5000;
import "./Config/db";
import cors from "cors";
import user from "./Routes/UserRouter";
import taskRoute from "./Routes/TaskRouter";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.json({
		message: "Welcome to my Api",
	});
});

app.use("/api", user);
app.use("/api/task", taskRoute);

app.listen(port, () => {
	console.log(`lisetning on port ${port}`);
});
