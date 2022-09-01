// Section ID calculator script portion
var classOffsetBB = { // Class offset stuff for Blue Burst
  "HUdiv": "5",
  
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

function calculate()
{
  // Find version and attempt to calculate for that version (if differences between these versions even exist...)
  var gameVersion = document.getElementById("playerVersion").value;
  if (gameVersion == "BB")
  {
    calculateForBB();
  } elseif (gameVersion == "DCv1")
  {
   calculateForDCv1(); 
  } elseif (gameVersion == "DCv2")
  {
   calculateForDCv2(); 
  } elseif (gameVersion == "EP1&2")
  {
   calculateForGCXBOX(); 
  } else {
    document.getElementById("output").innerHTML = "A section ID cannot be generated with the data provided.";
  }
}

function calculateForBB()
{
  
}

function calculateForDCv1()
{
  
}

function calculateForDCv2()
{
  
}

function calculateForGCXBOX()
{
  
}
