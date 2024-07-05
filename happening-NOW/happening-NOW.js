function InitiateHappening ()
{   
    $(".story-container").remove();
    console.log("I am here");
    var container = document.getElementById("newest-stories-container");
    var NOSinput = document.getElementById("Number")
    
    var numOfStories = parseInt(NOSinput.value, 10);

    console.log(numOfStories);
    console.log(typeof numOfStories)
    console.log(typeof numOfStories === "number" && numOfStories > 0)
    if(typeof numOfStories === "number" && numOfStories > 0)
    {
        function sheetDataHandler(sheetData) {
            ourStoryNum = sheetData.length;
            for (var i = 0; i < numOfStories; i++)
            {
                console.log("enter loop iteration" + i);
                var ourcur = ourStoryNum - i - 1;
                if (ourcur < 0)
                {
                    var endOf = document.createElement("div");
                    container.appendChild(endOf);
                    endOf.classList.add("final-story");
                    endOf.innerHTML = "You have loaded the last story, so no more stories can be loaded. Congradulations.";
                    break;
                }
                var storyLink = document.createElement("a");
                container.appendChild(storyLink);
                storyLink.setAttribute("href",sheetData[i].link);

                var storyBox = document.createElement("div");
                storyLink.appendChild(storyBox);
                storyBox.classList.add("story-container");

                var storySubBox = document.createElement("div");
                storyBox.appendChild(storySubBox);
                storySubBox.classList.add("story-sub-container");

                var storyTitle = document.createElement("div");
                storySubBox.appendChild(storyTitle);
                storyTitle.classList.add("story-sub-title");
                storyTitle.innerHTML = sheetData[ourcur].name;

                var storyImage = document.createElement("div");
                storySubBox.appendChild(storyImage);
                storyImage.classList.add("story-sub-image-container");
                storyImage.innerHTML = "<img class='story-sub-image' src='"+sheetData[ourcur].img_link+"' alt='"+sheetData[ourcur].alt+"'>";

                var storyDisc = document.createElement("div");
                storySubBox.appendChild(storyDisc);
                storyDisc.classList.add("story-sub-disc");
                storyDisc.innerHTML = sheetData[ourcur].disclaimer;

                var storyText = document.createElement("div");
                storySubBox.appendChild(storyText);
                storyText.classList.add("story-sub-para");

                var storyTextSub = document.createElement("div");
                storyText.appendChild(storyTextSub);
                storyTextSub.classList.add("story-sub-sub-para")
                storyTextSub.innerHTML = sheetData[ourcur].first_paragraph;
            }
        };

        getSheetData({
            sheetID: "1fWIH-9n4cbj2R6sSWUmsjCw2d00Ues2_jRdMAToMFZk",
            sheetName: "All",
            query: 'SELECT *',
            callback: sheetDataHandler,
        });
    }
}
