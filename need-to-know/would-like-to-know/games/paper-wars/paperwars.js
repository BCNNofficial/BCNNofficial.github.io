function activateGame() {
    $(".game-start-button").remove();
    var container = document.getElementsByClassName("game-container")[0];

    var subContainer = document.createElement("div");
    container.appendChild(subContainer);
    subContainer.classList.add("pw-sub-container")

    var guiContainer = document.createElement("div");
    container.appendChild(guiContainer);
    guiContainer.classList.add("pw-gui-container");

    var submitButtonDiv = document.createElement("div");
    guiContainer.appendChild(submitButtonDiv);
    submitButtonDiv.classList.add("pw-submit-button-div");
    var submitButton = document.createElement("button");
    submitButtonDiv.appendChild(submitButton);
    submitButton.setAttribute("id", "pw-submit-button")
    submitButton.setAttribute("type", "button");
    submitButton.setAttribute("onclick", "submitResponse();")
    submitButton.innerHTML = "SUBMIT";

    var inputBarContainer = document.createElement("div");
    guiContainer.appendChild(inputBarContainer);
    inputBarContainer.classList.add("pw-input-bar");
    var inputBar = document.createElement("input");
    inputBarContainer.appendChild(inputBar);
    inputBar.setAttribute("type", "text");
    inputBar.setAttribute("id", "pw-input-bar");
    inputBar.setAttribute("name", "command");
    inputBar.setAttribute("placeholder", "Your command here");

    //console.log("is this even being accessed?")
    $(document).on("keypress", "#pw-input-bar", function (e) {
        console.log("is THIS being accessed?");
        if (e.key == 'Enter') 
        {
            submitResponse();
        }
    })

    subContainer.innerHTML = "WELCOME TO PAPER WARS.<br>Enter \"Start\" to start the game."
}

function submitResponse () {
    console.log("RESPONSE SUBMITTED");

    var container = document.getElementsByClassName("pw-sub-container")[0];
    var inputBar = document.getElementById("pw-input-bar");
    var ourInput = inputBar.value;

    console.log(ourInput);

    if(ourInput == "Start") {
        container.innerHTML += "<br>Unforunately, this game has absolutely no functionality whatsoever. Please come back another time."
    }

    container.scrollTop = container.scrollHeight;
}
