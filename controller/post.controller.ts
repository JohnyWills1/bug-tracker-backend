import { Router, Response, Request } from 'express';

export class PostController {
    public router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public index = async (req: Request, res: Response) => {
        res.send('Index');
    }

    public create( req: Request, res: Response) {
        res.send('create');
    }

    public update( req: Request, res: Response) {
        res.send('update');
    }

    public delete( req: Request, res: Response) {
        res.send('delete');
    }

    public routes(){
        this.router.get('/', this.index);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}