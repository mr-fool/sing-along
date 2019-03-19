
const song = `Baby Shark doo doo doo doo doo doo
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

$(document).ready(function() {
  //splitting song
  
  var arr = song.split("\n");
  arr.forEach((line, i) => {
    setTimeout(() => {
      $("#lyrics-list").append("<li>" + line + "</li>");
    }, 1500 * i);
  });
});
