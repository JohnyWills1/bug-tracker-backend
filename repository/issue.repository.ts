import { EntityRepository, Repository } from 'typeorm';
import { IssuesEntity } from '../database/entities/IssuesEntity';

@EntityRepository(IssuesEntity)
export class IssueRepository extends Repository<IssuesEntity> {
     
}