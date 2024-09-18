function FindStories ()
{
    //console.log("Button pressed");
    var myContainer = document.getElementById("search-results");

    myContainer.innerHTML = "";

    var titleSearchBox = document.getElementById("Title");
    var titleSearch = titleSearchBox.value;
    titleSearch = titleSearch.toUpperCase();
    console.log(titleSearch);
    //console.log(titleSearch);
    var topicMenu = document.getElementById("topic-chooser");
    //console.log(topicMenu);
    var topicValue = topicMenu.value;
    //console.log(topicValue);
    console.log(typeof titleSearch, typeof topicValue);

    var queryString = "SELECT * WHERE B contains \""+titleSearch+"\"";

    function InputNews(sheetData) {
        if (sheetData.length < 1)
        {
            var noResults = document.createElement("div");
            myContainer.appendChild(noResults);
            noResults.innerHTML = "Bust. Your search turned up no results.";
            noResults.classList.add("no-results");
        }
		for (var i = 0; i < sheetData.length; i++)
        {
            var resultLink = document.createElement("a");
            myContainer.appendChild(resultLink);
            resultLink.setAttribute("href",sheetData[i].link);
            
            var resultBox = document.createElement("div");
            resultLink.appendChild(resultBox);
            resultBox.classList.add("result-box");

            var resultTitle = document.createElement("div");
            resultBox.appendChild(resultTitle);
            resultTitle.innerHTML = sheetData[i].name;
            resultTitle.classList.add("result-title");

            var resultDate = document.createElement("div");
            resultBox.appendChild(resultDate);
            resultDate.innerHTML = sheetData[i].date;
            resultDate.classList.add("result-date");

            var resultParagraph = document.createElement("div");
            resultBox.appendChild(resultParagraph);
            resultParagraph.innerHTML = sheetData[i].first_paragraph;
            resultParagraph.classList.add("result-paragraph");
        }
	};

	// --==== QUERY EXAMPLES ====--
	// --==== USE LETTERS FOR COLUMN NAMES ====--
	//  'SELECT A,C,D WHERE D > 150'
	//  'SELECT * WHERE B = "Potato"'
	//  'SELECT * WHERE A contains "Jo"'
	//  'SELECT * WHERE C = "active" AND B contains "Jo"'
	//  "SELECT * WHERE E > date '2022-07-9' ORDER BY E DESC"
    if (titleSearch != "")
    {
        getSheetData({
            // sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
            sheetID: "1fWIH-9n4cbj2R6sSWUmsjCw2d00Ues2_jRdMAToMFZk",
            // sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
            sheetName: topicValue,
            query: queryString,
            callback: InputNews,
        });
    }
    else
    {
        getSheetData({
            // sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
            sheetID: "1fWIH-9n4cbj2R6sSWUmsjCw2d00Ues2_jRdMAToMFZk",
            // sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
            sheetName: topicValue,
            query: "SELECT *",
            callback: InputNews,
        });
    }
}

function FindAStoryInitiate()
{
    function InputNews (sheetData)
    {
        var selectContainer = document.getElementById("topic-chooser");
        for (var i = 0; i < sheetData.length; i++)
        {
            selectContainer.innerHTML += "<option value='"+sheetData[i].name+"'>"+sheetData[i].name+"</option>";
        }
    }

    getSheetData({
        sheetID: "1Fz7QJy7ek0xH8D8HoGACmjHoJnMUdFG4tZhfIO_onag",
        sheetName: "All",
        query: "SELECT *",
        callback: InputNews,
    });
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
