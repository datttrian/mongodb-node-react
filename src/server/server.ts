import express from "express";

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
  res.render("index", {
    content: "EJS is <em>cool</em>!",
  });
});

const port = 8080;
server.listen(port, "0.0.0.0", () => {
  console.info(`Express server listening on port ${port}`);
});
