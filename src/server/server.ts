import express from "express";
import config from "./config";

const server = express();

// middleware
server.use(express.static("dist"));

server.set("view engine", "ejs");

// Variables can be passed via res.render 2nd parameter. It will be used to injecr React into HTML template
server.use("/", (req, res) => {
    res.render("index", {
      initialContent: 'Loading...'
    })
})

server.listen(config.PORT, config.HOST, () => {
  console.info(`Server is listening at ${config.SERVER_URL}`);
});
