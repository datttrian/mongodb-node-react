import express from "express";
import os from "os";

import { HOST, PORT, SERVER_URL } from "./config";
const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
  res.render("index", {
    content: "EJS is <em>cool</em>!",
  });
});

server.listen(PORT, HOST, () => {
  console.info(
    `Express server listening on port ${SERVER_URL}`,
    `Free Mem: ${os.freemem() / 1024 / 1024}`,
  );
});
