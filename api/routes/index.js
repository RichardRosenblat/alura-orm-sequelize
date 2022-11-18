import bodyParser from "body-parser";
import pessoas from './pessoasRoute.js'

export default (app) => {
    app.use(bodyParser.json());
    app.use(pessoas)
    app.get("/", (_req, res) => res.send({ mensagem: "Hello world!" }));
};
