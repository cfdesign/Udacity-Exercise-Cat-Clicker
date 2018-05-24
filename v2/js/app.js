const cats = [
	{name: "Xuxa", image: "images/xuxa.jpg", clicks: 0},
	{name: "Amelia", image: "images/amelia.jpg", clicks: 0},
	{name: "Daisy", image: "images/daisy.jpg", clicks: 0},
	{name: "Murphy", image: "images/murphy.jpg", clicks: 0},
	{name: "Phoebe", image: "images/phoebe.jpg", clicks: 0},
	{name: "Switch", image: "images/switch.jpg", clicks: 0},
	{name: "Whiskers", image: "images/whiskers.jpg", clicks: 0},
	{name: "Athena", image: "images/athena.jpg", clicks: 0}
];
///Model end
//Controller
(function buttons() {
	const buttonsFrag = document.createDocumentFragment();
	let index = 0;
	for (const cat of cats) {
        const newCatButton = document.createElement('button');
        newCatButton.id = index;
        newCatButton.innerHTML = `${cat.name}`;
		buttonsFrag.appendChild(newCatButton);
		++ index
	}
	createButtons(buttonsFrag);
	fetchCat(0);
}());

function fetchCat (buttonNumber) {
	const viewFrag = document.createDocumentFragment(),
	viewer = document.createElement('div');
	viewer.id = 'cat-viewer';
	viewer.innerHTML = `<div id="cat-name">${cats[buttonNumber].name}</div>
						<div id="cat-clicks">${cats[buttonNumber].clicks} clicks</div>
						<img id="${buttonNumber}" src="${cats[buttonNumber].image}" alt="This is ${cats[buttonNumber].name} the cat">`;
	viewFrag.appendChild(viewer);
	viewCat(viewFrag);
};

function addClicks (number) {
	++ cats[number].clicks;
	showClicks(cats[number].clicks);
}
//Controller end
//View
function createButtons(buttonsFrag) {
	const catButtons = document.getElementById('cat-buttons');

	catButtons.appendChild(buttonsFrag);
	catButtons.addEventListener('click', function (evt){
		const target = evt.target;

		if (target.tagName == 'BUTTON') {
			fetchCat(parseInt(target.id));
		}
	});
}

function viewCat(viewFrag) {
	const catsContainer = document.getElementById('cats-container'),
	catViewer = document.getElementById('cat-viewer');

	if (catViewer) {
		catsContainer.removeChild(catViewer);
	}
	catsContainer.appendChild(viewFrag);
	document.getElementById('cat-viewer').children[2].addEventListener('click', function (evt){
		addClicks(parseInt(this.id));
	});
}

function showClicks (update) {
	document.getElementById('cat-viewer').children[1].innerHTML = `${update} clicks`;
}
