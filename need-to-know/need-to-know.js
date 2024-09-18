var ourCoverage = [];

function InitiateKnower()
{
    $(".coverage-box").remove();

    var container = document.getElementById("know-container");
    var searchBar = document.getElementById("Title");
    var searchfor = searchBar.value;
    searchfor = searchfor.toUpperCase();
    var queryString = "SELECT * WHERE B contains \""+searchfor+"\"";

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
            coverageBox.setAttribute("style", "background-color: "+sheetData[i].color);

            var coverageSubBox = document.createElement("div");
            coverageBox.appendChild(coverageSubBox);
            coverageSubBox.classList.add("coverage-sub");

            var coverageTitle = document.createElement("div");
            coverageSubBox.appendChild(coverageTitle);
            coverageTitle.classList.add("coverage-title");
            coverageTitle.innerHTML = sheetData[i].name;

            var coverageDesc = document.createElement("div");
            coverageSubBox.appendChild(coverageDesc);
            coverageDesc.classList.add("coverage-desc");
            coverageDesc.innerHTML = sheetData[i].description;

            var coverageStoryTop = document.createElement("div");
            coverageSubBox.appendChild(coverageStoryTop);
            coverageStoryTop.classList.add("coverage-story-top")
            coverageStoryTop.innerHTML = "CHECK OUT STORIES RELATED TO THIS COVERAGE"

            var coverageStoryContainer = document.createElement("div");
            coverageSubBox.appendChild(coverageStoryContainer);
            coverageStoryContainer.classList.add("coverage-story-container")

            var coverageStoryUpContainer = document.createElement("div");
            coverageStoryContainer.appendChild(coverageStoryUpContainer);
            coverageStoryUpContainer.classList.add("coverage-story-up")
            coverageStoryUpContainer.setAttribute("id", sheetData[i].topic);

            function sheetDataHandler2(sheetData2)
            {
                for (var j = 0; j < sheetData2.length; j++)
                {
                    console.log(sheetData2[0].topic);
                    var thisContainer = document.getElementById(sheetData2[0].topic);
    
                    if ((window.innerWidth * 3 / 4) > (window.innerHeight))
                    {
                        var myWidth = sheetData2.length * 290 + 40;
                        thisContainer.setAttribute("style", "width: "+myWidth+"px");
                    }
                    else
                    {
                        var myWidth = sheetData2.length * 580 + 50;
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
            sheetID: "1pXrpCHUi0JTAlExJ_Q13ORWu43PD86J55TAPj7v5NAU",
            sheetName: "All",
            query: queryString,
            callback: sheetDataHandler,
        });
    }  
    else
    {
        getSheetData({
            sheetID: "1pXrpCHUi0JTAlExJ_Q13ORWu43PD86J55TAPj7v5NAU",
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
