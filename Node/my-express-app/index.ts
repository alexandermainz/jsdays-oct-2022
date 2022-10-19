import express from 'express';
import { Response, Request } from 'express';
import { User } from './user';

const app = express();

app.use(express.json);

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

app.get('/users', (request: Request, response: Response): void => {
    response.json(users);
});

app.post('/users', (request: Request, response: Response) => {
    const id = Math.max(...users.map((user) => user.id)) + 1;
    const newUser = { ...request.body, id };
    users.push(newUser);
    response.json(newUser);
});

app.listen(8080, () => console.log('listening to http://localhost:8080'));
