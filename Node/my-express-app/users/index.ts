import { Router } from 'express';
import { Response, Request } from 'express';
import { User } from './user';

const usersRouter = Router();

let users: User[] = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe'
    }
];

usersRouter.get('/', (request: Request, response: Response): void => {
    response.json(users);
});

usersRouter.post('/', (request: Request, response: Response) => {
    const id = Math.max(...users.map((user) => user.id)) + 1;
    const newUser = { ...request.body, id };
    users.push(newUser);
    response.json(newUser);
});

export default usersRouter;