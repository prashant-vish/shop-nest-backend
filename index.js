const express = require("express");
const mongoose = require("mongoose");

const server = express();
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");
  console.log("database connected");
}

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

server.listen(8080, () => {
  console.log("Server is running at 8080 port");
});
