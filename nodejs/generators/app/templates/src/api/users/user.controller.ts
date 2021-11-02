import { User, UserInput } from './user.interface';
import { UserService } from './user.service';
import { Request, Response } from 'express';

export class UserController {

    constructor(private readonly service: UserService) { }

    // CRUD funksjoner som tar inn requset og response objekter som parameter.

    public getByOid = async (req: Request, res: Response): Promise<Response<User>> => {
        const { oid } = req.params; 
        const result = await this.service.getByOid(oid);
        return res.status(200).json(result);
    }
    
    public getAll = async (req: Request, res: Response): Promise<Response<User>> => {
        const result = await this.service.getAll();
        return res.status(200).json(result);
    }

    public create = async (req: Request, res: Response): Promise<Response<User>> => {
        const body: UserInput = req.body;
        const result = await this.service.createUser(body);

        return res.status(201).json(result);
    }
    
    public delete = async (req: Request, res: Response): Promise<Response<User>> => {
        const { oid } = req.params; 
        await this.service.deleteUser(oid);

        return res.status(200).json({ oid });
    }
}