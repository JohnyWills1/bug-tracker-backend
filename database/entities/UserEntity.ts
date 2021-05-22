import {
	BaseEntity,
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	ManyToMany,
	ManyToOne,
	RelationId,
} from "typeorm";

import { CommentEntity } from "./CommentEntity";
import { IssueEntity } from "./IssueEntity";
import { ProjectEntity } from "./ProjectEntity";

@Entity()
export class UserEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("varchar")
	name!: string;

	@Column("varchar")
	email!: string;

	@Column("varchar", { length: 2000 })
	avatarUrl!: string;

	@CreateDateColumn({ type: "timestamp" })
	createdAt!: Date;

	@UpdateDateColumn({ type: "timestamp" })
	updatedAt!: Date;

	@OneToMany(() => CommentEntity, (comment) => comment.user)
	comments!: Comment[];

	@ManyToMany(() => IssueEntity, (issue) => issue.users)
	issues!: IssueEntity[];

	@ManyToOne(() => ProjectEntity, (project) => project.users)
	project!: ProjectEntity;

	@RelationId((user: UserEntity) => user.project)
	projectId!: number;
}
