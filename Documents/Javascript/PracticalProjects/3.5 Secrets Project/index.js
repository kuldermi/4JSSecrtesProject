//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;
let userInput = "";

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
  console.log(`This is first ${req.body["password"]}`);
  userInput = req.body["password"];
  //   console.log(`${userInput}`);
  next();
}

app.use(passwordCheck);
app.listen(PORT, (req, res) => {
  console.log(`The server is running at `, PORT);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (userInput === "ILoveProgramming") {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});
