import { getConnection } from "typeorm";
import { ProjectEntity } from "../database/entities/ProjectEntity";
import { ProjectRepository } from "../repository/project.repository";

export class ProjectService {
	private projectRepository: ProjectRepository;

	constructor() {
		this.projectRepository = getConnection("bug-tracker").getCustomRepository(ProjectRepository);
	}

	public index = async () => {
		const projects = await this.projectRepository.find();
		return projects;
	};

	public create = async (project: ProjectEntity) => {
		const newProject = await this.projectRepository.save(project);
		return newProject;
	};

	public update = async (project: ProjectEntity, id: number) => {
		const updatedProject = await this.projectRepository.update(id, project);
		return updatedProject;
	};

	public delete = async (id: number) => {
		const deletedIssue = await this.projectRepository.delete(id);
		return deletedIssue;
	};
}
