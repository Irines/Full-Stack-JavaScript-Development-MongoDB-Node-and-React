import express from "express";
import config from "./config";
import apiRouter from "./api-router";
import serverRender from "./render";
const server = express();

// middleware
server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/api", apiRouter);

// Variables can be passed via res.render 2nd parameter. It will be used to injecr React into HTML template
server.get(["/", "/contest/:contestId"], async (req, res) => {
  const { initialMarkup, initialData } = await serverRender(req);
  res.render("index", {
    initialMarkup,
    initialData
  });
});

server.listen(config.PORT, config.HOST, () => {
  console.info(`Server is listening at ${config.SERVER_URL}`);
});
