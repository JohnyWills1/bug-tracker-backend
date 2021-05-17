import { EntityRepository, Repository } from 'typeorm';
import { IssueEntity } from '../database/entities/IssueEntity';

@EntityRepository(IssueEntity)
export class IssueRepository extends Repository<IssueEntity> {
     
}