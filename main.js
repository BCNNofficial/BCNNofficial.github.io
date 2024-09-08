function HomePageStuff()
{
    //first fill in the featured story section

    function sheetDataHandlerStory(sheetData)
    {
        console.log("Entdered the functon");

        var container = document.getElementById("featured-story");
        console.log(container);

        var randNum = Math.floor((Math.random()*sheetData.length));
        console.log(randNum);

        var subcontainerLink = document.createElement("a");
        container.appendChild(subcontainerLink);
        subcontainerLink.setAttribute("href", sheetData[randNum].link);

        var subcontainer = document.createElement("div");
        subcontainerLink.appendChild(subcontainer);
        subcontainer.classList.add("home-featured-story-subcontainer");

        var storyTitle = document.createElement("div");
        subcontainer.appendChild(storyTitle);
        storyTitle.classList.add("home-featured-story-title");
        storyTitle.innerHTML = sheetData[randNum].name;

        var subsubcontainer = document.createElement("div");
        subcontainer.appendChild(subsubcontainer);
        subsubcontainer.classList.add("story-featured-story-subsubcontainer")

        var storyImageContainer = document.createElement("div");
        subsubcontainer.appendChild(storyImageContainer);
        storyImageContainer.classList.add("home-featured-story-image-container")
        storyImageContainer.innerHTML = "<img class='home-featured-story-image' src='"+sheetData[randNum].img_link+"' alt='"+sheetData[randNum].alt+"'><br>"+sheetData[randNum].disclaimer;

        var storyText = document.createElement("div");
        subsubcontainer.appendChild(storyText);
        storyText.classList.add("home-featured-story-text");
        storyText.innerHTML = sheetData[randNum].first_paragraph;
    }

    getSheetData({
        sheetID: "1fWIH-9n4cbj2R6sSWUmsjCw2d00Ues2_jRdMAToMFZk",
        sheetName: "All",
        query: "SELECT *",
        callback: sheetDataHandlerStory,
    });

    //then fill in the topic section

    function sheetDataHandlerTopic(sheetData)
    {
        console.log("Entdered the functon");

        var container = document.getElementById("featured-topic");
        console.log(container);

        var randNum = Math.floor((Math.random()*sheetData.length));
        console.log(randNum);

        var subcontainerLink = document.createElement("a");
        container.appendChild(subcontainerLink);
        subcontainerLink.setAttribute("href", sheetData[randNum].link);

        var subcontainer = document.createElement("div");
        subcontainerLink.appendChild(subcontainer);
        subcontainer.classList.add("home-featured-topic-subcontainer");

        var storyTitle = document.createElement("div");
        subcontainer.appendChild(storyTitle);
        storyTitle.classList.add("home-featured-topic-title");
        storyTitle.innerHTML = "TOPIC: "+sheetData[randNum].name;

        var subsubcontainer = document.createElement("div");
        subcontainer.appendChild(subsubcontainer);
        subsubcontainer.classList.add("story-featured-topic-subsubcontainer")

        var storyImageContainer = document.createElement("div");
        subsubcontainer.appendChild(storyImageContainer);
        storyImageContainer.classList.add("home-featured-topic-image-container")
        storyImageContainer.innerHTML = "<img class='home-featured-topic-image' src='"+sheetData[randNum].img_link+"'><br>"+sheetData[randNum].disclaimer;

        var storyText = document.createElement("div");
        subsubcontainer.appendChild(storyText);
        storyText.classList.add("home-featured-topic-text");
        storyText.innerHTML = sheetData[randNum].first_paragraph;
    }

    getSheetData({
        sheetID: "1Fz7QJy7ek0xH8D8HoGACmjHoJnMUdFG4tZhfIO_onag",
        sheetName: "All",
        query: "SELECT *",
        callback: sheetDataHandlerTopic,
    });
    
    //finally fill in sources section

    function sheetDataHandlerSource(sheetData)
    {
        console.log("Entdered the functon");

        var container = document.getElementById("featured-source");
        console.log(container);

        var randNum = Math.floor((Math.random()*sheetData.length));
        console.log(randNum);

        var subcontainerLink = document.createElement("a");
        container.appendChild(subcontainerLink);
        subcontainerLink.setAttribute("href", "https://bcnnofficial.github.io/sources/"+sheetData[randNum].file_name);

        var subcontainer = document.createElement("div");
        subcontainerLink.appendChild(subcontainer);
        subcontainer.classList.add("home-featured-source-subcontainer");

        var storyTitle = document.createElement("div");
        subcontainer.appendChild(storyTitle);
        storyTitle.classList.add("home-featured-source-title");
        storyTitle.innerHTML = sheetData[randNum].name;

        var subsubcontainer = document.createElement("div");
        subcontainer.appendChild(subsubcontainer);
        subsubcontainer.classList.add("story-featured-source-subsubcontainer")

        var storyImageContainer = document.createElement("div");
        subsubcontainer.appendChild(storyImageContainer);
        storyImageContainer.classList.add("home-featured-source-image-container")
        storyImageContainer.innerHTML = "<img class='home-featured-source-image' src='https://bcnnofficial.github.io/sources/"+sheetData[randNum].img_link+"'><br>"+sheetData[randNum].disclaimer;

        var storyText = document.createElement("div");
        subsubcontainer.appendChild(storyText);
        storyText.classList.add("home-featured-source-text");
        storyText.innerHTML = sheetData[randNum].description;
    }

    getSheetData({
        sheetID: "1vvIlXNNQh9I5oirZVG2MpT6OlLB3ItnFZwj-3iVXteg",
        sheetName: "All",
        query: "SELECT *",
        callback: sheetDataHandlerSource,
    });
}