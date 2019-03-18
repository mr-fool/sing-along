//import "./styles.css";
const listEl = document.getElementById("lyrics-list");
const  song = `Baby Shark doo doo doo doo doo doo
Baby Shark doo doo doo doo doo doo
Baby Shark doo doo doo doo doo doo
Baby Shark!
Daddy Shark doo doo doo doo doo doo
Daddy Shark doo doo doo doo doo doo
Daddy Shark doo doo doo doo doo doo
Daddy Shark!
Mommy Shark doo doo doo doo doo doo
Mommy Shark doo doo doo doo doo doo
Mommy Shark doo doo doo doo doo doo
Mommy Shark!
Grandpa Shark doo doo doo doo doo doo
Grandpa Shark doo doo doo doo doo doo
Grandpa Shark doo doo doo doo doo doo
Grandpa Shark!
Grandma Shark doo doo doo doo doo doo
Grandma Shark doo doo doo doo doo doo
Grandma Shark doo doo doo doo doo doo
Grandma Shark!`;



const lyrics = song.split("\n");

//Testing the split
console.log(lyrics);
const delay = 1500;
let lineCount = 0;

const printLyric = () => {
  let listItem = document.createElement("li");
  listItem.innerHTML = lyrics[lineCount];
  listEl.appendChild(listItem);

  lineCount++;

  if (lineCount >= lyrics.length) {
    clearInterval(interval);
  }
};

let interval = setInterval(printLyric, delay);