let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
let title = document.getElementById("main-title")
title.textContent="WEB SITE"

  // Part 2
let body = document.querySelector("body")
body.style.backgroundColor="rgb(222, 108, 108)"

  // Part 3

let favThings = document.getElementById("favorite-things")
favThings.removeChild(favThings.lastElementChild)
console.log(favThings)

  // Part 4

let specialTitle= document.getElementsByClassName("special-title")
for (let i of specialTitle){
  i.style.fontSize="2rem"
}

  // Part 5

let pastRaces = document.getElementById("past-races")
pastRaces.removeChild(pastRaces.getElementsByTagName("li")[3])
console.log(pastRaces)

  // Part 6
let aTag =document.createElement("li")
pastRaces.appendChild(aTag)
aTag.textContent="New York"
console.log(pastRaces)

  // Part 7

let newDiv =document.createElement("div")
newDiv.classList.add("blog-post")
body.appendChild(newDiv)
let h2 = document.createElement("h2")
let p= document.createElement("p")
newDiv.appendChild(h2)
newDiv.appendChild(p)
h2.textContent="NewYork"
p.textContent="I DRIFTED MY CAR AROUND A PARKING GARAGE!"
let mainDiv =document.getElementsByClassName("main")[0]
// mainDiv.insertBefore(newDiv, document.getElementsByClassName("special-title"));
let afterThisElement=document.getElementsByClassName("special-title")[1].nextSibling
mainDiv.insertBefore(newDiv, afterThisElement.nextSibling)
console.log(mainDiv)

  // Part 8

const quoteTitle=this.querySelector("#quote-title")
quoteTitle.addEventListener("click",randomQuote())

  // Part 9

let blogPost = document.querySelectorAll(".blog-post")
for (i of blogPost){
  i.addEventListener("mouseout",e =>{
    e.target.classList.toggle("purple")
  })
  i.addEventListener("mouseenter",e =>{
    e.target.classList.toggle("red")
  })
}

});
