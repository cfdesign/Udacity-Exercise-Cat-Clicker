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
function buttons(catId) {
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
	fetchCat(catId);
};

function fetchCat (catId) {
	const viewFrag = document.createDocumentFragment(),
	viewer = document.createElement('div');
	viewer.id = 'cat-viewer';
	viewer.innerHTML = `<div id="cat-info">
							<div id="cat-name">${cats[catId].name}</div>
							<div id="cat-clicks">${cats[catId].clicks} clicks</div>
						</div>
						<form id="cat-form" style="display: none;">
							Name:<input id="cat-form-name" type="text" name="Name" value="${cats[catId].name}">
							<br>
							Clicks:<input id="cat-form-clicks" type="number" name="clicks" value="${cats[catId].clicks}">
							<br>
							<input type="submit" value="Save">
  							<input type="reset" value="Cancel">
						</form>
						<div><button id="admin">Admin</button></div>
						<img id="${catId}" class="cat-image" src="${cats[catId].image}" alt="This is ${cats[catId].name} the cat">`;
	viewFrag.appendChild(viewer);
	viewCat(viewFrag);
};

function addClicks (catId) {
	++ cats[catId].clicks;
	return buttons(catId);
}

function addInput (catId, name, clicks) {
	cats[catId].clicks = clicks;
	cats[catId].name = name;
	return buttons(catId);
}

//Controller end
//View
function createButtons(buttonsFrag) {
	const catButtons = document.getElementById('cat-buttons');
	catButtons.innerHTML = '';
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

	document.querySelector('.cat-image').addEventListener('click', function (evt){
		addClicks(parseInt(this.id));
	});
	document.getElementById('admin').addEventListener('click', function() {
		const catInfo = document.getElementById('cat-info'),
		catForm = document.getElementById('cat-form');

		if (catForm.style.display === "none") {
			catInfo.style.display = "none";
			catForm.style.display = "block";
			catForm.addEventListener('submit', function(e){
				const catFormName = document.getElementById('cat-form-name').value,
				catFormClicks = document.getElementById('cat-form-clicks').value,
				catId = document.querySelector('.cat-image').id;
				e.preventDefault();
				addInput(parseInt(catId), catFormName, parseInt(catFormClicks));
				//document.getElementById('admin').click();
			});
			catForm.addEventListener('reset', function(e){
				document.getElementById('admin').click();
			});

		} else {
			catInfo.style.display = "block";
			catForm.style.display = "none";
		}
	});
}
buttons(0);
//function showClicks (update) {
//	document.getElementById('cat-clicks').innerHTML = `${update} clicks`;
//	document.getElementById('cat-form-clicks').value = update;

//}
//function changeName (id, name) {
//	document.getElementById(`${id}`).innerHTML = `${name}`;
//	document.getElementById(`${id}`).innerHTML = `${name}`;
//}



//function viewAdmin(adminFrag) {
	//catViewer = document.getElementById('cat-viewer');
	//catViewer.insertBefore(adminFrag, catViewer.childNodes[0])

//}