function GenerateTopic (storyName, sheetLink)
{
    function sheetDataHandler(sheetData)
    {
        var theTitle = " ";

        var footnoteCount = 1;

        var container = document.getElementsByClassName("totalinformer")[0];

        var myPreceeder = document.createElement("div");
        container.appendChild(myPreceeder);
        myPreceeder.classList.add("topic-preceeder");
        myPreceeder.innerHTML = "TOPIC:";

        var topicSize = sheetData.length;

        for (var i = 0; i < topicSize; i++)
        {
            var myRow = sheetData[i].info1;
            if (myRow == "PG")
            {
                var thisBody = document.getElementsByClassName("topic-body-text")[0]
            
                var myPg = document.createElement("div");
                thisBody.appendChild(myPg);
                myPg.classList.add("topic-info");
                myPg.innerHTML = sheetData[i].info2;
            }
            else if (myRow == "ST")
            {
                var thisBody = document.getElementsByClassName("topic-body-text")[0]
            
                var mySt = document.createElement("div");
                thisBody.appendChild(mySt);
                mySt.classList.add("topic-subsection-title");
                mySt.innerHTML = sheetData[i].info2;
            }
            else if (myRow == "IMAGE")
            {
                var thisBody = document.getElementsByClassName("topic-body-text")[0]

                var imageDiv = document.createElement("div");
                thisBody.appendChild(imageDiv);
                imageDiv.classList.add("topic-image-and-caption");

                imageDiv.innerHTML += "<img class='topic-image' src='"+sheetData[i].info2+"' alt='"+sheetData[i].info3+"'>";
                var imageCapDiv = document.createElement("div");
                imageDiv.appendChild(imageCapDiv);
                imageCapDiv.classList.add("topic-image-caption");
                imageCapDiv.innerHTML = sheetData[i].info4;
                if (sheetData[i].info5 != "NONE")
                {
                    imageCapDiv.innerHTML += "<sup style=\"font-size:70%\"><span class='footnote' id='ftn"+i+"' onclick=\"FootNote('ftn"+i+"','"+sheetData[i].info5+"');\">["+footnoteCount+"]</span></sup>";
                    footnoteCount++;
                }
            }
            else if (myRow == "TITLE")
            {
                var myTitle = document.createElement("div");
                container.appendChild(myTitle);
                myTitle.classList.add("topic-header");
                myTitle.innerHTML = sheetData[i].info2;

                theTitle = sheetData[i].info2;

                document.title = "BCNN: "+sheetData[i].info2+" (Topic)"
            }
            else if (myRow == "NOTE")
            {
                var myNote = document.createElement("div");
                container.appendChild(myNote);
                myNote.classList.add("topic-noter");
                myNote.innerHTML = sheetData[i].info2;
            }
            else if (myRow == "BODYSTART")
            {
                var myBody = document.createElement("div");
                container.appendChild(myBody);
                myBody.classList.add("topic-body-text")
            }
            else if (myRow == "TABLESTART")
            {
                var thisBody = document.getElementsByClassName("topic-body-text")[0]

                var myTableContainer = document.createElement("div");
                thisBody.appendChild(myTableContainer);
                myTableContainer.classList.add("topic-detailer-informer");

                var myTable = document.createElement("table")
                myTableContainer.appendChild(myTable);
                myTable.classList.add("topic-detailer");
            }
            else if (myRow == "TABLE")
            {
                var thisTable = document.getElementsByClassName("topic-detailer")[0];
                
                var myCont = document.createElement("tr");
                thisTable.appendChild(myCont);

                var myQ = document.createElement("th");
                myCont.appendChild(myQ);
                myQ.classList.add("topic-question");
                myQ.innerHTML = sheetData[i].info2;

                var myA = document.createElement("th");
                myCont.appendChild(myA);
                myA.classList.add("topic-answer");
                myA.innerHTML = sheetData[i].info3;
            }
            else if (myRow == "BREAK")
            {
                var thisBody = document.getElementsByClassName("topic-body-text")[0]

                thisBody.innerHTML += "<div class='topic-story-section'><strong><em>CHECK OUT STORIES RELATED TO "+theTitle+"</em></strong><br></div>";
                thisBody.innerHTML += "<div class='topic-stories-collection' id='phillip-stories'></div> "
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
