import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UserEntity } from "./UserEntity";
import { IssueEntity } from "./IssueEntity";

@Entity()
export class CommentEntity {
	@PrimaryGeneratedColumn("uuid")
	id!: number;

	@Column("text")
	content!: string;

	@Column({ type: "timestamp" })
	createdAt!: Date;

	@Column({ type: "timestamp" })
	updatedAt!: Date;

	@ManyToOne(() => IssueEntity, (issue) => issue.comments, { onDelete: "CASCADE" })
	issue!: IssueEntity;

	@ManyToOne(() => UserEntity, (user) => user.comments)
	user!: UserEntity;
}
