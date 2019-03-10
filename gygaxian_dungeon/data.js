var dungeonDetailsData = [
	[
		"Original purpose",
		[
			"Prison complex",
			"Forward command",
			"Doomsday bunker",
			"Burial site - mass grave, or tomb of a king?",
			"Military training",
			"Wizard experimentation",
			"Shrine - to worship something, or keep it out?",
			"Royal Palace",
			"Fortress protecting nothing",
			"Mine, too deep and greedily etc. etc.",
			"Arcane item storage",
			"Summer palace",
			"Belly of a giant monster",
			"Immense cave network",
			"Bewitched forest",
			"Library",
			"Ritual Chamber",
			"Breeding hive of some large insectoid",
			"Formal Education",
			"Orbital habitat"
		]
	],
	[
		"Current purpose",
		[
			"Breeding ground",
			"Dump",
			"Cultist lair",
			"Monster Lair",
			"Goblin City",
			"Fight Arena",
			"Abandoned due to unforeseen circumstances",
			"Smuggling route",
			"Bandit lair, former soldiers",
			"Dumping mutants",
			"Mage guild initiation",
			"Chimera creation",
			"Secret highway",
			"Manufacturing",
			"Nest for eldritch being",
			"Esoteric ritual",
			"Rite of adulthood",
			"Trapping a monster, minotaur style",
			"Part of the Underworld",
			"Return to original purpose"
		]
	],
	[
		"Entrance/Layout/Extra",
		[
			"Gigantic skull",
			"Accessible only via river",
			"Manor built above",
			"Shattered rail-line leads below ground",
			"Bifurcating tree structure",
			"River runs through it",
			"Has been flipped upside-down",
			"Immense vertical shaft",
			"Inactive moon portal",
			"Key rooms move occasionally",
			"Non-euclidean",
			"Flooded",
			"Mutagenic ore",
			"Slowly subsiding",
			"Still being built",
			"Rotates on command",
			"Reclaimed by army",
			"Lava, so much lava",
			"Whole structure flies",
			"Potentially infinite"
		]
	]
]

var encounterData = [
	"Encounter",
	[
		"Mindset",
		[
			"Sleeping",
			"Angry",
			"Hungry",
			"Eating",
			"Playing",
			"Hunting",
			"Competing",
			"Celebrating",
			"Mourning",
			"Spiteful",
			"Searching",
			"Lost",
			"Greedy",
			"Lonely",
			"Playful",
			"Calculating",
			"Escaping",
			"Screaming",
			"Silent",
			"Friendly"
		]
	],
	[
		"Monster",
		[
			"Goblins",
			"Tomb Robbers",
			"Kobolds",
			"Ooze",
			"Giant Spiders",
			"Ghouls",
			"Skeletons",
			"Trolls",
			"Faeries",
			"Merchants / Cultists",
			"Wizard",
			"Golem",
			"Mimic",
			"Demon",
			"Giant [Animal]",
			"Troglodytes",
			"Knight / Princess",
			"Vampire / Lich / Ghost",
			"Beholder",
			"Dragon"
		]
	],
	[
		"(Hidden) Goal",
		[
			"Addict, do anything for a fix",
			"Mercantile, greedy",
			"Waging a war",
			"Exploration",
			"Steal a specific item",
			"Create something of value",
			"Insane",
			"Overthrow a ruler",
			"Find the hidden relic",
			"Learn of the outside world",
			"Complete a ritual",
			"Become a hero",
			"Self-improvement",
			"Research",
			"Marriage",
			"Write a book",
			"Atonement",
			"Lift a curse/cure a disease",
			"Rule with an iron fist",
			"Have a holiday"
		]
	]
]

var emptyData = [
	"Empty",
	[
		"Shape/Purpose",
		[
			"Place of worship",
			"Dining hall",
			"Sphere",
			"Split-level gallery",
			"Radiating spokes",
			"Vertical shaft",
			"Amphitheatre",
			"Temporary fortress",
			"Two rooms, collapsed wall between them",
			"Melting cube",
			"Pyramid",
			"Dozens of tiny rooms",
			"Divided into pits",
			"Spiral",
			"Surrounding bottomless pit",
			"Trash pile",
			"Gigantic steps",
			"Esoteric ballgame field",
			"Immense cavern",
			"Gladiatorial arena"
		]
	],
	[
		"You see",
		[
			"Mouldering bones",
			"Piles of broken pottery",
			"Eyes blinking in the dark",
			"Broken-down wagon",
			"Obvious illusion",
			"Ornate desk, collapsed",
			"Shattered iron scrap",
			"Makeshift shrine",
			"Lichen, mold, and fungi farm",
			"Footprints in the dust",
			"Fissure a foot wide",
			"Pool of liquid darkness",
			"Cages of different sizes",
			"Fissure in the floor",
			"Burnt offering",
			"Shattered flagstones",
			"Decrepit throne",
			"Destroyed camp",
			"A vat of liquid",
			"Grates in the floor"
		]
	],
	[
		"You smell/hear",
		[
			"Dripping, brackish water",
			"Rotting meat",
			"Stone dust",
			"Skittering feet",
			"Faint wind",
			"Humming",
			"Delicious-smelling food",
			"Drums in the deep",
			"A quiet voice speaks a characters name",
			"Mold and mildew",
			"Children playing in the distance",
			"Acetone & burning rubber",
			"Frost",
			"Sobbing",
			"Disembodied voices",
			"Crackle of flame",
			"Ozone",
			"A light floral perfume",
			"Manure, fresh",
			"Rhythmic cracking"
		]
	]
]

var trapData = [
	"Trap",
	[
		"Effect/Mechanism",
		[
			"Pit, disguised by trapdoor",
			"Pit, full of acid/spikes/fire",
			"Pit, containing monster",
			"Slashing blades",
			"Poisoned blade",
			"Crushing hammer from roof",
			"Hammer from wall",
			"Arrows",
			"Dart, poisoned",
			"Fire, either gas or oil spray",
			"Lightning bolt or other spell",
			"Magic sigil (Blind, Enrage, Teleport, Mutate)",
			"Cage / portcullis falls",
			"Water flood",
			"Gas (toxic, sleep, mind-control, confusion)",
			"Undead released",
			"Magnets",
			"Doors lock",
			"Elevator trap",
			"Dungeon begins collapsing!"
		]
	],
	[
		"Trigger",
		[
			"Pressure plate, inset",
			"Pressure plate, obvious",
			"Tripwire",
			"Tripwire, actually trips you",
			"Thinking too hard",
			"Running",
			"Loud noise",
			"Lever pulled / not pulled",
			"Happens at set intervals",
			"Randomly",
			"Manually, by observers",
			"Stepping off / on the clearly marked path",
			"Always on (perhaps broken)",
			"If unjammed",
			"Not speaking the password",
			"Opening a lid/door",
			"Using the wrong key",
			"Nothing, trap malfunctioned",
			"Waiting too long",
			"Magical auras"
		]
	],
	[
		"Evidence",
		[
			"Full corpse",
			"Partial remains",
			"Bloodstains",
			"Marks on the floor",
			"Marks on the walls",
			"Marks on the ceiling",
			"Trap only partially reset",
			"Trigger fails first time",
			"No cobwebs etc.",
			"Obvious, hard to pass",
			"Hidden in shadow",
			"Disguising material is slightly off-colour",
			"Odd smell in the air",
			"Clicking in the walls",
			"Scuffs on the wall near a hidden off-switch",
			"Hollow section in the wall",
			"Scent of fear/death/bowels",
			"Litter on floor",
			"Obvious if not pursued etc.",
			"Strange tingling sensation"
		]
	],
]

var trickData = [
	"Trick",
	[
		"Combine this",
		[
			"Barrels of alchemical reagents",
			"Statue",
			"Array of shiny levers",
			"Scraps of paper",
			"Sword stuck in the wall",
			"Ropes hanging from the ceiling",
			"Sticky slime",
			"Pile of firewood",
			"Bottomless pit",
			"Unseen servants undoing each other's work",
			"Massive stone sphere",
			"A single gold coin, on a pedestal",
			"Overflowing bookcase",
			"Running water",
			"Strange patterns on the floor",
			"Coloured paint/ink",
			"Campsite",
			"Mirror",
			"Eternal flame",
			"Icicles"
		]
	],
	[
		"With this",
		[
			"Hidden pipes",
			"Spell-scroll",
			"Ancient monolith",
			"Pile of weaponry",
			"Loaded ballista",
			"Piles of skulls",
			"Ritual altar",
			"Holy water",
			"Chandelier",
			"Chains and ropes attached to the ceiling",
			"Molten metal",
			"Thaumaturgical sludge",
			"Whirlpool",
			"Animated furniture",
			"Asshole golem assistants",
			"Electricity",
			"Talking head",
			"Piles of weapons",
			"Shifting sand",
			"Fountain"
		]
	],
	[
		"And this",
		[
			"Angry spirits",
			"Stolen jewelry",
			"Broken magical item",
			"Crystals",
			"Carnivorous plants",
			"Decrepit load-bearing columns",
			"Conveyer belt",
			"Sprung trap",
			"Giant clock",
			"Pool of acid",
			"Dead angel",
			"Confused and angry skeletons",
			"Portal",
			"Flickering reflections",
			"Ancient alien (?) technology",
			"Spell-in-a-can",
			"Eldritch symbol",
			"Dismantled engine",
			"Loud gong",
			"Cursed moving armour"
		]
	]
]

var travelData = [
	"Travel",
	[
		"Method",
		[
			"Stairs",
			"Chute",
			"Minecart",
			"Rudimentary elevator",
			"Crack in the wall",
			"Canal",
			"Bridge",
			"Buzzing monolith",
			"Ventilation shaft",
			"Ring of magic runes",
			"Sewer",
			"Door opening to blackness",
			"Dumbwaiter",
			"Hole in the ground",
			"Rope ladder",
			"Underground river",
			"Stairs down a cliff",
			"Rotating chain",
			"Smashed walls",
			"Endless insect segments"
		]
	],
	[
		"Destination",
		[
			"One floor down",
			"One floor up",
			"Two floors down",
			"Two floors up",
			"Same floor, other side",
			"One floor up or down",
			"Anywhere you want",
			"Previously explored area",
			"Random floor",
			"Bottom of dungeon",
			"Near start of dungeon",
			"Secret dungeon exit",
			"Nearest town",
			"Lair of the most powerful creature in the dungeon",
			"Sacrificial pit",
			"Secret room",
			"Different dungeon",
			"Monster barracks",
			"Loot stash",
			"Somewhere Else"
		]
	],
	[
		"Complication",
		[
			"Blocked by rotting bodies",
			"Locked",
			"Magical wards",
			"In use from the other end",
			"One-way",
			"Single use",
			"Controlled by enemies",
			"On fire",
			"Flooded",
			"Destination changes",
			"Entrance changes",
			"Steals part of a soul",
			"Poisonous",
			"Has a cost, monetary or otherwise",
			"Religiously abhorrent",
			"Forbidden",
			"Intelligent",
			"Infested",
			"Not the way you want",
			"Observed"
		]
	]
]

var treasureData = [
	"Treasure",
	[
		"This",
		[
			"Equipment pack suitable for a thief, sage, diplomat etc.",
			"Uncut gemstones",
			"Tens of thousands of copper coins",
			"Useless magical trinkets",
			"Treasure map",
			"Pile of gold teeth, some human, some animal",
			"Wand of Magic Missile",
			"Fireball Grenade",
			"Hallucination Powder",
			"Dagger of Backstabbing",
			"Axe of Cleaving",
			"Longsword of Attacking Twice in One Round",
			"Loincloth of Rage",
			"Gloves of Wound Curing",
			"Automatic Lockpicks",
			"Immovable Rod",
			"Skull of Dubious Wisdom",
			"Occultum coin",
			"Blessing from a deity",
			"God Molar, plant it to grow a small castle"
		]
	],
	[
		"And/or this",
		[
			"Tarnished crown, political value equal to monetary",
			"+1 metal ore",
			"Anything the party lost in the dungeon so far",
			"Deed to nearby land",
			"Key to magical portal",
			"Scroll (escape, transmute, sleep, levitate, disguise)",
			"Sturdy shovel/pickaxe",
			"Potent spices",
			"Fancy clothes",
			"Filthy jewelry",
			"Bones of a saint",
			"Noble weapon, crossbow, rapier, lance etc.",
			"Questionable mushrooms",
			"Alcohol!",
			"Rations, rope, lantern, oil",
			"Snapped magic wand",
			"Jar of undead leeches",
			"Wizard familiar",
			"Poison / antidote",
			"Potion (healing, courage, haste, shrink, fire, tongues)"
		]
	],
	[
		"Container",
		[
			"Chest (crate, sack, lockbox, suitcase, stone, coffer)",
			"Chest, locked",
			"Trapped chest - poison needle",
			"Trapped chest - alarm",
			"Trapped chest - pit opens",
			"Trapped chest - gas (poison, flame, sleep, blind)",
			"Trapped chest - blade",
			"Trapped chest - cage drops",
			"Trapped chest - rune on lid",
			"Out in the open",
			"In the backpack of a corpse",
			"In a nest of (spiders, snakes, pixies, mushrooms)",
			"Pressure plate underneath",
			"Dangling above a pit",
			"Stuck to the ceiling",
			"Animates and flees/attacks",
			"Circle of eldritch symbols",
			"Runic forcefield",
			"Mimic!",
			"In a glass sphere full of metallic scorpions"
		]
	]
]

var data = [encounterData, emptyData, trapData, trickData, travelData, treasureData];