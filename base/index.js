import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const port = process.env.PORT || 4000;
const app = express();

app.use("/", express.static("public"));

app.listen(port, () => {
    console.log("App listening to port" + port)
});
