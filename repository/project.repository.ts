import { EntityRepository, Repository } from "typeorm";
import { ProjectEntity } from "../database/entities/ProjectEntity";

@EntityRepository(ProjectEntity)
export class ProjectRepository extends Repository<ProjectEntity> {}
