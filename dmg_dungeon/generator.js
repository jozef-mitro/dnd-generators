function generateDungeonDetails() {
	let output = document.getElementById("details-output");
	output.textContent = "";
	let list = document.createElement("ul");
	let listItem = document.createElement("li");
	// Location.
	// Creator.
	// Purpose.
	// History.
	listItem.textContent = "Location: " + dungeonLocation[Math.floor(Math.random() * dungeonLocation.length)];
	list.appendChild(listItem);
	output.appendChild(list); 
}