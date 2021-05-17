import { BeforeInsert, BeforeUpdate, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { IssuePriority, IssueType } from '../../constants/issues';
import { IssueEntity } from './IssueEntity';

@Entity()
export class ProjectEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar')
    title!: string;

    @Column('boolean')
    starred!: boolean;

    @Column('varchar')
    columnOrder!: string[];

    @Column({ type: 'timestamp' })
    createdAt!: Date;

    @Column({ type: 'timestamp' })
    updatedAt!: Date;

    @OneToMany(
        () => IssueEntity,
        issue => issue.project,
    )
    issues!: IssueEntity[];

    @OneToMany(
        () => User,
        user => user.project,
    )
    users: User[];

    @OneToMany(
        () => Column,
        column => column.id,
    )
    columns!: Column[];
}