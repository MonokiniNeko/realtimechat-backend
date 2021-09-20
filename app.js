const express = require("express");
const app = express();
const cors = require("cors");
const start = require("./listeners");

app.use(express());

const port = 8000;

app.use(cors());

const server = app.listen(
  port,
  console.log(
    `Server is listening on the port ${(port)} `
  )
);

start(server);