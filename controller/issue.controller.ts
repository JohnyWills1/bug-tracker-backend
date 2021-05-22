import { Router, Response, Request } from "express";
import { IssueEntity } from "../database/entities/IssueEntity";
import { IssueService } from "../services/issue.service";

export class IssueController {
	public router: Router;
	private issueService: IssueService;

	constructor() {
		this.router = Router();
		this.issueService = new IssueService();
		this.routes();
	}

	public index = async (req: Request, res: Response) => {
		const issues = await this.issueService.index();
		res.send(issues).json();
	};

	public create = async (req: Request, res: Response) => {
		const issue = req["body"] as IssueEntity;
		const newIssue = await this.issueService.create(issue);

		res.send(newIssue);
	};

	public update(req: Request, res: Response) {
		const issue = req["body"] as IssueEntity;
		const id = req["params"]["id"];

		res.send(this.issueService.update(issue, Number(id)));
	}

	public delete(req: Request, res: Response) {
		const id = req["params"]["id"];
		res.send(this.issueService.delete(Number(id)));
	}

	public routes() {
		this.router.get("/", this.index);
		this.router.post("/", this.create);
		this.router.put("/:id", this.update);
		this.router.delete("/:id", this.delete);
	}
}
