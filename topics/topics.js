var ourCoverage = [];

function InitiateKnower()
{
    $(".coverage-box").remove();
    $(".no-results").remove();

    var container = document.getElementById("know-container");
    var searchBar = document.getElementById("Title");
    var searchfor = searchBar.value;
    if(searchfor != "")
    {
        searchfor = titleCase(searchfor)
        tempStor = searchfor; //console.log(tempStor);
        searchfor = EarthHyphen(searchfor); //console.log(searchfor == undefined);
        if (searchfor == undefined) {searchfor = tempStor}
        var queryString = "SELECT * WHERE B contains \""+searchfor+"\"";
    }
    console.log(queryString);

    function sheetDataHandler(sheetData)
    {
        if (sheetData.length<1)
        {
            var noResults = document.createElement("div");
            container.appendChild(noResults);
            noResults.innerHTML = "&ensp;Bust. Your search turned up no results.";
            noResults.classList.add("no-results");
        }
        for (var i = 0; i < sheetData.length; i++)
        {
            
            var coverageBox = document.createElement("div");
            container.appendChild(coverageBox);
            coverageBox.classList.add("coverage-box");
            coverageBox.setAttribute("style", "background-image: linear-gradient(to right, "+sheetData[i].color+", "+sheetData[i].color2+");");

            var coverageSubBox = document.createElement("div");
            coverageBox.appendChild(coverageSubBox);
            coverageSubBox.classList.add("coverage-sub");

            var coverageImgDiv = document.createElement("div");
            coverageSubBox.appendChild(coverageImgDiv);
            coverageImgDiv.classList.add("coverage-img-div");
            coverageImgDiv.innerHTML = "<img class='coverage-img' src='"+sheetData[i].img_link+"'><br>"+sheetData[i].disclaimer;

            var coverageTitle = document.createElement("div");
            coverageSubBox.appendChild(coverageTitle);
            coverageTitle.classList.add("coverage-title");
            coverageTitle.innerHTML = "<a href='"+sheetData[i].link+"'>TOPIC: " + sheetData[i].name + "</a>";

            var coverageDesc = document.createElement("div");
            coverageSubBox.appendChild(coverageDesc);
            coverageDesc.classList.add("coverage-desc");
            coverageDesc.innerHTML = sheetData[i].first_paragraph;

            var coverageStoryTop = document.createElement("div");
            coverageSubBox.appendChild(coverageStoryTop);
            coverageStoryTop.classList.add("coverage-story-top")
            coverageStoryTop.innerHTML = "CHECK OUT STORIES RELATED TO THIS TOPIC"

            var coverageStoryContainer = document.createElement("div");
            coverageSubBox.appendChild(coverageStoryContainer);
            coverageStoryContainer.classList.add("coverage-story-container")

            var coverageStoryUpContainer = document.createElement("div");
            coverageStoryContainer.appendChild(coverageStoryUpContainer);
            coverageStoryUpContainer.classList.add("coverage-story-up")
            coverageStoryUpContainer.setAttribute("id", sheetData[i].finder);

            function sheetDataHandler2(sheetData2)
            {
                console.log(sheetData2)
                for (var j = 0; j < sheetData2.length; j++)
                {
                    var thisContainer = document.getElementById(sheetData2[0].finder);
    
                    if ((window.innerWidth * 3 / 4) > (window.innerHeight))
                    {
                        var myWidth = sheetData2.length * 300 + 40;
                        thisContainer.setAttribute("style", "width: "+myWidth+"px");
                    }
                    else
                    {
                        var myWidth = sheetData2.length * 590 + 50;
                        thisContainer.setAttribute("style", "width: "+myWidth+"px");
                    }

                    var coverageStoryLink = document.createElement("a");
                    thisContainer.appendChild(coverageStoryLink);
                    coverageStoryLink.setAttribute("href",sheetData2[j].link)

                    var coverageStoryBox = document.createElement("div");
                    coverageStoryLink.appendChild(coverageStoryBox);
                    coverageStoryBox.classList.add("coverage-storybox");

                    var coverageStorySub = document.createElement("div");
                    coverageStoryBox.appendChild(coverageStorySub);
                    coverageStorySub.classList.add("coverage-story-sub");

                    var coverageStoryTitle = document.createElement("div");
                    coverageStorySub.appendChild(coverageStoryTitle);
                    coverageStoryTitle.classList.add("coverage-story-title");
                    coverageStoryTitle.innerHTML = sheetData2[j].name;

                    var coverageStoryDate = document.createElement("div");
                    coverageStorySub.appendChild(coverageStoryDate);
                    coverageStoryDate.classList.add("coverage-story-date");
                    coverageStoryDate.innerHTML = sheetData2[j].date;

                    var coverageStoryImg = document.createElement("div");
                    coverageStorySub.appendChild(coverageStoryImg);
                    coverageStoryImg.classList.add("coverage-story-img-div");
                    coverageStoryImg.innerHTML = "<img class='coverage-story-img' src='"+sheetData2[j].img_link+"' alt='"+sheetData2[j].alt+"'>";

                    var coverageStoryDisc = document.createElement("div");
                    coverageStorySub.appendChild(coverageStoryDisc);
                    coverageStoryDisc.classList.add("coverage-story-disc");
                    coverageStoryDisc.innerHTML = sheetData2[j].disclaimer;
                }
            }

            getSheetData({
                sheetID: "1fWIH-9n4cbj2R6sSWUmsjCw2d00Ues2_jRdMAToMFZk",
                sheetName: sheetData[i].name,
                query: "SELECT *",
                callback: sheetDataHandler2,
            });
        }
    }

    if (searchfor != "")
    {
        getSheetData({
            sheetID: "1Fz7QJy7ek0xH8D8HoGACmjHoJnMUdFG4tZhfIO_onag",
            sheetName: "All",
            query: queryString,
            callback: sheetDataHandler,
        });
    }  
    else
    {
        getSheetData({
            sheetID: "1Fz7QJy7ek0xH8D8HoGACmjHoJnMUdFG4tZhfIO_onag",
            sheetName: "All",
            query: "SELECT *",
            callback: sheetDataHandler,
        });
    }
}

function PlaceEnterListener() 
{
    console.log("is this even being accessed?")
    $(document).on("keypress", "#Title", function (e) {
        console.log("is THIS being accessed?");
        if (e.key == 'Enter') 
        {
            InitiateKnower();
        }
    })
}

//from https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }
 
 function EarthHyphen(str)
 {
    for (var i = 1; i <= 8; i++)
    {
        var nameCheck = "Earth " + i;
        if (nameCheck == str)
        {
            return ("Earth-"+i);
            break;
        }
    }
    numberWord = ["one","two","three","four","five","six","seven","eight"]
    numberWordCap = ["One","Two","Three","Four","Five","Six","Seven","Eight"]
    for (var i = 0; i < 8; i++)
    {
        var nameCheck = "Earth " + numberWordCap[i];
        if(nameCheck == str)
        {
            var myNum = i+1;
            return ("Earth-"+myNum);
            break;
        }
    }
    for (var i = 0; i < 8; i++)
        {
            var nameCheck = "Earth-" + numberWord[i];
            if(nameCheck == str)
            {
                var myNum = i+1;
                return ("Earth-"+myNum);
                break;
            }
        }
 }
