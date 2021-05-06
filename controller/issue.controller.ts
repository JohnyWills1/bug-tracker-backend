import { Router, Response, Request } from 'express';
import { IssueService } from '../services/issue.service';

export class IssueController {
    public router: Router;
    private issueService: IssueService;

    constructor(){
        this.router = Router();
        this.issueService = new IssueService();
        this.routes();
    }

    public index = async (req: Request, res: Response) => {
        const issues = await this.issueService.index();
        res.send(issues).json();
    }

    public create( req: Request, res: Response) {
        res.send(this.issueService.create());
    }

    public update( req: Request, res: Response) {
        res.send(this.issueService.update());
    }

    public delete( req: Request, res: Response) {
        res.send(this.issueService.delete());
    }

    public routes(){
        this.router.get('/', this.index);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}