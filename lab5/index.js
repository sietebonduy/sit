import express from "express";
import bodyParser from "body-parser";

import studentsRoutes from "./routes/students.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/students", studentsRoutes);
app.get("/", (req, res) => res.send("Сервер подключен"));
app.all("*", (req, res) => res.send("Такой ссылки нет"));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));