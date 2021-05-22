import { getConnection } from "typeorm";
import { IssueEntity } from "../database/entities/IssueEntity";
import { IssueRepository } from "../repository/issue.repository";

export class IssueService {
	private issueRepository: IssueRepository;

	constructor() {
		this.issueRepository = getConnection("bug-tracker").getCustomRepository(IssueRepository);
	}

	public index = async () => {
		const issues = await this.issueRepository.find();
		return issues;
	};

	public create = async (issue: IssueEntity) => {
		const newIssue = await this.issueRepository.save(issue);
		return newIssue;
	};

	public update = async (issue: IssueEntity, id: number) => {
		const updatedIssue = await this.issueRepository.update(id, issue);
		return updatedIssue;
	};

	public delete = async (id: number) => {
		const deletedIssue = await this.issueRepository.delete(id);
		return deletedIssue;
	};
}
