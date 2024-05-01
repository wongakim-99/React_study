const express = require("express");

const app = express();

app.set("port", process.env.PORT || 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello express");
});

app.post("/add", (req, res, next) => {
  console.log(req.body.title);
  console.log(req.body.date);
  next();
});

app.listen(app.get("port"), () => {
  console.log("익스프레스 서버 실행");
});
