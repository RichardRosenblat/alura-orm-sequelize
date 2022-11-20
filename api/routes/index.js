import bodyParser from "body-parser";
import pessoas from "./pessoasRoute.js";
import niveis from "./niveisRoute.js";
import turmas from "./turmasRoute.js";

export default (app) => {
    app.use(bodyParser.json(), pessoas, niveis, turmas);
    app.get("/", (_req, res) => res.send({ mensagem: "Hello world!" }));
};
