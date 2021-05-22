import { Router, Response, Request } from "express";
import { ProjectEntity } from "../database/entities/ProjectEntity";
import { ProjectService } from "../services/project.service";

export class ProjectController {
	public router: Router;
	private projectService: ProjectService;

	constructor() {
		this.router = Router();
		this.projectService = new ProjectService();
		this.routes();
	}

	public index = async (req: Request, res: Response) => {
		const projects = await this.projectService.index();
		res.send(projects).json();
	};

	public create = async (req: Request, res: Response) => {
		const project = req["body"] as ProjectEntity;
		const newProject = await this.projectService.create(project);

		res.send(newProject);
	};

	public update(req: Request, res: Response) {
		const project = req["body"] as ProjectEntity;
		const id = req["params"]["id"];

		res.send(this.projectService.update(project, Number(id)));
	}

	public delete(req: Request, res: Response) {
		const id = req["params"]["id"];
		res.send(this.projectService.delete(Number(id)));
	}

	public routes() {
		this.router.get("/", this.index);
		this.router.post("/", this.create);
		this.router.put("/:id", this.update);
		this.router.delete("/:id", this.delete);
	}
}
