import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/teste", (_req, res) => res.status(200).send({ mensagem: "Hello world!" }));

app.listen(port, () => console.log(`Aplicação iniciada em http://localhost:${port}`));
