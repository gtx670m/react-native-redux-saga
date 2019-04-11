const express = require("express");

const app = express();

let movies = [
  { id: 1, name: "Batman", ç: "2001" },
  { id: 2, name: "Spiderman", releaseYear: "2005" },
  { id: 3, name: "Superman", releaseYear: "2008" }
];

app.get("/movies", (req, res) => {
  console.log("called");
  return res.send(movies);
});

app.put("/movies/:id", (req, res) => {
  const { id } = req.params;
  const { name, releaseYear } = req.body;
  console.log(name, releaseYear);
  return res.send(req);
  //   return res.send(movies);
});

app.listen(3000, () => console.log("Server started!"));
