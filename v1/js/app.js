const cats = [
	{name: "Xuxa", image: "images/xuxa.jpg"},
	{name: "chewie", image: "images/chewie.jpg"}
];

(function arrayToHtml() {
	const gameFrag = document.createDocumentFragment(),
	catsContainer = document.querySelector('#cats-container');
	for (const cat of cats) {
         //Creates HTML for 16 cards & inserts one of the 16 array strings to each card.
         //Array strings represent CSS classes, which include background images to be matched.
        const newCat = document.createElement('div');
        newCat.className = 'cat-container';
        newCat.innerHTML = `<h2 class="name">${cat.name}</h2>
							<p class="clicks">0</p>
							<img class="cat" src="${cat.image}" alt="${cat.name} the cat">`;
        gameFrag.appendChild(newCat);
    }
    catsContainer.appendChild(gameFrag);
})();

document.getElementById('cats-container').addEventListener('click', function (evt){
	const target = evt.target;

	if (target.classList == 'name') {
		target.parentElement.classList.toggle('show');
	}

	if (target.classList == 'cat') {
		let clicks = target.previousElementSibling.innerHTML;
		target.previousElementSibling.innerHTML = parseInt(++clicks);
	}
});

//const Cat = function(name){
//	this.name = name,
//	this.clicks = 0
//}

//Cat.prototype.clicked = function (e) {
//	document.getElementById(e.previousElementSibling).innerHTML = this.clicks;
//};

//const chewie = new Cat('Chewie');