import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IssuesEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    content!: string;
}