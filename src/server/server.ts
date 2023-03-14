import express from "express";

const server = express();

// middleware
server.use(express.static("dist"));

server.set("view engine", "ejs");

// Variables can be passed via res.render 2nd parameter. It will be used to injecr React into HTML template
server.use("/", (req, res) => {
    res.render("index", {
        content: 'EJS is cool'
    })
})

server.listen("8080", "localhost", () => {
  console.info("Server is listening at http://localhost:8080");
});
