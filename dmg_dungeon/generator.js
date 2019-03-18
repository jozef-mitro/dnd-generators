function getRandomWeighed(array) {
    let weighedArray = [];

    for (let item of array) {
	if (typeof item == "string") {
	    weighedArray.push([item]);
	} else if (item instanceof Array && item.length >= 2) {
	    for (let i = 0; i < item[1]; i++) {
		weighedArray.push(item);
	    }
	}
    }

    let result = weighedArray[Math.floor(Math.random() * weighedArray.length)];

    return result;
}

function writeRandomWeighed(array, outputId) {
    let output = document.getElementById(outputId);
    let paragraph = document.createElement("p");
    paragraph.textContent = getRandomWeighed(array)[0];
    output.insertBefore(paragraph, output.firstChild);
}

function generateDungeonDetails() {
    let output = document.getElementById("details-output");
    output.textContent = "";
    let list = document.createElement("ul");
    let listItem = document.createElement("li")
    // Location
    let dungeonLocation = getRandomWeighed(dungeonLocations)[0];

    if (dungeonLocation == "Roll on the Exotic Location table") {
	dungeonLocation = getRandomWeighed(exoticLocations)[0];
    }

    listItem.textContent = "Location: " + dungeonLocation;
    list.appendChild(listItem);
    // Creator (cults and religious groups, npc alignment, npc class)
    listItem = document.createElement("li");
    let dungeonCreator = getRandomWeighed(dungeonCreators)[0];

    if (dungeonCreator == "Cult or religious group") {
	dungeonCreator = getRandomWeighed(cults)[0];
    } else if (dungeonCreator == "Humans") {
	dungeonCreator = getRandomWeighed(alignments)[0] + " " + getRandomWeighed(classes)[0];
    }

    listItem.textContent = "Creator: " + dungeonCreator;
    list.appendChild(listItem);
    // Purpose
    listItem = document.createElement("li");
    listItem.textContent = "Purpose: " + getRandomWeighed(purposes)[0];
    list.appendChild(listItem);
    // History
    listItem = document.createElement("li");
    listItem.textContent = "History: " + getRandomWeighed(histories)[0];
    list.appendChild(listItem);
    output.appendChild(list); 
}

function generateStartingAreaPlus() {
    let output = document.getElementById("output");
    let div = document.createElement("div");
    let startingArea = getRandomWeighed(startingAreas);
    let paragraph = document.createElement("p");
    paragraph.textContent = startingArea[0];
    div.appendChild(paragraph);
    let list = document.createElement("ul");

    for (let i = 0; i < startingArea[2]; i++) {
	let listItem = document.createElement("li");
	listItem.textContent = getRandomWeighed(doorTypes)[0];
	list.appendChild(listItem);
    }

    div.appendChild(list);
    output.insertBefore(div, output.firstChild);
}

function generatePassagePlus() {
    let output = document.getElementById("output");
    let passage = getRandomWeighed(passages);
    let paragraph = document.createElement("p");
    paragraph.textContent = passage[0];
    
    switch (passage[2]) {
    case "door": {
	paragraph.textContent += ", Door, " + getRandomWeighed(doorTypes)[0];

	break;
    }
    case "passage": {
	paragraph.textContent += ", Sidepassage " + getRandomWeighed(passageWidthsD12)[0] + " wide";

	break;
    }
    case "secret": {
	if (Math.random() < 0.1) {
	    paragraph.textContent += ", Secret door";
	} else {
	    paragraph.textContent += ", No secret door";
	}

	break;
    }
    case "stairs": {
	paragraph.textContent += ", " + getRandomWeighed(stairs)[0];

	break;
    }
    }
    
    output.insertBefore(paragraph, output.firstChild);
}

function generateChamberPlus() {
    let output = document.getElementById("output");
    let div = document.createElement("div");
    let chamber = getRandomWeighed(chambers);
    let paragraph = document.createElement("p");
    paragraph.textContent = chamber[0];
    div.appendChild(paragraph);
    let exits = 0;
    
    // If large room.
    if (chamber[2]) {
	exits = getRandomWeighed(chamberExitsLarge)[0];
    } else {
	exits = getRandomWeighed(chamberExitsNormal)[0];
    }
    
    let list = document.createElement("ul");

    for (let i = 0; i < exits; i++) {
	let listItem = document.createElement("li");
	listItem.textContent = getRandomWeighed(exitLocation)[0];
	let exitType = getRandomWeighed(exitTypes);
	
	// If door.
	if (exitType[2]) {
	    listItem.textContent += ", " + getRandomWeighed(doorTypes)[0];
	} else {
	    listItem.textContent += ", Passage, " + getRandomWeighed(passageWidthsD20)[0];
	}
	
	list.appendChild(listItem);
    }

    div.appendChild(list);
    output.insertBefore(div, output.firstChild);
}