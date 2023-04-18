import cors from "cors";
import express from "express";
import routes from "./routers/index";
import connection from "./config/database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 8080;
const link = `http://localhost:${port}`;

connection
  .then(() => {
    console.log("db conectado");
    app.listen(port, () => {
      console.log(`your application is running on: ${link} <-- CTRL + CLICK`);
    });
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`your application is running on: ${link} <-- CTRL + CLICK`);
});
