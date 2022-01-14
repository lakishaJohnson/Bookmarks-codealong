// DEPENDENCIES
const express = require("express");
const cors = require("cors");
// FILES
const bookmarksController = require("./controllers/bookmarks");

// CREATE THE EXPRESS APP
const app = express();

// FOR EVERY REQUEST, PARSE INCOMING INFO AS JSON, MIDDLEWARE
app.use(express.json());
app.use(cors());
/* 
IN THE MIDDLE OF EVERY REQUEST, CHECK ENDPOINT, IF /BOOKMARKS, IMPORT BOOKMARKS FROM CONTROLLERS AND .USE IT
*/
app.use("/bookmarks", bookmarksController);

// THE HOME ROUTE
app.get("/", (request, response) => {
  console.log("Get request to /");
  response.send("Welcome to Bookmarks App Codealong w/Colin");
});

// ERROR HANDLER * MATCHES ANYTHING NOT MATCHED ALREADY
// app.get("*", (request, response) => {
//     response.status(404).json({error: "Page not found", img:"https://http.cat/400"});
// });

app.get("*", (request, response) => {
  response.status(400).send(`<img src="https://http.cat/400">`);
});

// EXPORT OUR APP FOR SERVER.JS
module.exports = app;

/**
 * let filePath = "./path/to/file.png"
 * app.get("*", (request, response) => {
    response.status(400).send(filepath);
});
 */
