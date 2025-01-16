var ourCategories = ["Facts", "Lists", "Quizzes", "Games"];

function InitiateWouldLikeToKnow() {
    var selectContainer = document.getElementById("wltk-chooser");
    for (var i = 0; i < ourCategories.length; i++) {
        selectContainer.innerHTML += "<option value='"+ourCategories[i]+"'>"+ourCategories[i]+"</option>";
    }
}

function InitiateKnower()
{
    $(".wltk-story-container").remove();
    $(".no-results").remove();

    var container = document.getElementById("know-container");
    var searchBar = document.getElementById("Title");
    var searchfor = searchBar.value;
    searchfor = searchfor.toUpperCase();
    var queryString = "SELECT * WHERE C contains \""+searchfor+"\"";
    console.log(queryString);

    var categoryMenu = document.getElementById("wltk-chooser");
    var categoryValue = categoryMenu.value;

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
            var storyContainerLink = document.createElement("a");
            container.appendChild(storyContainerLink);
            storyContainerLink.setAttribute("href", sheetData[i].link);

            var storyContainer = document.createElement("div");
            storyContainerLink.appendChild(storyContainer);
            storyContainer.classList.add("wltk-story-container")

            if (sheetData[i].type == "STORY") {
                storyContainer.classList.add("box-story")
            }
            if (sheetData[i].type == "LIST") {
                storyContainer.classList.add("box-list")
            }
            if (sheetData[i].type == "QUIZ") {
                storyContainer.classList.add("box-quiz")
            }
            if (sheetData[i].type == "GAME") {
                storyContainer.classList.add("box-game")
            }

            var storySubContainer = document.createElement("div");
            storyContainer.appendChild(storySubContainer);
            storySubContainer.classList.add("wltk-story-subcontainer")

            var storyTitle = document.createElement("div");
            storySubContainer.appendChild(storyTitle);
            storyTitle.classList.add("wltk-story-title")
            storyTitle.innerHTML = sheetData[i].name;

            var storyImgContainer = document.createElement("div");
            storySubContainer.appendChild(storyImgContainer);
            storyImgContainer.classList.add("wltk-story-img-container")
            storyImgContainer.innerHTML = "<img class='wltk-story-img' src='"+sheetData[i].img_link+"' alt='"+sheetData[i].alt+"'>";
        
            var storyDate = document.createElement("div");
            storySubContainer.appendChild(storyDate);
            storyDate.classList.add("wltk-story-date");
            storyDate.innerHTML = sheetData[i].date;

            var storyDesc = document.createElement("div");
            storySubContainer.appendChild(storyDesc);
            storyDesc.classList.add("wltk-story-desc");
            storyDesc.innerHTML = sheetData[i].first_paragraph;
        }   
    }

    if (searchfor != "")
    {
        getSheetData({
            sheetID: "1fWIH-9n4cbj2R6sSWUmsjCw2d00Ues2_jRdMAToMFZk",
            sheetName: categoryValue,
            query: queryString,
            callback: sheetDataHandler,
        });
    }  
    else
    {
        getSheetData({
            sheetID: "1fWIH-9n4cbj2R6sSWUmsjCw2d00Ues2_jRdMAToMFZk",
            sheetName: categoryValue,
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
