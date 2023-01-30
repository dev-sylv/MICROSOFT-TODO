import mongoose from "mongoose";

const urlOffline: string = "mongodb://localhost/microTodoDB";

mongoose
	.connect(urlOffline)
	.then(() => {
		console.log("database is connected...!");
	})
	.catch(() => {
		console.log("failed to connect to database");
	});
