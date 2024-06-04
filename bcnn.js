var alltabs = ["Need to Know", "Topics", "Find a Story", "Sources", "About BCNN"];
var alltabslinks = ["https://bcnnofficial.github.io/need-to-know/", "https://bcnnofficial.github.io/topics/", "https://bcnnofficial.github.io/find-a-story/", "https://bcnnofficial.github.io/sources/", "https://bcnnofficial.github.io/about-us/"]

var T2Tabs = ["Phillip Ball", "Earth 3", "Business Prison", "Prison Planet"];
var T2TabsL = ["#", "#", "#", "#"];

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
	
	content += "<div class='tabs'></div>";
	
	content += "<div class='more'>More</div>";
	
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

