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

	GenerateEndStuff();
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

//FUNCTIONS ASSOCIATED WITH THE SIDE BAR MENU
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

var title = "";
var date = "";
var img_link = "";
var first_paragraph = "";
//CODE FOR GRABBING DATA FROM SPREADSHEET. COMES FROM: Laurence Svekis https://www.udemy.com/course/sheet-data-ajax/
const getSheetData = ({ sheetID, sheetName, query, callback }) => {
	const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
	const url = `${base}&sheet=${encodeURIComponent(
	  sheetName
	)}&tq=${encodeURIComponent(query)}`;
  
	fetch(url)
	  .then((res) => res.text())
	  .then((response) => {
		callback(responseToObjects(response));
	  });
  
	function responseToObjects(res) {
	  // credit to Laurence Svekis https://www.udemy.com/course/sheet-data-ajax/
	  const jsData = JSON.parse(res.substring(47).slice(0, -2));
	  let data = [];
	  const columns = jsData.table.cols;
	  const rows = jsData.table.rows;
	  let rowObject;
	  let cellData;
	  let propName;
	  for (let r = 0, rowMax = rows.length; r < rowMax; r++) {
		rowObject = {};
		for (let c = 0, colMax = columns.length; c < colMax; c++) {
		  cellData = rows[r]["c"][c];
		  propName = columns[c].label;
		  if (cellData === null) {
			rowObject[propName] = "";
		  } else if (
			typeof cellData["v"] == "string" &&
			cellData["v"].startsWith("Date")
		  ) {
			rowObject[propName] = new Date(cellData["f"]);
		  } else {
			rowObject[propName] = cellData["v"];
		  }
		}
		data.push(rowObject);
	  }
	  return data;
	}
};

// THIS IS FOR GRABBING SPECIFIC DATA. FROM https://www.youtube.com/watch?v=cRwpTv33Z_g&t=146s BY code hobo
	
function ReturnRandomNews(myDataSheet) {
	
	function sheetDataHandler(sheetData) {
		//console.log("sheet data: ", sheetData);
		//ADD YOUR CODE TO WORK WITH sheetData ARRAY OF OBJECTS HERE
	};

	// --==== QUERY EXAMPLES ====--
	// --==== USE LETTERS FOR COLUMN NAMES ====--
	//  'SELECT A,C,D WHERE D > 150'
	//  'SELECT * WHERE B = "Potato"'
	//  'SELECT * WHERE A contains "Jo"'
	//  'SELECT * WHERE C = "active" AND B contains "Jo"'
	//  "SELECT * WHERE E > date '2022-07-9' ORDER BY E DESC"

	getSheetData({
		// sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
		sheetID: "1fWIH-9n4cbj2R6sSWUmsjCw2d00Ues2_jRdMAToMFZk",
		// sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
		sheetName: myDataSheet,
		query: 'SELECT *',
		callback: sheetDataHandler,
	});
	console.log(title);
}


  //THIS IS FOR GENERATING THUMBNAILS
  var StoryNum = 0;
  var bottomMenu1 = ["Need to Know", "Happening NOW", "Topics", "Find a Story"];
  var bottomMenu1Links = ["#","#","#","#"];
  var bottomMenu2 = ["Contact Us","Q&amp;A", "Need Help?"];
  var bottomMenu2Links = ["#","#","#"];
  var bottomMenu3 = ["About Us"];
  var bottomMenu3Links = ["#"];
  function GenerateEndStuff()
{
	StoryNum = 0;
	//create
	var totalContainer = document.createElement("div");
	document.body.appendChild(totalContainer);
	totalContainer.classList.add("totalinformer");

	var endStoryClassContainer = document.createElement("div");
	totalContainer.appendChild(endStoryClassContainer);
	endStoryClassContainer.classList.add("end-storybox-container")

	var proclaimer = document.createElement("div");
	endStoryClassContainer.appendChild(proclaimer);
	proclaimer.classList.add("end-storybox-proclaimer");
	proclaimer.innerHTML="CHECK OUT MORE BCNN STORIES JUST FOR YOU";

	var numOfStories = 4;
	for (var i = 0; i < numOfStories; i++)
	{
		var storyBoxLink = document.createElement("a");
		endStoryClassContainer.appendChild(storyBoxLink);
		storyBoxLink.setAttribute('id', "myStrLnk"+i);

		var storyBox = document.createElement("div");
		storyBoxLink.appendChild(storyBox);
		storyBox.classList.add("end-storybox");

		var storySub = document.createElement("div");
		storyBox.appendChild(storySub);
		storySub.classList.add("end-storybox-subcontainer");
		storySub.setAttribute('id', "myStrBox"+i)

		function GenerateStory(sheetData)
		{
			var randVal = Math.floor(Math.random() * sheetData.length);
			var desiredID = "myStrBox"+StoryNum;
			//console.log(desiredID);
			var thisSub = document.getElementById(desiredID);
			//console.log(thisSub);
			console.log(sheetData[randVal]);
			var storyTitle = document.createElement("div");
			thisSub.appendChild(storyTitle);
			storyTitle.innerHTML = sheetData[randVal].name;
			storyTitle.classList.add("end-storybox-title");

			var storyDate = document.createElement("div");
			thisSub.appendChild(storyDate);
			storyDate.innerHTML = sheetData[randVal].date;
			storyDate.classList.add("end-storybox-date");

			thisSub.innerHTML += "<img class='end-storybox-image' src="+sheetData[randVal].img_link+"></img>";

			var otherDesiredID = "myStrLnk"+StoryNum;
			var thisStoryLink = document.getElementById(otherDesiredID);
			thisStoryLink.setAttribute('href',sheetData[randVal].link);

			var storyDisclaimer = document.createElement("div");
			thisSub.appendChild(storyDisclaimer);
			storyDisclaimer.innerHTML = sheetData[randVal].disclaimer;
			storyDisclaimer.classList.add("end-storybox-date");

			StoryNum++;
		}

		getSheetData({
			sheetID: "1fWIH-9n4cbj2R6sSWUmsjCw2d00Ues2_jRdMAToMFZk",
			sheetName: "All",
			query: 'SELECT *',
			callback: GenerateStory,
		});
	}

	var ourBottomMenu = document.createElement("div");
		totalContainer.appendChild(ourBottomMenu);
		ourBottomMenu.classList.add("end-bottom-menu");

		var divBottomMenu1 = document.createElement("div");
		ourBottomMenu.appendChild(divBottomMenu1);
		divBottomMenu1.innerHTML += "<br><br>";
		for (var i = 0; i < bottomMenu1.length; i++)
		{
			divBottomMenu1.innerHTML += "<a href="+bottomMenu1Links[i]+">"+bottomMenu1[i]+"</a><br>"
		}
		divBottomMenu1.classList.add("end-bottom-menu-container");

		var divBottomMenu2 = document.createElement("div");
		ourBottomMenu.appendChild(divBottomMenu2);
		for (var i = 0; i < bottomMenu2.length; i++)
		{
			divBottomMenu2.innerHTML += "<a href="+bottomMenu2Links[i]+">"+bottomMenu2[i]+"</a><br>"
		}
		divBottomMenu2.classList.add("end-bottom-menu-container");

		var divBottomMenu3 = document.createElement("div");
		ourBottomMenu.appendChild(divBottomMenu3);
		for (var i = 0; i < bottomMenu3.length; i++)
		{
			divBottomMenu3.innerHTML += "<a href="+bottomMenu3Links[i]+">"+bottomMenu3[i]+"</a><br>"
		}
		divBottomMenu3.innerHTML += "<br><br>"
		divBottomMenu3.classList.add("end-bottom-menu-container");
}
