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
        /*
        searchfor = titleCase(searchfor)
        tempStor = searchfor; //console.log(tempStor);
        searchfor = EarthHyphen(searchfor); //console.log(searchfor == undefined);
        if (searchfor == undefined) {searchfor = tempStor}
        */
        searchfor = searchfor.toUpperCase();
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

            if(sheetData[i].img_link != "none")
            {
                var coverageImgDiv = document.createElement("div");
                coverageSubBox.appendChild(coverageImgDiv);
                coverageImgDiv.classList.add("coverage-img-div");
                coverageImgDiv.innerHTML = "<img class='coverage-img' src='"+sheetData[i].img_link+"'>";
                if (sheetData[i].disclaimer != null)
                {
                    coverageImgDiv.innerHTML += "<br>"+sheetData[i].disclaimer;
                }
            }

            var coverageTitle = document.createElement("div");
            coverageSubBox.appendChild(coverageTitle);
            coverageTitle.classList.add("coverage-title");
            coverageTitle.innerHTML = "<a href='"+sheetData[i].file_name+"'>" + sheetData[i].name + "</a>";

            var coverageDesc = document.createElement("div");
            coverageSubBox.appendChild(coverageDesc);
            coverageDesc.classList.add("coverage-desc");
            coverageDesc.innerHTML = sheetData[i].description;
        }
    }

    if (searchfor != "")
    {
        getSheetData({
            sheetID: "1vvIlXNNQh9I5oirZVG2MpT6OlLB3ItnFZwj-3iVXteg",
            sheetName: "All",
            query: queryString,
            callback: sheetDataHandler,
        });
    }  
    else
    {
        getSheetData({
            sheetID: "1vvIlXNNQh9I5oirZVG2MpT6OlLB3ItnFZwj-3iVXteg",
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
