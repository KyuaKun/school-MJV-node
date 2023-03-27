import cors from "cors";
import express, { Router } from "express";
import routes from "./routers/index";

const app = express();
const router = Router();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 3333;
const link = `http://localhost:${port}`;

app.listen(port, () => {
  console.log(`your application is running on: ${link} <-- CTRL + CLICK`);
});
