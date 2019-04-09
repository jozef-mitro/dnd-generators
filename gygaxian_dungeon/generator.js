function generateDungeonDetails() {
	let output = document.getElementById("details-output");
	output.textContent = "";
	let list = document.createElement("ul");
	
	for (column of dungeonDetailsData) {
		let listItem = document.createElement("li");
		listItem.textContent = column[0] + ": " + column[1][Math.floor(Math.random() * column[1].length)];
		list.appendChild(listItem);
	}
	
	output.appendChild(list); 
}

function generateRoom() {
	let typeData = data[Math.floor(Math.random() * data.length)];
	let exits = 0;
	let output = document.getElementById("room-output");
	let div = document.createElement("div");
	let paragraph = document.createElement("p");
	paragraph.textContent = typeData[0];
	div.appendChild(paragraph);
	let list = document.createElement("ul");
	
	for (let i = 1; i < typeData.length; i++) {
		let column = typeData[i];
		let listItem = document.createElement("li");
		let index = Math.floor(Math.random() * column[1].length);
		
		if ((index + 1) % 2) {
			exits++;
		}
		listItem.textContent = column[0] + ": " + column[1][index];
		list.appendChild(listItem);
	}
	
	let listItem = document.createElement("li");
	
	if (exits == 0) {
		listItem.textContent = "No additional exits";
	} else if (exits == 1) {
		listItem.textContent = "1 additional exit";
	} else {
		listItem.textContent = exits + " additional exits";
	}
	
	list.appendChild(listItem);
	div.appendChild(list);
	output.insertBefore(div, output.firstChild);
}

function clearOutput() {
	let output = document.getElementById("room-output");
	output.textContent = "";
}