import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

app.listen(8000, () => {
  console.log('the api is running at localhost:8000')
});
