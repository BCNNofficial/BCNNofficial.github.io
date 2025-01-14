function loadMaterials (storyName, sheetLink) {
    function sheetDataHandler (sheetData) {
        console.log(sheetData);
        for (var i = 0; i < sheetData.length; i++) {
            console.log(sheetData[i].info1)
            if (sheetData[i].info1 == "TITLE") {
                var gameTitle = document.getElementsByClassName("game-title")[0];
                gameTitle.innerHTML = sheetData[i].info2;
            }
            else if (sheetData[i].info1 == "DESC") {
                console.log("DESC DETECTED")
                var gameDesc = document.getElementsByClassName("game-description")[0];
                if(gameDesc.innerHTML == "") {
                    gameDesc.innerHTML = sheetData[i].info2;
                }
                else {
                    gameDesc.innerHTML += "<br><br>" + sheetData[i].info2;
                }
            }
            else if (sheetData[i].info1 == "COMSEC") {
                var container = document.getElementsByClassName("totalinformer")[0];

                var comSecDiv = document.createElement("div");
                container.appendChild(comSecDiv);
                comSecDiv.classList.add("thoughts");
                comSecDiv.classList.add("games-thoughts")
                comSecDiv.innerHTML += "Have thoughts on what's above? Click <a style='font-style: italic;' href='"+sheetData[i].info2+"'>here</a> to join in on the discussion, at the Official BCNN Discussion Page!";
            }
        }
    }

    getSheetData({
        sheetID: sheetLink,
        sheetName: storyName,
        query: "SELECT *",
        callback: sheetDataHandler,
    });
}
