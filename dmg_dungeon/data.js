var dungeonLocations =
    [
	[ "A building in a city", 4 ],
	[ "Catacombs or sewers beneath a city", 4 ],
	[ "Beneath a farmhouse", 4 ],
	[ "Beneath a graveyard", 4 ],
	[ "Beneath a ruined castle", 6 ],
	[ "Beneath a ruined city", 4 ],
	[ "Beneath a temple", 4 ],
	[ "In a chasm", 4 ],
	[ "In a cliff face", 4 ],
	[ "In a desert", 4 ],
	[ "In a forest", 4 ],
	[ "In a glacier", 4 ],
	[ "In a gorge", 4 ],
	[ "In a jungle", 4 ],
	[ "In a mountain pass", 4 ],
	[ "In a swamp", 4 ],
	[ "Beneath or on top of a mesa", 4 ],
	[ "In sea caves", 4 ],
	[ "In several connected mesas", 4 ],
	[ "On a mountain peak", 4 ],
	[ "On a promontory", 4 ],
	[ "On an island", 4 ],
	[ "Underwater", 5 ],
	[ "Roll on the Exotic Location table", 5 ] ];

var exoticLocations =
    [
	"Among the branches of a tree",
	"Around a geyser",
	"Behind a waterfall",
	"Buried in an avalanche",
	"Buried in a sandstorm",
	"Buried in volcanic ash",
	"Castle or structure sunken in a swamp",
	"Castle or structure at the bottom of a sinkhole",
	"Floating on the sea",
	"In a meteorite",
	"On a demiplane or in a pocket dimension",
	"In an area devastated by a magical catastrophe",
	"On a cloud",
	"In the Feywild",
	"In the Shadowfell",
	"On an island in an underground sea",
	"In a volcano",
	"On the back of a Gargantuan living creature",
	"Sealed inside a magical dome of force",
	"Inside a Mordenkainen's magnificent mansion" ];

var dungeonCreators =
    [ "Beholder",
	[ "Cult or religious group", 3 ],
	[ "Dwarves", 4 ], "Elves (including drow)", "Giants",
	[ "Humans", 4 ], "Kuo-toa", "Lich", "Mind flayers", "Yuan-ti", "No creator (natural caverns)" ];

var cults =
    [ "Demon-worshiping cult", "Devil-worshiping cult",
	[ "Elemental Air cult", 2 ],
	[ "Elemental Earth cult", 2 ],
	[ "Elemental Fire cult", 2 ],
	[ "Elemental Water cult", 2 ],
	[ "Worshipers of an evil deity", 5 ],
	[ "Worshipers of a good deity", 2 ],
	[ "Worshipers of a neutral deity", 3 ] ];

var alignments =
    [
	[ "Lawful good", 2 ],
	[ "Neutral good", 2 ],
	[ "Chaotic good", 2 ],
	[ "Lawful neutral", 3 ],
	[ "Neutral", 2 ], "Chaotic neutral",
	[ "Lawful evil", 3 ],
	[ "Neutral evil", 3 ],
	[ "Chaotic evil", 2 ] ];

var classes =
    [ "Barbarian", "Bard",
	[ "Cleric", 2 ], "Druid",
	[ "Fighter", 2 ], "Monk", "Paladin", "Ranger",
	[ "Rogue", 4 ], "Sorcerer", "Warlock",
	[ "Wizard", 4 ] ];

var purposes =
    [ "Death trap",
	[ "Lair", 4 ], "Maze",
	[ "Mine", 3 ], "Planar gate",
	[ "Stronghold", 4 ],
	[ "Temple or shrine", 3 ],
	[ "Tomb", 2 ], "Treasure vault" ];

var histories =
    [
	[ "Abandoned by creators", 3 ],
	"Abandoned due to plague",
	[ "Conquered by invaders", 4 ],
	[ "Creators destroyed by attacking raiders", 2 ],
	"Creators destroyed by discovery made within the site",
	"Creators destroyed by internal conflict",
	"Creators destroyed by magical catastrophe",
	[ "Creators destroyed by natural disaster", 2 ],
	"Location cursed by the gods and shunned",
	[ "Original creator still in control", 2 ],
	"Overrun by planar creatures",
	"Site of a great miracle" ];

var startingAreas =
    [
	"Square, 20 x 20 ft.; passage on each wall",
	[ "Square, 20 x 20 ft.; door on two walls, passage in third wall", 1, 2 ],
	[ "Square, 40 x 40 ft.; doors on three walls", 1, 3 ],
	[ "Rectangle, 80 x 20 ft., with row of pillars down the middle; two passages leading from each long wall, doors on each short wall", 1, 2 ],
	"Rectangle, 20 x 40 ft.; passage on each wall",
	"Circle, 40 ft. diameter; one passage at each cardinal direction",
	"Circle, 40 ft. diameter; one passage in each cardinal direction; well in middle of room (might lead down to lower level)",
	[ "Square, 20 x 20 ft.; door on two walls , passage on third wall, secret door on fourth wall", 1, 2 ],
	"Passage, 10 ft. wide; T intersection",
	"Passage, 10 ft. wide; four-way intersection" ];

var passages =
    [
	[ "Continue straight 30ft., no doors or side passages", 2, "nothing" ],
	[ "Continue straight 20ft., door to the right, then an additional 10 ft. ahead", 1, "door" ],
	[ "Continue straight 20ft., door to the left, then an additional 10 ft. ahead", 1, "door" ],
	[ "Continue straight 20ft.; passage ends in a door", 1, "door" ],
	[ "Continue straight 20ft., side passage to the right, then an additional 10 ft. ahead", 2, "passage" ],
	[ "Continue straight 20ft., side passage to the left, then an additional 1O ft. ahead", 2, "passage" ],
	[ "Continue straight 20ft., comes to a dead end; 10 percent chance of a secret door", 1, "secret" ],
	[ "Continue straight 20ft., then the passage turns left and continues 10 ft.", 2, "nothing" ],
	[ "Continue straight 20ft., then the passage turns right and continues 10 ft.", 2, "nothing" ],
	[ "Chamber (roll on the Chamber table)", 5, "nothing" ],
	[ "Stairs* (roll on the Stairs table)", 1, "stairs" ] ];

var passageWidthsD12 =
    [
	[ "5 ft.", 2 ],
	[ "10 ft.", 10 ] ];

var passageWidthsD20 =
    [
	[ "5 ft.", 2 ],
	[ "10 ft.", 10 ],
	[ "20 ft.", 2 ],
	[ "30 ft.", 2 ],
	"40ft., with row of pillars down the middle",
	"40ft., with double row of pillars",
	"40ft. wide, 20ft. high",
	"40ft. wide, 20ft. high, gallery 10ft. above floor allows access to level above" ];

var doorTypes =
    [
	[ "Wooden", 10 ],
	[ "Wooden, barred or locked", 2 ],
	"Stone",
	"Stone, barred or locked",
	"Iron",
	"Iron, barred or locked",
	"Portcullis",
	"Portcullis, locked in place",
	"Secret door",
	"Secret door, barred or locked" ];

var beyondDoor =
    [
	[ "Passage extending 10ft., then T intersection extending 10ft. to the right and left", 2 ],
	[ "Passage 20 ft . straight ahead", 6 ],
	[ "Chamber (roll on the Chamber table)", 10 ], "Stairs (roll on the Stairs table)", "False door with trap" ];

var chambers =
    [
	[ "Square, 20 x 20ft., normal", 2, false ],
	[ "Square, 30 x 30ft., normal", 2, false ],
	[ "Square, 40 x 40ft., normal", 2, false ],
	[ "Rectangle, 20 x 30 ft, normal", 2, false ],
	[ "Rectangle, 30 x 40 ft, normal", 2, false ],
	[ "Rectangle, 40 x 50 ft, large", 2 ],
	[ "Rectangle, 50 x 80 ft, large", 1, true ],
	[ "Circle, 30ft. diameter, normal", 1, false ],
	[ "Circle, 50 ft. diameter, large", 1, true ],
	[ "Octagon, 40 x 40 ft, large", 1, true ],
	[ "Octagon, 60 x 60 ft, large", 1, true ],
	[ "Trapezoid , roughly 40 x 60 ft, large", 1, true ] ];

var chamberExitsNormal =
    [
	[ 0, 5 ],
	[ 1, 6 ],
	[ 2, 4 ],
	[ 3, 3 ],
	[ 4, 2 ] ];

var chamberExitsLarge =
    [
	[ 0, 3 ],
	[ 1, 5 ],
	[ 2, 5 ],
	[ 3, 4 ],
	[ 4, 1 ],
	[ 5, 1 ],
	[ 6, 1 ] ];

var exitLocation =
    [
	[ "Wall opposite entrance", 7 ],
	[ "Wall left of entrance", 5 ],
	[ "Wall right of entrance", 5 ],
	[ "Same wall as entrance", 3 ] ];

var exitTypes =
    [
	[ "Door (roll on the Door Type table)", 1, true ],
	[ "Corridor, 10ft. long" , 1, false] ];

var stairs =
    [
	[ "Down one level to a chamber", 4 ],
	[ "Down one level to a passage 20ft. long", 4 ],
	"Down two levels to a chamber",
	"Down two levels to a passage 20ft. long",
	"Down three levels to a chamber",
	"Down three levels to a passage 20ft. long",
	"Up one level to a chamber",
	"Up one level to a passage 20ft. long",
	"Up to a dead end",
	"Down to a dead end",
	"Chimney up one level to a passage 20ft. long",
	"Chimney up two levels to a passage 20ft. long",
	"Shaft (with or without elevator) down one level to a chamber",
	"Shaft (with or without elevator) up one level to a chamber and down one level to a chamber" ];

var chamberPurposes = {
    deathTrap: [
	"Antechamber or waiting room for spectators",
	["Guardroom fort ified against intruders", 7],
	["Vault for holding important treasures, accessible only by locked or secret door (75 percent chance of being trapped)", 3],
	["Room containing a puzzle that must be solved to bypass a trap or monster", 3],
	["Trap designed to kill or capture creatures", 5],
	"Observation room, allowing guards or spectators to observe creatures moving through the dungeon
	],
	lair: [
	    "Armory stocked with weapons and armor",
	    "Audience chamber, used to receive guests",
	    "Banquet room for important celebrations",
	    "Barracks where the lair's defenders are quartered",
	    "Bedroom, for use by leaders",
	    "Chapel where the lair's inhabitants worship",
	    "Cistern or well for drinking water",
	    ["Guardroom for the defense of the lair", 2],
	    "Kennel for pets or guard beasts",
	    "Kitchen for food storage and preparation",
	    "Pen or prison where captives are held",
	    ["Storage, mostly nonperishable goods", 2],
	    "Throne room where the lair's leaders hold court",
	    "Torture chamber",
	    "Training and exercise room",
	    "Trophy room or museum",
	    "Latrine or bath",
	    "Workshop for the construction of weapons, armor, tools, and other goods"
	],
	maze: [
	    "Conjuring room, used to summon creatures that guard the maze",
	    ["Guard room for sentinels th at patrol the maze", 4],
	    ["Lair for guard beasts that patrol the maze", 5],
	    "Pen or prison accessible only by secret door, used to hold captives condemned to the maze",
	    "Shrine dedicated to a god or other entity",
	    ["Storage for food, as well as tools used by the maze's guardians to keep the complex in working order", 2],
	    ["Trap to confound or kill those sent into the maze", 4],
	    "Well that provides drinking water",
	    "Workshop where doors, torch sconces, and other furnishings are repaired and maintained"
	],
	mine: [
	    ["Barracks for miners", 2]
	    "Bedroom for a supervisor or manager
	    "Chapel dedicated to a patron deity of miners, earth, or protection"
	    "Cistern providing drinking water for miners"
	    ["Guardroom", 2],
	    "Kitchen used to feed workers",
	    "Laboratory used to conduct tests on strange minerals extracted from the mine",
	    ["Lode where metal ore is mined (75 percent chance of being depleted)", 6],
	    "Office used by the mine supervisor",
	    "Smithy for repairing damaged tools",
	    ["Storage for tools and other equipment", 2],
	    "Strong room or vault used to store ore for transport to the surface"
	],
	planarGate: [
	    ["Decorated foyer or antechamber, 3],
	    ["Armory used by the portal's guardians", 4],
	    ["Audience chamber for receiving visitors", 2],
	    ["Barracks used by the portal's guards", 9],
	    ["Bedroom for use by the high-ranking members of the order that guards the portal", 4],
	    ["Chapel dedicated to a deity or deities related to the portal and its defenders", 7],
	    ["Cistern providing fresh water", 5],
	    ["Classroom for use of initiates learning about the portal's secrets", 3],
	    "Conjuring room for summoning creatures used to investigate or defend the portal", 
	    ["Crypt where the remains of those that died guarding the portal are kept", 2],
	    ["Dining room", 6],
	    ["Divination room used to investigate the portal and events tied to it", 3],
	    ["Dormitory for visitors and guards", 5],
	    ["Entry room or vestibule", 2],
	    ["Gallery for displaying trophies and objects related to the portal and those that guard it" 2],
	    ["Guardroom to protect or watch over the portal", 8],
	    ["Kitchen", 4],
	    ["Laboratory for conducting experiments relating to the portal and creatures that emerge from it", 5],
	    ["Library holding books about the portal's history", 3],
	    ["Pen or prison for holding captives or creatures that emerge from the portal", 5],
	    ["Planar junction, where the gate to another plane once stood (25 percent chance of being active)", 2],
	    ["Storage", 3],
	    "Strong room or vault, for guarding valuable treasures connected to the portal or funds used to pay the planar gate's guardians",
	    ["Study", 2],
	    "Torture chamber, for questioning creatures that pass through the portal or that attempt to clandestinely use it",
	    ["Latrine or bath", 4],
	    ["Workshop for constructing tools and gear needed to study the portal", 2]
	],
	stronghold: [
	    ["Antechamber where visitors seeking access to the stronghold wait", 2],
	    ["Armory holding high-quality gear, including light siege weapons such as ballistas", 3],
	    "Audience chamber used by the master of the stronghold to receive visitors",
	    "Aviary or zoo for keeping exotic creatures",
	    ["Banquet room for hosting celebrations and guests", 4],
	    ["Barracks used by elite guards", 4],
	    "Bath outfitted with a marble floor and other luxurious accoutrements",
	    "Bedroom for use by the stronghold's master or important guests",
	    "Chapel dedicated to a deity associated with the stronghold's master",
	    ["Cistern providing drinking water", 3],
	    ["Dining room for intimate gatherings or informal meals", 4],
	    "Dressing room featuring a number of wardrobes",
	    ["Gallery for the display of expensive works of art and trophies", 3],
	    ["Game room used to entertain visitors", 3],
	    ["Guardroom", 18],
	    "Kennel where monsters or trained animals that protect the stronghold are kept",
	    ["Kitchen designed to prepare exotic foods for large numbers of guests", 6],
	    ["Library with an extensive collection of rare books", 4],
	    "Lounge used to entertain guests",
	    ["Pantry, including cellar for wine or spirits", 8],
	    ["Sitting room for family and intimate guests", 4],
	    ["Stable", 4],
	    ["Storage for mundane goods and supplies", 8],
	    "Strong room or vault for protecting important treasures (75 percent chance of being hidden behind a secret door)"
	    ["Study, including a writing desk", 5],
	    "Throne room, elaborately decorated",
	    ["Waiting room where lesser guests are held before receiving an audience", 5],
	    ["Latrine or bath", 2],
	    ["Crypt belonging to the stronghold's master or someone else of importance", 2]
	],
	temple: [
	    ["Armory filled with weapons and armor, battle banners, and pennants", 2],
	    ["Audience chamber where priests of the temple receive commoners and low-ranking visitors", 2],
	    ["Banquet room used for celebrations and holy days", 2],
	    ["Barracks for the temple's military arm or its hired guards", 3],
	    ["Cells where the faithful can sit in quiet contemplation" 5],
	    ["Central temple built to accommodate rituals", 10],
	    ["Chapel dedicated to a lesser deity associated with the temple's major deity", 4],
	    ["Classroom used to train initiates and priests", 3],
	    ["Conjuring room, specially sanctified and used to summon extraplanar creatures", 3],
	    ["Crypt for a high priest or similar figure, hidden and heavily guarded by creatures and traps", 6],
	    ["Dining room (large) for the temple's servants and lesser priests", 2],
	    "Dining room (small) for the temple's high priests"
	    ["Divination room, inscribed with runes and stocked with soothsaying implements", 3],
	    ["Dormitory for lesser priests or students", 4],
	    ["Guardroom", 6],
	    "Kennel for animals or monsters associated with the temple's deity", 
	    ["Kitchen (might bear a disturbing resemblance to a torture chamber in an evil temple)", 3],
	    ["Library, well stocked with religious treatises", 5],
	    ["Prison for captured enemies (in good or neutral temples) or those designated as sacrifices (in evil temples)", 3],
	    ["Robing room containing ceremonial outfits and items", 5],
	    "Stable for riding horses and mounts belonging to the temple, or for visiting messengers and caravans",
	    ["Storage holding mundane supplies", 5],
	    "Strong room or vault holding important relics and ceremonial items, heavily trapped",
	    ["Torture chamber, used in inquisitions (in good or neutral temples with a lawful bent) or for the sheer joy of causing pain (evil temples)", 2],
	    ["Trophy room where art celebrating key figures and events from mythology is displayed", 7],
	    "Latrine or bath",
	    ["Well for drinking water, defendable in the case of attack or siege", 4],
	    ["Workshop for repairing or creating weapons, religious items, and tools", 6]
	],
	tomb: [
	    "Antechamber for those that have come to pay respect to the dead or prepare themselves for burial rituals",
	    ["Chapel dedicated to deities that watch over the dead and protect their resting places", 2],
	    ["Crypt for less important burials", 5],
	    "Divination room, used in rituals to contact the dead for guidance",
	    "False crypt (trapped) to kill or capture thieves",
	    "Gallery to display the deeds of the deceased through trophies, statues, paintings and so forth",
	    "Grand crypt for a noble, high priest, or other important individual"
	    ["Guardroom, usually guarded by undead, constructs, or other creatures that don't need to eat or sleep", 2],
	    "Robing room for priests to prepare for burial rituals",
	    ["Storage, stocked with tools for maintaining the tomb and preparing the dead for burial", 2],
	    "Tomb where the wealthiest and most important folk are interred , protected by secret doors and traps",
	    ["Workshop for embalming the dead", 2]
	],
	treasureVault: [
	    "Antechamber for visiting dignitaries"
	    2 Armory containing mundane and magic gear used
	    by the treasure vault's guards
	    3-4 Barracks for guards
	    5 Cistern providing fresh water
	    6-9 Guardroom to defend against intruders
	    10 Kennel for trained beasts used to guard the
	    treasure vault
	    11 Kitchen for feed ing guards
	    12 Watch room that allows guards to observe those
	    who approach the dungeon
	    13 Prison for hold ing capturea intruders
	    14-15 Strong room or vaul, for guarding the treasure
	    hidden in the dungeon, accessible only by locked
	    or secret door
	    16 Torture chamber for ex racting information from
	    captured intruders
	    17-20 Trap or other rick designee ·o ill or capture
	    creatures that en er e dungeor
	],
	general: [
	    Antechamber
	    53-54 Laboratory
	    02-03 Armory
	    55-57 Library
	    04 Audience
	    58-59 Lounge
	    60 Meditation chamber
	    OS Aviary chamber
	    06-07 Banquet room
	    61 Observatory
	    08-10 Barracks
	    62 Office
	    11 Bath or latrine
	    63-64 Pantry
	    12 Bedroom
	    65-66 Pen or prison
	    13 Bestiary
	    67-68 Reception room
	    14-16 Cell
	    69-70 Refectory
	    17 Chantry
	    71 Robing room
	    18 Chapel
	    72 Salon
	    19-20 Cistern
	    73-74 Shrine
	    21 Classroom
	    75-76 Sitting room
	    22 Closet
	    77-78 Smithy
	    23-24 Conjuring room
	    79 Stable
	    25 - 26 Court
	    80- 81 Storage room
	    27-29 Crypt
	    82-83 Strong room
	    30-31 Dining room or vault
	    32-33 Divination room
	    84-85 Study
	    34 Dormitory
	    86-88 Temple
	    35 Dressing room
	    89-90 Throne room
	    36 Entry room or vestibule
	    91 Torture chamber
	    92-93 Training or
	    37-38 Gallery exercise room
	    39-40 Game room
	    94-95 Trophy room or museum
	    41-43 Guardroom
	    44-45 Hall
	    96 Waiting room
	    46-47 Hall, great
	    97 Nursery or schoolroom
	    48-49 Hallway
	    so Kennel 98 Wel l
	    51-52 Kitchen 99-00 Workshop
	]
}