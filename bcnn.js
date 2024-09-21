var alltabs = ["Need to Know", "Topics", "Find a Story", "Sources", "About BCNN"];
var alltabslinks = ["https://bcnnofficial.github.io/need-to-know/", "https://bcnnofficial.github.io/topics/", "https://bcnnofficial.github.io/find-a-story/", "https://bcnnofficial.github.io/sources/", "https://bcnnofficial.github.io/about-us/"]

var T2Tabs = ["Phillip Ball", "Earth 3", "Business Prison", "Prison Planet"];
var T2TabsL = ["http://bcnnofficial.github.io/topics/phillip-ball", "https://bcnnofficial.github.io/error-404", "https://bcnnofficial.github.io/error-404", "https://bcnnofficial.github.io/error-404"];

var overT2 = 0;
var overT2Tab = 0;
var T2TabExists = 0;

var xPos = 0;
var yPos = 0;

var fading = 0;

var myTopics = [];

function onMouseMove(e)
{
	//console.log("BUST");
	//console.log(e);
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

	var op = 0.1;  // initial opacity
	topicTabs.style.opacity = op;

	/*for (var i = 0; i < T2Tabs.length; i++)
	{
		topicTabs.innerHTML += "<a href=\""+T2TabsL[i]+"\">"+T2Tabs[i]+"</a><br>";
	}*/

	for (var i = 0; i < myTopics.length; i++)
	{
		topicTabs.innerHTML += "<a href='"+myTopics[i].link+"'>"+myTopics[i].name+"</a><br>";
	}

	topicTabs.classList.add("topics-tab");
	
	topicTabs.style.top = (yPos) + "px";
	topicTabs.style.left = (xPos) + "px";	

	topicTabs.style.display = 'block';
    var timer = setInterval(function () {
		fading = 1;
        if (op >= 1){
			fading = 0;
            clearInterval(timer);
        }
        topicTabs.style.opacity = op;
        topicTabs.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.2;
    }, 10);

	//console.log("divposX: "+topicTabs.style.left);
	//console.log("divposy: "+topicTabs.style.top);

	topicTabs.addEventListener("mouseover", function() {MoveToT2Tab();});
	topicTabs.addEventListener("mouseout", function() {MoveFromT2Tab();});

	//topicTabs.innerHTML = "<a href=\""+T4TabsL[0]+"\">"+T2Tabs[1]+"</a><br>"+"<a href=\""+T2TabsL[1]+"\">"+T4Tabs[1]+"</a><br>";
	
	T2TabExists = 1;
}

function MoveToT2 ()
{
	fading = 0;
	//console.log("Fading: " + fading);
	overT2 = 1;
	//console.log("overT2: "+overT2);
	if (fading === 0)
	{
		//console.log("overT2Tab: " + overT2Tab + " T2TabExists: " + T2TabExists);
		setTimeout(function(e) {if (overT2Tab === 0 && T2TabExists === 0 && overT2 === 1){OpenTab(e);}}, 500);
	}
	
}
function MoveToT2Tab ()
{
	fading = 0;
	//console.log("Fading: " + fading);
	overT2Tab = 1;
	//console.log("overT2Tab: "+overT2Tab);
}
function MoveFromT2 ()
{
	fading = 0;
	//console.log("Fading: " + fading);
	overT2 = 0;
	//console.log("overT2: "+overT2);
	if (fading === 0)
	{
		var op = 1;
		setTimeout(function(){
			if (overT2 === 0 && overT2Tab === 0){
				var timer = setInterval(function () {
					fading = 1;
					var topicTabs = document.getElementsByClassName("topics-tab")[0];
					//console.log(topicTabs);	
					if (topicTabs === undefined)
					{
						overT2Tab = 0;
						T2TabExists = 0;
						clearInterval(timer);
					}
					if (op <= 0.1){
						fading = 0;
						topicTabs.remove();
						overT2Tab = 0;
						T2TabExists = 0;
						clearInterval(timer);
					}
					topicTabs.style.opacity = op;
					topicTabs.style.filter = 'alpha(opacity=' + op * 100 + ")";
					op -= op * 0.15;
				}, 10);
			}
		}, 500)
	}
	//if (overT2 === 0 && overT2Tab === 0)
	//{
	//	$(".topics-tab").remove();	
	//}
}
function MoveFromT2Tab ()
{
	fading = 0;
	//console.log("Fading: " + fading);
	overT2Tab = 0;
	//console.log("overT2: "+overT2);
	if (fading === 0)
	{
		var op = 1;
		setTimeout(function(){
			if (overT2 === 0 && overT2Tab === 0){
				var timer = setInterval(function () {
					fading = 1;
					var topicTabs = document.getElementsByClassName("topics-tab")[0];
					//console.log(topicTabs);
					if (topicTabs === undefined)
					{
						overT2Tab = 0;
						T2TabExists = 0;
						clearInterval(timer);
					}
					if (op <= 0.1){
						fading = 0;
						topicTabs.remove();
						overT2Tab = 0;
						T2TabExists = 0;
						clearInterval(timer);
					}
					topicTabs.style.opacity = op;
					topicTabs.style.filter = 'alpha(opacity=' + op * 100 + ")";
					op -= op * 0.15;
				}, 10);
			}
		}, 500)
	}
	//if (overT2 === 0 && overT2Tab === 0){$(".topics-tab").remove();}
}

function Initiate()
{
	function sheetDataHandler(sheetData) {
		//console.log("sheet data: ", sheetData);
		for (var i = 0; i < sheetData.length; i++)
		{
			console.log("entered this AEROSBAENTRSBNAITERSBITN")
			myTopics.push(sheetData[i]);
		}
		console.log(myTopics);
	};

	getSheetData({
		// sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
		sheetID: "1Fz7QJy7ek0xH8D8HoGACmjHoJnMUdFG4tZhfIO_onag",
		// sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
		sheetName: "All",
		query: 'SELECT *',
		callback: sheetDataHandler,
	});

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

	//SetSidebarMaterial();

	InputAd("ads-all", "All");
}

footnoteDeleted = 1;
function FootNote(myID, myString)
{
	$(".footnote-box").remove();
	footnoteDeleted = 0;
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
	var op = 0.1;  // initial opacity
	footnote.style.opacity = op;
	footnote.innerHTML = myString;
	footnote.classList.add("footnote-box");

	var width = window.innerWidth;
	width = (width * 3) / 4

	console.log(typeof width, typeof window.innerHeight)

	if ((width) > (window.innerHeight))
	{
		footnote.style.left = myX;
		footnote.style.top = myY;
	}

    footnote.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        footnote.style.opacity = op;
        footnote.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.15;
    }, 10);
	var deleted = 0;

	document.body.addEventListener("mouseup", function(e) {
		
		myX = e.clientX;
		myY = e.clientY;
		footRect = footnote.getBoundingClientRect();
		console.log(footRect);
		console.log(footRect.left, footRect.right, footRect.top, footRect.bottom);
		console.log("X: " + myX, "Y: " + myY);
		if (footRect.left < myX && footRect.right > myX && footRect.top < myY && footRect.bottom > myY)
		{
			console.log("bust")
		}
		else if (footnoteDeleted===0)
		{
			var timer = setInterval(function () {
				if (op <= 0){
					clearInterval(timer);
					footnote.remove();
					footnoteDeleted=1;
				}
				footnote.style.opacity = op;
				footnote.style.filter = 'alpha(opacity=' + op * 100 + ")";
				op -= op * 0.15;
			}, 10);

			//footnote.remove();
			//console.log("CLICK OUTSIDE OF BOX, REMOVE BOX")
		}
	})
}

//code stuff to change the icon once clicked
var sidemenuMain = ["<a href='https://bcnnofficial.github.io/need-to-know'>Need to Know</a> <div class='button-div' onclick='ExpandSB0()'><img class='button' src='https://github.com/BCNNofficial/BCNNofficial.github.io/blob/main/expand.png?raw=true' alt='expand tab'></div><br>", "<a href='https://bcnnofficial.github.io/happening-NOW'>Happening NOW</a><br>", "<a href='https://bcnnofficial.github.io/topics'>Topics</a> <div class='button-div' onclick='ExpandSB2()'><img class='button' src='https://github.com/BCNNofficial/BCNNofficial.github.io/blob/main/expand.png?raw=true' alt='expand tab'></div><br>", "<a href='https://bcnnofficial.github.io/find-a-story'>Find a Story</a><br>", "<a href='https://bcnnofficial.github.io/sources'>Sources</a><br>", "<a href='https://bcnnofficial.github.io/about-us'>About BCNN</a><br>"]


var sidemenuSB0 = ["<a href='https://bcnnofficial.github.io/need-to-know/would-like-to-know/'>Would like to know</a><br>"]; var SB0Open = 0;
var SB2Open = 0;
var sidemenuopened = 0;

//FUNCTIONS ASSOCIATED WITH THE SIDE BAR MENU
function OpenSideMenu ()
{
	if (sidemenuopened === 0)
	{
		SB0Open = 0; SB2Open = 0;
		console.log("OpenSideMenu function entered")
		var sidemenu = document.createElement("div");
		document.body.appendChild(sidemenu);
		sidemenu.className = "side-menu";
		sidemenu.innerHTML += "BCNN Pages Portal";

		var sidemenuContainer = document.createElement("div");
		sidemenu.appendChild(sidemenuContainer);
		sidemenuContainer.classList.add("side-menu-container");

		for (var i = 0; i < sidemenuMain.length; i++)
		{
			console.log("Main loop iteration " + i)
			var myTab = document.createElement("span")
			sidemenuContainer.appendChild(myTab);
			myTab.innerHTML = sidemenuMain[i];
			myTab.className = "sb"+i;
		}

		var exitbutton = document.createElement("div")
		sidemenu.appendChild(exitbutton);
		exitbutton.innerHTML = "<img class='exit-button' src='https://github.com/BCNNofficial/BCNNofficial.github.io/blob/main/close.png?raw=true' alt='exit'>"
		exitbutton.addEventListener("click", function() {$(".side-menu").remove(); sidemenuopened = 0;})
		exitbutton.classList.add("exit-button-container")
		sidemenuopened = 1;

		var ourWidth = sidemenu.getBoundingClientRect().width;
		console.log(ourWidth);
		var ourLeft = -ourWidth;

		sidemenu.style.left = ourLeft + "px";
		exitbutton.style.left= (ourLeft + ourWidth - 50) + "px";

		var timer = setInterval(function () {
			if (ourLeft >= 0){
				sidemenu.style.left= "0px";
				exitbutton.style.left= (ourWidth - 50) + "px";
				clearInterval(timer);
			}
			ourLeft = ourLeft * (9/10) + 0.1;
			sidemenu.style.left = ourLeft + "px";
			exitbutton.style.left= (ourLeft + ourWidth - 50) + "px";
			console.log(ourLeft, sidemenu.style.left, exitbutton.style.left); 
		}, 10);
	}
}
function ExpandSB0()
{
	console.log("ExpandSB0 function entered")
	if (SB0Open === 0)
	{
		$("<div id='sb0-container' class='side-sub-container'></div>").insertAfter(".sb0");
		var sb0Container = document.getElementById("sb0-container");
		for (var i = 0; i < sidemenuSB0.length; i++)
		{
			console.log("SB0 loop iteration " + i)

			sb0Container.innerHTML += "<span class='sb0sub sub-atl'>"+sidemenuSB0[i]+"</span>";
			SB0Open = 1;
		}
	}
	else if (SB0Open === 1)
	{
		$("#sb0-container").remove();
		SB0Open = 0;
	}
}
function ExpandSB2()
{
	console.log("ExpandSB2 function entered")
	if (SB2Open === 0)
	{
		$("<div id='sb2-container' class='side-sub-container'></div>").insertAfter(".sb2");
		var sb2Container = document.getElementById("sb2-container");
		for (var i = 0; i < myTopics.length; i++)
		{
			console.log("SB2 loop iteration " + i)
			sb2Container.innerHTML += "<span class='sb2sub sub-atl'><a href='"+myTopics[i].link+"'>"+myTopics[i].name+"</a><br></span>";
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
}


  //THIS IS FOR GENERATING THUMBNAILS
  var StoryNum = 0;
  var bottomMenu1 = ["Need to Know", "Happening NOW", "Topics", "Find a Story"];
  var bottomMenu1Links = ["https://bcnnofficial.github.io/need-to-know/","https://bcnnofficial.github.io/happening-NOW/","https://bcnnofficial.github.io/topics/","https://bcnnofficial.github.io/find-a-story/"];
  var bottomMenu2 = ["Contact Us","Q&amp;A", "Need Help?","Feedback"];
  var bottomMenu2Links = ["https://bcnnofficial.github.io/contact-us/","https://bcnnofficial.github.io/q-and-a/","https://bcnnofficial.github.io/need-help/","https://bcnnofficial.github.io/feedback/"];
  var bottomMenu3 = ["Sources", "About Us"];
  var bottomMenu3Links = ["https://bcnnofficial.github.io/sources/", "https://bcnnofficial.github.io/about-us/"];
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
			//console.log(sheetData[randVal]);
			var storyTitle = document.createElement("div");
			thisSub.appendChild(storyTitle);
			storyTitle.innerHTML = sheetData[randVal].name;
			storyTitle.classList.add("end-storybox-title");

			var storyDate = document.createElement("div");
			thisSub.appendChild(storyDate);
			storyDate.innerHTML = sheetData[randVal].date;
			storyDate.classList.add("end-storybox-date");

			thisSub.innerHTML += "<img class='end-storybox-image' src='"+sheetData[randVal].img_link+"' alt='"+sheetData[randVal].alt+"'></img>";

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


//THIS IS FOR ADS
function InputAd (myClass, mySheet)
{
	SetSidebarMaterial();

	var adDivs = document.getElementsByClassName(myClass);
	console.log(adDivs);

	console.log(typeof myClass, typeof mySheet, myClass, mySheet);

	function PlaceAd(sheetData)
		{
			console.log("Bust", sheetData)
			for (var i = 0; i < adDivs.length; i++)
			{
				var randVal = Math.floor(Math.random() * sheetData.length);

				adDivs[i].innerHTML = "<div class=''>ADVERTISEMENT</div><a href='"+sheetData[randVal].link+"'><img class='ad-image' src='"+sheetData[randVal].img_link+"' alt='"+sheetData[randVal].description+"'></a>"+"<div class=''>"+sheetData[randVal].disclaimer+"</div>";
			}
		}

		getSheetData({
			sheetID: "112HzQOGgjzXqQ-PrHVClEZc4e35z5w99GazrobXq_qM",
			sheetName: mySheet,
			query: 'SELECT *',
			callback: PlaceAd,
		});
}


//	THIS IS FOR SETTING THE SIDEBAR MATERIAL OF STORIES
var currentHeight = 0;
var topicCounter = 0;
//ERROR TO BE FIXED: IF GOING FROM MOBILE VIEW TO DESKTOP VIEW, WAY MORE ADS THAN WHAT THE PAGE CAN FIT ARE GENERATED
function SetSidebarMaterial()
{
	currentHeight = 0;
	var rightBarArray = document.getElementsByClassName("story-right-material");
	var rightBar = rightBarArray[0];
	var bodyArray = document.getElementsByClassName("story-body-container");
	console.log(bodyArray);
	var bodyRect = bodyArray[0].getBoundingClientRect();
	var myHeight = (bodyRect.bottom - bodyRect.top);
	//rightBar.setAttribute("style","height:"+myHeight+"px");

	var ourTopicElements = document.getElementsByClassName("story-topic");
	var ourTopics = [ourTopicElements[0].innerHTML]
	if (ourTopicElements.length > 1)
	{
		for (var i = 1; i < ourTopicElements.length; i++)
		{
			ourTopics.push(ourTopicElements[i].innerHTML);
		}
	}
	console.log(ourTopics);

	function GenerateOnTopicFirst(sheetData)
	{
		var myOntopic = document.createElement("div");
		rightBar.appendChild(myOntopic);
		myOntopic.classList.add("story-right-ontopic");

		var myTitle = document.createElement("div");
		myOntopic.appendChild(myTitle);
		myTitle.innerHTML = "See More About " + sheetData[0].topic;
		myTitle.classList.add("story-right-ontopic-title");

		var myContainer = document.createElement("div");
		myOntopic.appendChild(myContainer);
		myContainer.classList.add("story-right-ontopic-article-container")

		for (var i = 0; i < 3; i++)
		{
			var randVal = Math.floor(Math.random()*sheetData.length);
			var myArticle = document.createElement("div");
			myContainer.appendChild(myArticle);
			myArticle.innerHTML = "<a href='"+sheetData[randVal].link+"'>"+sheetData[randVal].name+"</a>";
			myArticle.classList.add("story-right-ontopic-article")
		}
	}
	currentHeight += 1000;

	getSheetData({
		sheetID: "1fWIH-9n4cbj2R6sSWUmsjCw2d00Ues2_jRdMAToMFZk",
		sheetName: ourTopics[0],
		query: 'SELECT *',
		callback: GenerateOnTopicFirst,
	});
	console.log(topicCounter);

	
	while(currentHeight < myHeight)
	{
		var myAd = document.createElement("div");
		rightBar.appendChild(myAd);
		myAd.classList.add("story-right-ad-container");
		myAd.classList.add("ads-all");
		currentHeight += 1000;
		if (currentHeight > myHeight)
		{
			break;
		}

		topicCounter += 1;
		if (topicCounter < ourTopics.length)
		{
			function GenerateOnTopicFirst(sheetData)
			{
				var myOntopic = document.createElement("div");
				rightBar.appendChild(myOntopic);
				myOntopic.classList.add("story-right-ontopic");

				var myTitle = document.createElement("div");
				myOntopic.appendChild(myTitle);
				myTitle.innerHTML = "See More About " + sheetData[0].topic;
				myTitle.classList.add("story-right-ontopic-title");

				var myContainer = document.createElement("div");
				myOntopic.appendChild(myContainer);
				myContainer.classList.add("story-right-ontopic-article-container")

				for (var i = 0; i < 3; i++)
				{
					var randVal = Math.floor(Math.random()*sheetData.length);
					var myArticle = document.createElement("div");
					myContainer.appendChild(myArticle);
					myArticle.innerHTML = "<a href='"+sheetData[randVal].link+"'>"+sheetData[randVal].name+"</a>";
					myArticle.classList.add("story-right-ontopic-article")
				}
			}
			currentHeight += 1000;
		

			getSheetData({
				sheetID: "1fWIH-9n4cbj2R6sSWUmsjCw2d00Ues2_jRdMAToMFZk",
				sheetName: ourTopics[topicCounter],
				query: 'SELECT *',
				callback: GenerateOnTopicFirst,
			});
			console.log(topicCounter);
		}
	}
}

//THIS IS FOR TOPIC AND OTHER THINGS WHERE WE WANT TO FILL A CONTAINER WITH STORIES
function FillWithStories (myID, mySheet)
{
	var numOfStories = 4;
	
	
	function GenerateStory(sheetData)
	{
		var container = document.getElementsByClassName(myID)[0];

		console.log(myID, mySheet);

		console.log(container);

		for (var i = 0; i < numOfStories; i++)
		{
			//console.log(container);
			var storyBoxLink = document.createElement("a");
			container.appendChild(storyBoxLink);

			var storyBox = document.createElement("div");
			storyBoxLink.appendChild(storyBox);
			storyBox.classList.add("end-storybox");

			var storySub = document.createElement("div");
			storyBox.appendChild(storySub);
			storySub.classList.add("end-storybox-subcontainer"); 
			storySub.setAttribute('id', mySheet+"myStrBox"+i)

			var randVal = Math.floor(Math.random() * sheetData.length);

			var storyTitle = document.createElement("div");
			storySub.appendChild(storyTitle);
			storyTitle.innerHTML = sheetData[randVal].name;
			storyTitle.classList.add("end-storybox-title");

			var storyDate = document.createElement("div");
			storySub.appendChild(storyDate);
			storyDate.innerHTML = sheetData[randVal].date;
			storyDate.classList.add("end-storybox-date");

			storySub.innerHTML += "<img class='end-storybox-image' src='"+sheetData[randVal].img_link+"' alt='"+sheetData[randVal].alt+"'></img>";

			storyBoxLink.setAttribute('href',sheetData[randVal].link);

			var storyDisclaimer = document.createElement("div");
			storySub.appendChild(storyDisclaimer);
			storyDisclaimer.innerHTML = sheetData[randVal].disclaimer;
			storyDisclaimer.classList.add("end-storybox-date");
		}
	}

	getSheetData({
		sheetID: "1fWIH-9n4cbj2R6sSWUmsjCw2d00Ues2_jRdMAToMFZk",
		sheetName: mySheet,
		query: 'SELECT *',
		callback: GenerateStory,
	});
}

var count = 0;

function waitToExecute(waitTime, classToCheck, theFunction, para1, para2) {
	setTimeout(function () {
		var myDivs = document.getElementsByClassName(classToCheck);
		console.log(myDivs);
		console.log(myDivs.length);
		if (myDivs.length == 0 || count == 5) 
		{
			count++;
			waitToExecute(waitTime, classToCheck, theFunction, para1, para2);
		} 
		else 
		{
			theFunction(para1, para2);
		}
	}, waitTime)
}
