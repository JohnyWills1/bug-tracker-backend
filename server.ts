import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import { IssueController } from "./controller/issue.controller";
import { ProjectController } from "./controller/project.controller";

require("dotenv").config();

class Server {
	private issueController!: IssueController;
	private projectController!: ProjectController;
	private app: express.Application;

	constructor() {
		this.app = express(); //init the application
		this.configuration();
		this.routes();
	}

	public configuration() {
		this.app.set("port", process.env.PORT || 8000);
		this.app.use(express.json());
	}

	public async routes() {
		await createConnection({
			name: "bug-tracker",
			type: "postgres",
			host: process.env.POSTGRES_HOST,
			port: 5432,
			username: process.env.POSTGRES_USERNAME,
			password: process.env.POSTGRES_PASSWORD,
			database: "postgres",
			entities: ["./database/entities/*.ts"],
			synchronize: true,
		});

		this.issueController = new IssueController();
		this.projectController = new ProjectController();

		this.app.get("/", (req: Request, res: Response) => {
			res.send("Hello World");
		});

		this.app.use(`/api/issues/`, this.issueController.router);
		this.app.use(`/api/projects/`, this.projectController.router);
	}

	public start() {
		this.app.listen(this.app.get("port"), () => {
			console.log(`Server is listening on ${this.app.get("port")} port.`);
		});
	}
}

const server = new Server();
server.start();
