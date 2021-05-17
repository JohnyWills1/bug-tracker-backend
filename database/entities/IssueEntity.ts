import { BeforeInsert, BeforeUpdate, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { IssuePriority, IssueType } from '../../constants/issues';

@Entity()
export class IssueEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar')
    title!: string;

    @Column('varchar')
    type!: IssueType;

    @Column('varchar')
    status!: string;

    // Make issue priority enum type of
    // Lowest, Low, Medium, High, Highest
    @Column('varchar')
    priority!: IssuePriority;

    @Column('text', { nullable:true })
    description!: string | null;

    @Column('integer', { nullable: true })
    timeEstimate!: number | null;

    @Column('integer', { nullable: true })
    timeSpent!: number | null;

    @Column('integer', { nullable: true })
    timeRemaining!: number | null;

    @Column({ type: 'timestamp' })
    createdAt!: Date;

    @Column({ type: 'timestamp' })
    updatedAt!: Date;

    @Column('integer')
    reporterId!: number;

    @ManyToOne(
        () => Project,
        project => project.issues,
    )
    project: Project;

    @Column('integer')
    projectId!: number;

    @OneToMany(
        () => Comment,
        comment => comment.issue,
    )
    comments!: Comment[];

    @ManyToMany(
        () => userInfo,
        user => user.issues,
    )
    @JoinTable()
    users!: User[];

    @RelationId((issue: IssueEntity) => issue.users)
    userIds!: number[];

    // @BeforeInsert()
    // @BeforeUpdate()
    // setDescriptionText = (): void => {
    //     if(this.description) {
    //         this.descriptionText = striptags(this.description)
    //     }
    // }
}