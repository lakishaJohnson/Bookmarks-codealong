// DEPENDENCY
const express = require("express");
// FILES
const bookmarksArray = require("../models/bookmark");

// ROUTER TO HANDLE SUB ROUTE.. /bookmarks
const bookmarks = express.Router();

// /bookmarks is in app.js GET/SHOWS BOOKMARKS ARRAY
bookmarks.get("/", (request, response) => {
  console.log("Get request to /bookmarks");
  response.json(bookmarksArray);
});
//  GET/SHOWS OBJECT AT INDEX
bookmarks.get("/:index", (request, response) => {
  const { index } = request.params;
  if (bookmarksArray[index]) {
    response.json(bookmarksArray[index]);
  } else {
    response.status(404).json({ error: "Bookmark not found" });
    // response.redirect("/*").status(404);
  }
});
// POSTS/CREATES A NEW OBJECT AND PUSH INTO ARRAY
bookmarks.post("/", (request, response) => {
  console.log("/POST to /bookmarks");
  //   console.log(request.body)
  bookmarksArray.push(request.body);
  response.status(201).json(bookmarksArray);
});
// DELETES ENTIRE OBJECT AT INDEX POSITION
bookmarks.delete("/:index", (request, response) => {
  const { index } = request.params;
  if (bookmarksArray[index]) {
    const deletedBookmark = bookmarksArray.splice(index, 1);
    response.status(200).json(deletedBookmark);
  } else {
    response.status(404).json({ error: "Bookmark not found" });
  }
});
// UPDATES OBJECT BY REPLACING ENTIRE OBJECT AT INDEX POSITION
bookmarks.put("/:index", (request, response) => {
  bookmarksArray[request.params.index] = request.body;
  response.status(200).json(bookmarksArray[request.params.index]);
});

module.exports = bookmarks;
