import cors from "cors";
import express from "express";
import routes from "./routers/index";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 8080;
const link = `http://localhost:${port}`;

app.listen(port, () => {
  console.log(`your application is running on: ${link} <-- CTRL + CLICK`);
});
