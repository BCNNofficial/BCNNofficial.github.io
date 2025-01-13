function GenerateFacts (storyName, sheetLink)
{
    function sheetDataHandler(sheetData)
    {
        var container = document.getElementsByClassName("totalinformer")[0];
    
        var header = document.createElement("div");
        container.appendChild(header);
        header.classList.add("facts-header-container");

        var topicList = document.createElement("div");
        header.appendChild(topicList);
        topicList.classList.add("facts-topics-list");

        var bodyer = document.createElement("div");
        container.appendChild(bodyer);
        bodyer.classList.add("facts-body-container");

        console.log(sheetData)

        var footnoteCount = 1;
        var storySize = sheetData.length
        var isComSec = false;
        var comSecLink = "none";

        var myType;

        for (var i = 0; i < storySize; i++)
        {
            var myRow = sheetData[i].info1
            if (myRow == "PG")
            {
                var myPg = document.createElement("div");
                bodyer.appendChild(myPg);
                myPg.classList.add("facts-body-text");
                myPg.innerHTML = sheetData[i].info2;
            }
            else if (myRow == "ST")
            {
                var mySt = document.createElement("div");
                bodyer.appendChild(mySt);
                mySt.classList.add("facts-subsection-title");
                mySt.innerHTML = sheetData[i].info2;
            }
            else if (myRow == "AD") 
            {
                var myAd = document.createElement("div");
                bodyer.appendChild(myAd);
                myAd.classList.add("ad-div-mobile-instory");
                myAd.classList.add(sheetData[i].info2);
            }
            else if (myRow == "IMAGE")
            {
                var imageDiv = document.createElement("div");
                bodyer.appendChild(imageDiv);
                imageDiv.classList.add("facts-image-and-caption");

                imageDiv.innerHTML += "<img class='facts-body-image' src='"+sheetData[i].info2+"' alt='"+sheetData[i].info3+"'>";
                var imageCapDiv = document.createElement("div");
                imageDiv.appendChild(imageCapDiv);
                imageCapDiv.classList.add("facts-image-caption");
                imageCapDiv.innerHTML = sheetData[i].info4;
                if (sheetData[i].info5 != "NONE")
                {
                    imageCapDiv.innerHTML += "<sup style=\"font-size:70%\"><span class='footnote' id='ftn"+i+"' onclick=\"FootNote('ftn"+i+"','"+sheetData[i].info5+"');\">["+footnoteCount+"]</span></sup>";
                }
                //<sup style="font-size:70%"><span classs='footnote' id='ftn1'onclick="FootNote('ftn1','Image source:https\:\/\/pixabay.com/illustrations/interior-design-television-828545/');">[1]</span></sup>
            }
            else if (myRow == "TOPIC")
            {
                var topicList = document.getElementsByClassName("facts-topics-list")[0];
                topicList.innerHTML += "<a class='facts-topic' href='"+sheetData[i].info3+"'>"+sheetData[i].info2+"</a>&emsp;";
            }
            else if (myRow == "TITLE")
            {
                document.title = "BCNN: "+sheetData[i].info2;
                
                var myTitle = document.createElement("div");
                header.appendChild(myTitle);
                myTitle.classList.add("facts-title");
                if(myType == "LIST") {
                    myTitle.innerHTML = "<span class='facts-type facts-list'>" + myType + "</span>" + sheetData[i].info2;
                }  
                if(myType == "OPINION") {
                    myTitle.innerHTML = "<span class='facts-type facts-opinion'>" + myType + "</span>" + sheetData[i].info2;  
                }
                if(myType == "FOOD REVIEW") {
                    myTitle.innerHTML = "<span class='facts-type facts-food-review'>" + myType + "</span>" + sheetData[i].info2;
                }
                var headerDetails = document.createElement("div");
                header.appendChild(headerDetails);
                headerDetails.classList.add("facts-writing-details");

                var headerDetailsText = document.createElement("div");
                headerDetails.appendChild(headerDetailsText);
                headerDetailsText.classList.add("facts-writing-details-text")
            }
            else if (myRow == "AUTHOR")
            {
                var myText = document.getElementsByClassName("facts-writing-details-text")[0]
                myText.innerHTML += "<span class='facts-author'><a href='https://bcnnofficial.github.io/error-404'>"+sheetData[i].info2+"</a></span><br>";
            }
            else if (myRow == "DATE")
            {
                var myText = document.getElementsByClassName("facts-writing-details-text")[0]
                myText.innerHTML += sheetData[i].info2;

                var buttonLink = ['https://bcnnofficial.github.io/error-404', 'https://bcnnofficial.github.io/error-404', 'https://bcnnofficial.github.io/error-404'];
                var buttonImg = ['https://raw.githubusercontent.com/BCNNofficial/BCNNofficial.github.io/main/sample-box.png', 'https://raw.githubusercontent.com/BCNNofficial/BCNNofficial.github.io/main/sample-box.png', 'https://raw.githubusercontent.com/BCNNofficial/BCNNofficial.github.io/main/sample-box.png'];
                for (var p = 0; p < 3; p++)
                {
                    var buttonDiv = document.createElement("div");
                    headerDetails.appendChild(buttonDiv);
                    buttonDiv.classList.add("story-social-media-icon")
                    buttonDiv.innerHTML = "<a href='"+buttonLink[p]+"'><img class='story-social-media-icon-button' src='"+buttonImg[p]+"' alt='social media button'></a>"
                }
            }
            else if (myRow == "COMSEC")
            {
                isComSec = true;
                comSecLink = sheetData[i].info2;
            }
            else if (myRow == "TYPE") {
                myType = sheetData[i].info2;
            }
        }

        var storyEndDiv = document.createElement("div");
        bodyer.appendChild(storyEndDiv);
        storyEndDiv.classList.add("story-end-section");
        storyEndDiv.innerHTML += "<div class='story-disclaimer'>All reporting, photos, and original writing is property of BCNN unless other attribution is stated. <a href='https://bcnnofficial.github.io/about-us/'>Click here to learn more about our policies and mission</a>.<br></div>";
        if (isComSec)
        {
            var comSecDiv = document.createElement("div");
            storyEndDiv.appendChild(comSecDiv);
            comSecDiv.classList.add("thoughts");
            comSecDiv.innerHTML += "Have thoughts on what's above? Click <a style='font-style: italic;' href='"+comSecLink+"'>here</a> to join in on the discussion, at the Official BCNN Discussion Page!";
        }
        var notified = document.createElement("div");
        storyEndDiv.appendChild(notified);
        notified.classList.add("sign-up-container");
        notified.innerHTML += "<div class='sign-up-text'><br>WANT TO BE NOTIFIED OF FUTURE BCNN STORIES? CLICK <a href='https://docs.google.com/forms/d/e/1FAIpQLSdYf87ie_UYGgL8p2K6c1yHvJavSYdxY3AxM_K0WLqIBYzkpg/viewform?usp=sf_link'>HERE</a> TO JOIN THE OFFICIAL BCNN NEWSLETTER AND RECIEVE KEY BCNN INFORMATION FOR THE REST OF YOUR LIFE.<br><br></div>";
    
        storyEndDiv.innerHTML += "<br><br>";

        for (var p = 0; p < 3; p++)
        {
            var buttonDiv = document.createElement("div");
            storyEndDiv.appendChild(buttonDiv);
            buttonDiv.classList.add("story-social-media-icon")
            buttonDiv.innerHTML = "<a href='"+buttonLink[p]+"'><img class='story-social-media-icon-button' src='"+buttonImg[p]+"' alt='social media button'></a>"
        }
    }

    getSheetData({
        sheetID: sheetLink,
        sheetName: storyName,
        query: "SELECT *",
        callback: sheetDataHandler,
    });
}
