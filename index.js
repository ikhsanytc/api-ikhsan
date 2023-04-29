const express = require("express");
const jsonfile = require("jsonfile");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log("ok");
});
// Url Get:

app.get("/", (req, res) => {
  res.status(200).send({
    status: 200,
    data: null,
    message: "Api By IKhsan",
    endpoint: {
      "/": "halaman utama, gak ada apa apaan.",
      "/api": "api jokes text",
      "/api/random": "api jokes random",
    },
  });
});

app.get("/api", (req, res) => {
  jsonfile.readFile("data/data.json", (err, data) => {
    if (err) throw err;
    const jokes = data;
    res.status(200).send({
      status: 200,
      data: jokes,
      message: "Here's all jokes in database",
    });
  });
});

app.get("/api/random", (req, res) => {
  jsonfile.readFile("data/data.json", (err, data) => {
    if (err) throw err;
    const jokes = data;
    const randomJokes = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomJokes];
    res.status(200).send({
      status: 200,
      data: randomJoke,
      message: "Here's The Joke Random",
    });
  });
});
