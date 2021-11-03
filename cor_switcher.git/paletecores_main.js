const colors=["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
	let randomNumber = getRandomNumber();
	//get random number between 0 <-> 3
	// colors[x]
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
	console.log(randomNumber);
});

const getRandomNumber = () =>{
	return Math.floor(Math.random() * colors.length);
};
