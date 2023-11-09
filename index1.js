import express from "express";
import superheroes from "superheroes";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  let name = superheroes.random();
  res.send(`<h1>Behold, I am ${name}!</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


var date1 = new Date("09/01/2023");
var currentDate = new Date();
var date2 = new Date("04/30/2024");

// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();
var leftTime = date2.getTime() - currentDate.getTime();
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
var leftDay = Math.floor(leftTime / (1000 * 3600 * 24));
var leftValue = Math.floor((leftDay / Difference_In_Days) * 446.96);
//To display the final no. of days (result)
console.log("Total number of days is " + Difference_In_Days);
console.log("Total number of left days is " + leftDay);
console.log("Total value of the uPass card is " + leftValue + "$");