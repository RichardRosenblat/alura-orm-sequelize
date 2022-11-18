import express from "express";
import routes from "./routes/index.js"

const app = express();
const port = 3000;

routes(app)

app.listen(port, () => console.log(`Aplicação iniciada em http://localhost:${port}`));

export default app