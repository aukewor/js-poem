const pTag = document.querySelector("p");
const bodyTag = document.querySelector("body")

// array is defined by []
const phrases = [
	"Scraped off", // 0
	"Branchless, twigless", // 1
	"Ringed, curled", // 2
	"Deformed", // 3
	"Rustling, growing wild" // 4
]

const colors = [
	"mediumspringgreen", // 0
	"thistle", // 1 
	"azure", // 2
	"yellow", // 3
	"lightgreen" // 4
]

let counter  = 0

// addEventListener( ___ , ___ )
// addEventListener( "click" , function(){} )

pTag.addEventListener("click" , function(){
	console.log(counter) // this logs the current counter in the console

	pTag.innerText = phrases[counter];
	bodyTag.style.backgroundColor = colors[counter];

	counter = counter + 1 // this increases the counter by 1 by every click

	// array.length gives the number of items in the array, 
	// in our case, phrases.length is 5
	// but because we count from 0, not 1, we have to do a "-1"
	if (counter > phrases.length - 1) {
		counter = 0
	}
});