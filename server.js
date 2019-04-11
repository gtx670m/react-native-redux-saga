const express = require("express");

const app = express();

let movies = [
  { id: 1, name: "Batman", releaseYear: "2001" },
  { id: 2, name: "Spiderman", releaseYear: "2005" },
  { id: 3, name: "Superman", releaseYear: "2011" },
  { id: 4, name: "film 1", releaseYear: "2012" },
  { id: 5, name: "film 2", releaseYear: "2021" },
  { id: 6, name: "film 3", releaseYear: "2013" },
  
];

app.get("/movies", (req, res) => {
  console.log("called");
  return res.send(movies);
});

app.listen(3000, () => console.log("Server started!"));
