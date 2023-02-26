

const path = require("path");



const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is up and running on PORT 3000.");
});




const publicDirPath = path.join(__dirname,"../public");
const stylesDirPath = path.join(__dirname, "../styles");

app.use(express.static(publicDirPath));
app.use(express.static(stylesDirPath)); 

