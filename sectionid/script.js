// Section ID calculator script portion

// General Vars

var sectionColors = {
  "Viridia": "#40826D",
  "Greenill": "#007610",
  "Skyly": "#00D1FF",
  "Bluefull": "#001BFF",
  "Purplenum": "#AA00FF",
  "Pinkal": "#FE7FFC",
  "Redria": "#FF0000",
  "Oran": "#FF9E00",
  "Yellowboze": "#FFFB00",
  "Whitill": "#9C9998" // More grey rather than white because... white background. lol. 
}

// Blue Burst Vars

var classOffsetBB = { // Class offset stuff for Blue Burst
  "HUdiv": "5", // **div classes are not real classes and are only here to keep the script from potentially breaking.
  
  "HUmar": "5",
  "HUnewearl": "6",
  "HUcast": "7",
  "HUcaseal": "4",
  
  "RAdiv": "8",
  
  "RAmar": "8",
  "RAmarl": "6",
  "RAcast": "9",
  "RAcaseal": "0",
  
  "FOdiv": "5",
  
  "FOmar": "5",
  "FOmarl": "1",
  "FOnewm": "2",
  "FOnewearl": "3"
}

var sectionsBB = {
  "0": "Viridia",
  "1": "Greenill",
  "2": "Skyly",
  "3": "Bluefull",
  "4": "Purplenum",
  "5": "Pinkal",
  "6": "Redria",
  "7": "Oran",
  "8": "Yellowboze",
  "9": "Whitill"
}

var BBkeys = {
  // numbers
  "0": "8",
  "1": "9",
  "2": "0",
  "3": "1",
  "4": "2",
  "5": "3",
  "6": "4",
  "7": "5",
  "8": "6",
  "9": "7",
  // lowercase letters
  "a": "7",
  "b": "8",
  "c": "9",
  "d": "0",
  "e": "1",
  "f": "2",
  "g": "3",
  "h": "4",
  "i": "5",
  "j": "6",
  "k": "7",
  "l": "8",
  "m": "9",
  "n": "0",
  "o": "1",
  "p": "2",
  "q": "3",
  "r": "4",
  "s": "5",
  "t": "6",
  "u": "7",
  "v": "8",
  "w": "9",
  "x": "0",
  "y": "1",
  "z": "2",
  // uppercase letters
  "A": "5",
  "B": "6",
  "C": "7",
  "D": "8",
  "E": "9",
  "F": "0",
  "G": "1",
  "H": "2",
  "I": "3",
  "J": "4",
  "K": "5",
  "L": "6",
  "M": "7",
  "N": "6",
  "O": "9",
  "P": "0",
  "Q": "1",
  "R": "2",
  "S": "3",
  "T": "4",
  "U": "5",
  "V": "6",
  "W": "7",
  "X": "8",
  "Y": "9",
  "Z": "0",
  // symbols
	"(": "0",
	"<": "0",
	")": "1",
	"=": "1",
	"[": "1",
	"*": "2",
	" ": "2",
	"\\": "2",
	"!": "3",
	"+": "3",
	"{": "3",
	"]": "3",
	"?": "3",
	"@": "4",
	"^": "4",
	"}": "4",
	"\"": "4",
	",": "4",
	"#": "5",
	"-": "5",
	"_": "5",
	"|": "5",
	"~": "6",
	"'": "6",
	".": "6",
	"%": "7",
	"/": "7",
	"&": "8",
	":": "8",
	"`": "9",
	";": "9"
}

function calculate()
{
  // Find version and attempt to calculate for that version (if differences between these versions even exist...)
  var gameVersion = document.getElementById("playerVersion").value;
  if (gameVersion == "BB")
  {
    calculateForBB();
  } else if (gameVersion == "NonBB")
  {
   calculateForNonBB(); 
  } else {
    document.getElementById("output").innerHTML = "A section ID cannot be generated with the data provided.";
  }
}

function calculateForBB()
{
 // document.getElementById("output").innerHTML = "Blue Burst selected. This will be removed when done.";
  var charName = document.getElementById("playerName").value;
  var charClass = document.getElementById("playerClass").value;
  if (charName.length == 0)
  {
    document.getElementById("output").innerHTML = "A section ID cannot be generated with the data provided.";
  } else {
    var offset = classOffsetBB[charClass];
    var charNameArray = charName.split("");
    var charNameArrayLen = charNameArray.length;
    var total = 0;
    for (i = 0; i < charNameArrayLen; i++)
    {
      var currentLetter = charNameArray[i];
      total += +BBkeys[currentLetter];
    }
    var totalValue = +total + +offset;
    var totalS = ''+totalValue;
    var result = totalS.slice(-1);
    var yourSectionID = sectionsBB[result];
    document.getElementById('output').innerHTML = "Your character is likely to be a <colorElement style='color:" + sectionColors[yourSectionID] + "'>" + yourSectionID + "</colorElement>!";
  }
}

function calculateForNonBB()
{
  var charName = document.getElementById("playerName").value;
  var charClass = document.getElementById("playerClass").value;
  if (charName.length == 0)
  {
    document.getElementById("output").innerHTML = "A section ID cannot be generated with the data provided.";
  } else {
    var charNameArray = charName.split("");
    var charNameArrayLen = charNameArray.length;
    var total = 0;
    for (i = 0; i < charNameArrayLen; i++)
    {
      var currentLetter = charNameArray[i];
      total += +BBkeys[currentLetter];
    }
    var totalValue = +total;
    var totalS = ''+totalValue;
    var result = totalS.slice(-1);
    var yourSectionID = sectionsBB[result];
    document.getElementById('output').innerHTML = "Your character is likely to be a <colorElement style='color:" + sectionColors[yourSectionID] + "'>" + yourSectionID + "</colorElement>!";
  }
}
