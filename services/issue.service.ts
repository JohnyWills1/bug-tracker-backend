import { getConnection } from 'typeorm';
import { IssueRepository } from '../repository/issue.repository';


export class IssueService {
    private issueRepository: IssueRepository;

    constructor(){
        this.issueRepository = getConnection('bug-tracker').getCustomRepository(IssueRepository);
    }

    public index = async () => {
        const issues = await this.issueRepository.find();
        return issues;
    }

    public create = () => {
        return 'Create From Service';
    }

    public update = () => {
        return 'Update From Service';
    }

    public delete = () => {
        return 'Delete From Service';
    }
}