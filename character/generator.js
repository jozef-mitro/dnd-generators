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

class Ability {
    constructor(name) {
	this.name = name;
	
	this.bonus = 6;
	
	for (let i = 0; i < 3; i++) {
	    let roll = Math.floor(Math.random() * 6) + 1;

	    if (roll < this.bonus) {
		this.bonus = roll;
	    }
	}
	
	this.defense = 10 + this.bonus;
    }
    
    toString() {
	return this.name + ": " + this.defense + " (+" + this.bonus + ")";
    }
}

function generateKnave() {
    let output = document.getElementById("output");
    output.innerHTML = "";
    
    let ability = {
	str: new Ability("Strength"),
	dex: new Ability("Dexterity"),
	con: new Ability("Constitution"),
	int: new Ability("Intelligence"),
	wis: new Ability("Wisdom"),
	cha: new Ability("Charisma")
    }
    
    // Strength
    let paragraph = document.createElement("p");
    paragraph.textContent = ability.str.toString();
    output.appendChild(paragraph);
    // Dexterity
    paragraph = document.createElement("p");
    paragraph.textContent = ability.dex.toString();
    output.appendChild(paragraph);
    // Constitution
    paragraph = document.createElement("p");
    paragraph.textContent = ability.con.toString();
    output.appendChild(paragraph);
    // Intelligence
    paragraph = document.createElement("p");
    paragraph.textContent = ability.int.toString();
    output.appendChild(paragraph);
    // Wisdom
    paragraph = document.createElement("p");
    paragraph.textContent = ability.wis.toString();
    output.appendChild(paragraph);
    // Charisma
    paragraph = document.createElement("p");
    paragraph.textContent = ability.cha.toString();
    output.appendChild(paragraph);
    // Line
    paragraph = document.createElement("p");
    paragraph.textContent = "---------------"
    output.appendChild(paragraph);
    // HP
    paragraph = document.createElement("p");
    let hp = Math.floor(Math.random() * 8) + 1;
    paragraph.textContent = "Hit Points: " + hp;
    output.appendChild(paragraph);
    // Inventory Slots
    paragraph = document.createElement("p");
    paragraph.textContent = "Inventory Slots: " + ability.con.defense;
    output.appendChild(paragraph);
    // Line
    paragraph = document.createElement("p");
    paragraph.textContent = "---------------"
    output.appendChild(paragraph);
    // Inventory
    paragraph = document.createElement("p");
    paragraph.textContent = "Gear:"
    output.appendChild(paragraph);
    let list = document.createElement("ul");
    let listItem = document.createElement("li");
    listItem.textContent = "Travel rations (1 day)";
    list.appendChild(listItem);
    listItem = document.createElement("li");
    listItem.textContent = "Travel rations (1 day)";
    list.appendChild(listItem);
    listItem = document.createElement("li");
    listItem.textContent = "[Weapon of your choice]";
    list.appendChild(listItem);
    // Armor
    listItem = document.createElement("li");
    let rolledArmor = getRandomWeighed(armor);
    
    if (rolledArmor != "No armor") {
	listItem.textContent = rolledArmor;
	list.appendChild(listItem);
    }
    // Helmets and Shields
    listItem = document.createElement("li");
    let helmetAndShield = getRandomWeighed(helmetsAndShields);
    
    if (helmetAndShield != "None") {
	listItem.textContent = helmetAndShield;
	list.appendChild(listItem);
    }
    // Dungeoneering Gear
    listItem = document.createElement("li");
    listItem.textContent = getRandomWeighed(dungeoneeringGear);
    list.appendChild(listItem);
    listItem = document.createElement("li");
    listItem.textContent = getRandomWeighed(dungeoneeringGear);
    list.appendChild(listItem);
    // General Gear
    listItem = document.createElement("li");
    listItem.textContent = getRandomWeighed(generalGear1);
    list.appendChild(listItem);
    listItem = document.createElement("li");
    listItem.textContent = getRandomWeighed(generalGear2);
    list.appendChild(listItem);
    output.appendChild(list);
    // Line
    paragraph = document.createElement("p");
    paragraph.textContent = "---------------"
    output.appendChild(paragraph);
    // Traits
}