import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ColumnEntity {
	@PrimaryGeneratedColumn("uuid")
	id!: number;

	@Column("varchar")
	title!: string;

	@Column("varchar", { array: true })
	issueIds!: string[];
}
