function getRandomWeighed(array) {
    let weighedArray = [];

    for (let item of array) {
        if (typeof item == "string") {
            weighedArray.push(item);
        } else if (item instanceof Array && item.length == 2) {
            for (let i = 0; i < item[1]; i++) {
                weighedArray.push(item[0]);
            }
        }
    }

    let result = weighedArray[Math.floor(Math.random() * weighedArray.length)];
    
    return result;
}

function generateDungeonDetails() {
	let output = document.getElementById("details-output");
	output.textContent = "";
	let list = document.createElement("ul");
	let listItem = document.createElement("li")
	// Location
	let dungeonLocation = getRandomWeighed(dungeonLocations);
	
	if (location == "Roll on the Exotic Location table") {
		dungeonLocation = getRandomWeighed(exoticLocations);
	}
	
	listItem.textContent = "Location: " + dungeonLocation;
	list.appendChild(listItem);
	// Creator (cults and religious groups, npc alignment, npc class)
	
	// Purpose
	// History
	output.appendChild(list); 
}