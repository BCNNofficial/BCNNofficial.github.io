var alltabs = ["Need to Know", "Topics", "Find a Story", "Sources", "About BCNN"];
var alltabslinks = ["https://bcnnofficial.github.io/need-to-know/", "https://bcnnofficial.github.io/topics/", "https://bcnnofficial.github.io/find-a-story/", "https://bcnnofficial.github.io/sources/", "https://bcnnofficial.github.io/about-us/"]

var T2Tabs = ["Phillip Ball", "Earth 3", "Business Prison", "Prison Planet"];
var T2TabsL = ["https://bcnnofficial.github.io/topic-phillip-ball", "https://bcnnofficial.github.io/error-404", "https://bcnnofficial.github.io/error-404", "https://bcnnofficial.github.io/error-404"];

var overT2 = 0;
var overT2Tab = 0;
var T2TabExists = 0;

var xPos = 0;
var yPos = 0;

function onMouseMove(e)
{
	//console.log("BUST");
	console.log(e);
	xPos = e.clientX;
	yPos = e.clientY;
}

function getXMousePos (e)
{
	return e.clientX;
}
function getYMousePos (e)
{
	return e.clientY;
}

function OpenTab ()
{
	//console.log("Entered if statement");
	var topicTabs = document.createElement("div");
	//topicTabs.classname = "topics-tab";
	document.body.appendChild(topicTabs);

	for (var i = 0; i < T2Tabs.length; i++)
	{
		topicTabs.innerHTML += "<a href=\""+T2TabsL[i]+"\">"+T2Tabs[i]+"</a><br>";
	}

	topicTabs.classList.add("topics-tab");
	
	topicTabs.style.top = (yPos) + "px";
	topicTabs.style.left = (xPos) + "px";	

	//console.log("divposX: "+topicTabs.style.left);
	//console.log("divposy: "+topicTabs.style.top);

	topicTabs.addEventListener("mouseover", function() {MoveToT2Tab();});
	topicTabs.addEventListener("mouseout", function() {MoveFromT2Tab();});

	//topicTabs.innerHTML = "<a href=\""+T4TabsL[0]+"\">"+T2Tabs[1]+"</a><br>"+"<a href=\""+T2TabsL[1]+"\">"+T4Tabs[1]+"</a><br>";
	
	T2TabExists = 1;
}

function MoveToT2 ()
{
	overT2 = 1;
	console.log("overT2: "+overT2);
	setTimeout(function(e) {if (overT2Tab === 0 && T2TabExists === 0){OpenTab(e);}}, 1000);
}
function MoveToT2Tab ()
{
	overT2Tab = 1;
	console.log("overT2Tab: "+overT2Tab);
}
function MoveFromT2 ()
{
	overT2 = 0;
	console.log("overT2: "+overT2);
	setTimeout(function(){if (overT2 === 0 && overT2Tab === 0){$(".topics-tab").remove(); T2TabExists = 0;}}, 1000)
	//if (overT2 === 0 && overT2Tab === 0)
	//{
	//	$(".topics-tab").remove();	
	//}
}
function MoveFromT2Tab ()
{
	overT2Tab = 0;
	console.log("overT2Tab: "+overT2Tab);
	setTimeout(function(){if (overT2 === 0 && overT2Tab === 0){$(".topics-tab").remove(); T2TabExists = 0;}}, 1000)
	//if (overT2 === 0 && overT2Tab === 0){$(".topics-tab").remove();}
}

function Initiate()
{
	//add header stuff
	var content = "";
	content += "<div class='title'><a href='https://bcnnofficial.github.io'>BCNN</a></div>";
	
	content += "<div class='top-back' style='top:9px; z-index:5;'></div>";
	
	content += "<div class='tabs'></div>";
	
	content += "<div class='more' onclick='OpenSideMenu ()'>More</div>";
	
	content += "<div class='choice'>";
	
	for (var i = 0; i < alltabs.length; i++)
	{
		var myNumber = i+1;
		content += "<span id='t"+myNumber+"'><div id='t"+myNumber+"Div'><a href="+alltabslinks[i]+">"+alltabs[i]+"</a></div></span>";
	}
	
	content += "</div>";
	
	document.body.innerHTML += content;
	
	var T2 = document.getElementById("t2Div");
	T2.addEventListener("mouseover", function(e) {onMouseMove(e); MoveToT2();});
	T2.addEventListener("mouseout", function() {MoveFromT2();});
}

function FootNote(myID, myString)
{
	console.log(document.documentElement.scrollTop);
	
	var myFootnote = document.getElementById(myID);
	var myFootnoteBoundingRect = myFootnote.getBoundingClientRect();
	var myX = myFootnoteBoundingRect.left + 10;
	var myX = myX + "px";
	var myY = myFootnoteBoundingRect.top + document.documentElement.scrollTop + 10;
	var myY = myY + "px";

	console.log(myFootnoteBoundingRect.right + " " + myFootnoteBoundingRect.bottom);

	var footnote = document.createElement("div");
	document.body.appendChild(footnote);
	footnote.innerHTML = myString;
	footnote.classList.add("footnote-box");
	footnote.style.left = myX;
	footnote.style.top = myY;
}

var sidemenuMain = ["<a href='https://bcnnofficial.github.io/error-404'>Need to Know</a> <div class='button-div' onclick='ExpandSB0()'><img class='button' src='https://raw.githubusercontent.com/BCNNofficial/BCNNofficial.github.io/main/sample-box.png' alt='expand tab'></div><br>", "<a href='https://bcnnofficial.github.io/error-404'>Happening NOW</a><br>", "<a href='https://bcnnofficial.github.io/error-404'>Topics</a><div class='button-div' onclick='ExpandSB2()'><img class='button' src='https://raw.githubusercontent.com/BCNNofficial/BCNNofficial.github.io/main/sample-box.png' alt='expand tab'></div><br>", "<a href='https://bcnnofficial.github.io/error-404'>Find a Story</a><br>", "<a href='https://bcnnofficial.github.io/error-404'>Sources</a><br>", "<a href='https://bcnnofficial.github.io/error-404'>About BCNN</a><br>"]


var sidemenuSB0 = ["&emsp;<a href='https://bcnnofficial.github.io/error-404'>Would like to know</a><br>"]; var SB0Open = 0;
var sidemenuSB2 = ["&emsp;<a href='https://bcnnofficial.github.io/error-404'>Business Prison</a><br>", "&emsp;<a href='https://bcnnofficial.github.io/error-404'>Prison Planet</a><br>", "&emsp;<a href='https://bcnnofficial.github.io/error-404'>Earth 3</a><br>", "&emsp;<a href='https://bcnnofficial.github.io/topic-phillip-ball'>Phillip Ball</a> <br>"]; var SB2Open = 0;

var sidemenuopened = 0;

function OpenSideMenu ()
{
	if (sidemenuopened === 0)
	{
		console.log("OpenSideMenu function entered")
		var sidemenu = document.createElement("div");
		document.body.appendChild(sidemenu);

		for (var i = 0; i < sidemenuMain.length; i++)
		{
			console.log("Main loop iteration " + i)
			var myTab = document.createElement("span")
			sidemenu.appendChild(myTab);
			myTab.innerHTML = sidemenuMain[i];
			myTab.className = "sb"+i;
		}

		sidemenu.className = "side-menu";

		var exitbutton = document.createElement("div")
		sidemenu.appendChild(exitbutton);
		exitbutton.innerHTML = "<img class='exit-button' src='https://raw.githubusercontent.com/BCNNofficial/BCNNofficial.github.io/main/sample-box.png' alt='exit'>"
		exitbutton.addEventListener("click", function() {$(".side-menu").remove(); sidemenuopened = 0;})
	}
}
function ExpandSB0()
{
	console.log("ExpandSB0 function entered")
	if (SB0Open === 0)
	{
		for (var i = 0; i < sidemenuSB0.length; i++)
		{
			console.log("SB0 loop iteration " + i)
			var myTab = document.createElement("span");
			myTab.classList.add = "sb0sub";
			$("<span class='sb0sub'>"+sidemenuSB0[i]+"</span>").insertAfter(".sb0");
			SB0Open = 1;
		}
	}
	else if (SB0Open === 1)
	{
		$(".sb0sub").remove();
		SB0Open = 0;
	}
}
function ExpandSB2()
{
	console.log("ExpandSB2 function entered")
	if (SB2Open === 0)
	{
		for (var i = 0; i < sidemenuSB2.length; i++)
		{
			console.log("SB2 loop iteration " + i)
			var myTab = document.createElement("span");
			myTab.classList.add = "sb2sub";
			$("<span class='sb2sub'>"+sidemenuSB2[i]+"</span>").insertAfter(".sb2");
			SB2Open = 1;
		}
	}
	else if (SB2Open === 1)
	{
		$(".sb2sub").remove();
		SB2Open = 0;
	}
}
