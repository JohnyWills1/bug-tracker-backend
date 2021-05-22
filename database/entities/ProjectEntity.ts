import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IssueEntity } from "./IssueEntity";
import { ColumnEntity } from "./ColumnEntity";
import { UserEntity } from "./UserEntity";

@Entity()
export class ProjectEntity {
	@PrimaryGeneratedColumn("uuid")
	id!: number;

	@Column("varchar")
	title!: string;

	@Column("boolean")
	starred!: boolean;

	@Column("varchar", { array: true })
	columnOrder!: string[];

	@Column({ type: "timestamp" })
	createdAt!: Date;

	@Column({ type: "timestamp" })
	updatedAt!: Date;

	@OneToMany(() => IssueEntity, (issue) => issue.project)
	issues!: IssueEntity[];

	@OneToMany(() => UserEntity, (user) => user.project)
	users!: UserEntity[];

	@OneToMany(() => ColumnEntity, (column) => column.id)
	columns!: ColumnEntity[];
}
