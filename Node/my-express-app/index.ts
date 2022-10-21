import express from 'express';
import { Response, Request } from 'express';
import usersRouter from './users';

const app = express();

app.use(express.json);  // Middleware, "hängt" zwischen dem eingehenden Request und der Response

//app.use('/users', usersRouter);

app.listen(3001, () => console.log('listening to http://localhost:3001'));

app.get('/', (request: Request, response: Response): any => {
    console.log("GET /");
    response.json({"message":"It works!"});
});