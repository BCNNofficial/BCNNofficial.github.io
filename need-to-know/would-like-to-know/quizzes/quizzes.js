var questions = [];
var answers = [];
var resultPoints = [];
var results = [];
var comseclink = "";

function sampleQuizLoader() {
    questions = [
        ["Phili ietrinsteo intianresi. Aeistneirtis ineris ieie ientros t oooo?", "/testphoto.jpg", "alt"],
        ["enritsoiuuu99999999999999?", "/testphoto.jpg", "alt"],
        ["qui?", "/testphoto.jpg", "alt"],
        ["I LOVE PHILLIP BALLL. DO YOU?", "/testphoto.jpg", "alt"]
    ]

    answers = [
        [ ["first", 1, 1], ["second", 2, 1], ["third", 3, 1], ["fourth", 4, 1], ["none", 1, 0] ],
        [ ["first", 1, 1], ["second", 2, 1], ["third", 3, 1], ["fourth", 4, 1], ["none", 1, 0] ],
        [ ["first", 1, 1], ["second", 2, 1], ["third", 3, 1], ["fourth", 4, 1], ["none", 1, 0] ],
        [ ["first", 1, 1], ["second", 2, 1], ["third", 3, 1], ["fourth", 4, 1], ["none", 1, 0] ]
    ]

    resultPoints = [0, 0, 0, 0];

    results = [
        ["you...", "0001", "/testphoto.jpg", "alt", "aerstiaerntsioanertsoi iertsi nsersers eer eere. iertsi nsersers eer eereiertsi nsersers eer eere iertsi nsersers eer eere. iertsi nsersers eer eere."],
        ["you...", "0010", "/testphoto.jpg", "alt", "299999999999999999999"],
        ["you...", "0011", "/testphoto.jpg", "alt", "etrs0ps9999st tini tei "],
        ["you...", "0100", "/testphoto.jpg", "alt", "erinstkk9  9 9 9 99 9 9 "],
        ["you...", "0101", "/testphoto.jpg", "alt", "sie 9 9 96666666666666661"],
        ["you...", "0110", "/testphoto.jpg", "alt", "S 8 98 18 3456789 4 5678 8 9"],
        ["you...", "0111", "/testphoto.jpg", "alt", "s7"],
        ["you...", "1000", "/testphoto.jpg", "alt", "02108210212"],
        ["you...", "1001", "/testphoto.jpg", "alt", "syqsitebntenrsenrsgne bebrnst ebnrst bnes btn"],
        ["you...", "1010", "/testphoto.jpg", "alt", "otitit i tinti 32t233333333"],
        ["you...", "1011", "/testphoto.jpg", "alt", "tseis2"],
        ["you...", "1100", "/testphoto.jpg", "alt", "ssq9aer87a0e8rs/aerslaers"],
        ["you...", "1101", "/testphoto.jpg", "alt", "erlsp09980 90 80 80 890 089 80 089"],
        ["you...", "1110", "/testphoto.jpg", "alt", "its"],
        ["you...", "1111", "/testphoto.jpg", "alt", "artesonatersintaersoi"]
    ];

    var container = document.getElementsByClassName("totalinformer")[0];

    var quizContainer = document.createElement("div");
    container.appendChild(quizContainer);
    quizContainer.classList.add("quiz-container");

    var quizSubContainer = document.createElement("div");
    quizContainer.appendChild(quizSubContainer);
    quizSubContainer.classList.add("quiz-sub-container");

    var quizTopicContainer = document.createElement("div");
    quizSubContainer.appendChild(quizTopicContainer);
    quizTopicContainer.classList.add("quiz-topic-container");

    var quizFrontContainer = document.createElement("div");
    quizSubContainer.appendChild(quizFrontContainer);
    quizFrontContainer.classList.add("quiz-front-container");

    var quizTopic = document.createElement("div");
    quizTopicContainer.appoendChild(quizTopic);
    quizTopic.classList.add("quiz-topic");
    quizTopic.innerHTML = "<a hre=''>Earth-u23823</a>";

    var quizTitle = document.createElement("div");
    quizFrontContainer.appendChild(quizTitle);
    quizTitle.classList.add("quiz-title");
    quizTitle.innerHTML = "WHERE IS PHILLIP? I DON'T KNOW! LET'S FIND OUT!";

    var quizDesc = document.createElement("div");
    quizFrontContainer.appendChild(quizDesc);
    quizDesc.classList.add("quiz-desc");
    quizDesc.innerHTML = "Who is Phillip Ball? If you are asking this question, you must be an absolute fool. Everyone knows who Phillip Ball is. This is all just a bunch of words, but it cannot be doubted that I love Phillip Ball.";

    var quizImgContainer = document.createElement("div");
    quizFrontContainer.appendChild(quizImgContainer);
    quizImgContainer.classList.add("quiz-front-img-container");
    quizImgContainer.innerHTML = "<img class='quiz-img-front' src='/testphoto.jpg' alt='bust'>";

    var quizStartButton = document.createElement("div");
    quizFrontContainer.appendChild(quizStartButton);
    quizStartButton.classList.add("quiz-start-button");
    quizStartButton.innerHTML = "START QUIZ";
    //quizStartButton.addEventListener("click", startQuiz);
    quizStartButton.setAttribute("onclick","startQuiz()")
}

function loadQuizInfo (storyName, sheetLink) {
    var numOfResults = document.createElement("div");
    document.body.appendChild(numOfResults);
    numOfResults.classList.add("storage");
    numOfResults.classList.add("num-of-results");

    function sheetDataHandler (sheetData) {
        console.log(sheetData);
        var quizSize = sheetData.length;

        var container = document.getElementsByClassName("totalinformer")[0];

        var quizContainer = document.createElement("div");
        container.appendChild(quizContainer);
        quizContainer.classList.add("quiz-container");

        var quizSubContainer = document.createElement("div");
        quizContainer.appendChild(quizSubContainer);
        quizSubContainer.classList.add("quiz-sub-container");

        var quizTopicContainer = document.createElement("div");
        quizSubContainer.appendChild(quizTopicContainer);
        quizTopicContainer.classList.add("quiz-topic-container");

        var quizFrontContainer = document.createElement("div");
        quizSubContainer.appendChild(quizFrontContainer);
        quizFrontContainer.classList.add("quiz-front-container");

        /*var quizTitle = document.createElement("div");
        quizFrontContainer.appendChild(quizTitle);
        quizTitle.classList.add("quiz-title");
        quizTitle.innerHTML = sheetData[i].info2;

        var quizDesc = document.createElement("div");
        quizFrontContainer.appendChild(quizDesc);
        quizDesc.classList.add("quiz-desc");
        quizDesc.innerHTML = sheetData[i].info3;

        var quizImgContainer = document.createElement("div");
        quizFrontContainer.appendChild(quizImgContainer);
        quizImgContainer.classList.add("quiz-front-img-container");
        quizImgContainer.innerHTML = "<img class='quiz-img-front' src='"+sheetData[i].info4+"' alt='"+sheetData[i].info5+"'>";

        var quizStartButton = document.createElement("div");
        quizFrontContainer.appendChild(quizStartButton);
        quizStartButton.classList.add("quiz-start-button");
        quizStartButton.innerHTML = "START QUIZ";
        //quizStartButton.addEventListener("click", startQuiz);
        quizStartButton.setAttribute("onclick","startQuiz()")*/

        var questionCounter = 0;
        var resultCounter = 0;

        for (var i = 0; i < quizSize; i++) {
            myRow = sheetData[i].info1;
            if (myRow == "END") {
                //console.log("Entered END")
                resultCounter++;
                var resultReveal = document.createElement("div");
                document.body.appendChild(resultReveal);
                resultReveal.classList.add("storage");
                resultReveal.classList.add("e"+resultCounter+"reveal");
                resultReveal.innerHTML = sheetData[i].info2;
                //console.log("created e"+resultCounter+"reveal with content " + sheetData[i].info2);

                var result = document.createElement("div");
                document.body.appendChild(result);
                result.classList.add("storage");
                result.classList.add("e"+resultCounter);
                result.innerHTML = sheetData[i].info3;

                var resultImgLink = document.createElement("div");
                document.body.appendChild(resultImgLink);
                resultImgLink.classList.add("storage");
                resultImgLink.classList.add("e"+resultCounter+"imglink");
                resultImgLink.innerHTML = sheetData[i].info4;

                var resultImgAlt = document.createElement("div");
                document.body.appendChild(resultImgAlt);
                resultImgAlt.classList.add("storage");
                resultImgAlt.classList.add("e"+resultCounter+"imgalt");
                resultImgAlt.innerHTML = sheetData[i].info5;

                var resultDesc = document.createElement("div");
                document.body.appendChild(resultDesc);
                resultDesc.classList.add("storage");
                resultDesc.classList.add("e"+resultCounter+"desc");
                resultDesc.innerHTML = sheetData[i].info6;
            }
            if (myRow == "QSTART") {
                questionCounter++;
                var qTitle = document.createElement("div");
                document.body.appendChild(qTitle);
                qTitle.classList.add("storage");
                qTitle.classList.add("q"+questionCounter+"title");
                qTitle.innerHTML = sheetData[i].info2;

                var qImgLink = document.createElement("div");
                document.body.appendChild(qImgLink);
                qImgLink.classList.add("storage");
                qImgLink.classList.add("q"+questionCounter+"imglink");
                qImgLink.innerHTML = sheetData[i].info3;

                var qImgAlt = document.createElement("div");
                document.body.appendChild(qImgAlt);
                qImgAlt.classList.add("storage");
                qImgAlt.classList.add("q"+questionCounter+"imgalt");
                qImgAlt.innerHTML = sheetData[i].info4;

                var ansCounter = 0;

                while(true) {
                    ansCounter++;
                    if(sheetData[i+ansCounter].info1 == "ANS") {
                        var aTitle = document.createElement("div");
                        document.body.appendChild(aTitle);
                        aTitle.classList.add("storage");
                        aTitle.classList.add("q"+questionCounter+"a"+ansCounter+"title");
                        aTitle.innerHTML = sheetData[i+ansCounter].info2;

                        var aPointsFor = document.createElement("div");
                        document.body.appendChild(aPointsFor);
                        aPointsFor.classList.add("storage");
                        aPointsFor.classList.add("q"+questionCounter+"a"+ansCounter+"pointsfor");
                        aPointsFor.innerHTML = sheetData[i+ansCounter].info7;

                        var aPoints = document.createElement("div");
                        document.body.appendChild(aPoints);
                        aPoints.classList.add("storage");
                        aPoints.classList.add("q"+questionCounter+"a"+ansCounter+"points");
                        aPoints.innerHTML = sheetData[i+ansCounter].info8;
                    }
                    else {
                        break;
                    }
                }

                i += ansCounter - 1;
            }
            if (myRow == "RESULTS") {
                var ourNumOfResults = document.getElementsByClassName("num-of-results")[0];
                ourNumOfResults.innerHTML = sheetData[i].info7;
            }
            if (myRow == "FRONT") {
                var quizTitle = document.createElement("div");
                quizFrontContainer.appendChild(quizTitle);
                quizTitle.classList.add("quiz-title");
                quizTitle.innerHTML = sheetData[i].info2;

                var quizDesc = document.createElement("div");
                quizFrontContainer.appendChild(quizDesc);
                quizDesc.classList.add("quiz-desc");
                quizDesc.innerHTML = sheetData[i].info3;

                var quizImgContainer = document.createElement("div");
                quizFrontContainer.appendChild(quizImgContainer);
                quizImgContainer.classList.add("quiz-front-img-container");
                quizImgContainer.innerHTML = "<img class='quiz-img-front' src='"+sheetData[i].info4+"' alt='"+sheetData[i].info5+"'>";

                var quizImgCaption = document.createElement("div");
                quizImgContainer.appendChild(quizImgCaption);
                quizImgCaption.classList.add("quiz-img-caption");
                quizImgCaption.innerHTML = sheetData[i].info6;
                console.log("sheetData[i].info9 != 'NONE: ' " + sheetData[i].info9 != "NONE");
                if (sheetData[i].info9 != "NONE")
                {
                    console.log("entered?")
                    quizImgCaption.innerHTML += "<sup style=\"font-size:70%\"><span class='footnote' id='ftn"+i+"' onclick=\"FootNote('ftn"+i+"','"+sheetData[i].info9+"');\">["+1+"]</span></sup>";
                }

                /*var quizStartButton = document.createElement("div");
                quizFrontContainer.appendChild(quizStartButton);
                quizStartButton.classList.add("quiz-start-button");
                quizStartButton.innerHTML = "START QUIZ";
                quizStartButton.addEventListener("click", startQuiz);*/
            }
            if (myRow == "TOPIC") {
                var quizTopic = document.createElement("div");
                quizTopicContainer.appendChild(quizTopic);
                quizTopic.classList.add("quiz-topic");
                quizTopic.innerHTML = "<a href='"+sheetData[i].info3+"'>"+sheetData[i].info2+"</a>";
            }
            if (myRow == "COMSEC") {
                var mycomseclink = document.createElement("div");
                document.body.appendChild(mycomseclink);
                mycomseclink.classList.add("storage");
                mycomseclink.classList.add("comsec-link");
                mycomseclink.innerHTML = sheetData[i].info2;
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

function initializeQuizData () {
    $('document').ready(function () {

        var qCounter = 0;
        while (true) {
            qCounter++;
            var qTitleDivs = document.getElementsByClassName("q"+qCounter+"title");
            //console.log("qTitleDivs: ");
            //console.log(qTitleDivs);
            //console.log("qTitleDivs length: " + qTitleDivs.length);
            if (qTitleDivs.length == 0) {
                break;
            }
            else {
                console.log("q"+qCounter+"title: " + document.getElementsByClassName("q"+qCounter+"title")[0].innerHTML);
                questions.push( 
                    [document.getElementsByClassName("q"+qCounter+"title")[0].innerHTML,
                        document.getElementsByClassName("q"+qCounter+"imglink")[0].innerHTML,
                        document.getElementsByClassName("q"+qCounter+"imgalt")[0].innerHTML]
                );
                aCounter = 0;
                answers.push([]);
                while (true) {
                    aCounter++;
                    var aTitleDivs = document.getElementsByClassName("q"+qCounter+"a"+aCounter+"title");
                    //console.log("aTItleDivs " + aCounter + ": ");
                    //console.log(aTitleDivs);
                    //console.log("aTitleDivs length: " + aTitleDivs.length);
                    //console.log("the div: ");
                    //console.log(document.getElementsByClassName("q"+qCounter+"a"+aCounter+"title")[0]);
                    if (aTitleDivs.length == 0) {
                        break;
                    }
                    else {
                        answers[qCounter-1].push(
                            [document.getElementsByClassName("q"+qCounter+"a"+aCounter+"title")[0].innerHTML,
                                Number(document.getElementsByClassName("q"+qCounter+"a"+aCounter+"pointsfor")[0].innerHTML),
                                Number(document.getElementsByClassName("q"+qCounter+"a"+aCounter+"points")[0].innerHTML)]
                        );
                    }
                }
            }
        }

        var eCounter = 0;
        while (true) {
            eCounter++;
            var eRevealDivs = document.getElementsByClassName("e"+eCounter+"reveal");
            if (eRevealDivs.length == 0) {
                break;
            }
            else {
                results.push(
                    [document.getElementsByClassName("e"+eCounter+"reveal")[0].innerHTML,
                        document.getElementsByClassName("e"+eCounter)[0].innerHTML,
                        document.getElementsByClassName("e"+eCounter+"imglink")[0].innerHTML,
                        document.getElementsByClassName("e"+eCounter+"imgalt")[0].innerHTML,
                        document.getElementsByClassName("e"+eCounter+"desc")[0].innerHTML]
                );
            }
        }

        var outcomes = Number(document.getElementsByClassName("num-of-results")[0].innerHTML);
        for (var i = 0; i < outcomes; i++) {
            resultPoints.push(0);
        }

        console.log("questions: ");
        console.log(questions);
        console.log("answers: ");
        console.log(answers);
        console.log("results: ");
        console.log(results);

        var quizFrontContainer = document.getElementsByClassName("quiz-front-container")[0];

        var quizStartButton = document.createElement("div");
        quizFrontContainer.appendChild(quizStartButton);
        quizStartButton.classList.add("quiz-start-button");
        quizStartButton.innerHTML = "START QUIZ";
        quizStartButton.addEventListener("click", startQuiz);
    })
}

function startQuiz() {
    console.log("startQuiz entered")
    $(".quiz-topic-container").remove();
    $(".quiz-front-container").remove();
    $(".quiz-question-container").remove();
    $(".quiz-answer-container").remove();
    $(".quiz-sub-container").remove();
    $(".quiz-result-container").remove();

    for (var i = 0; i < resultPoints.length; i++) {
        resultPoints[i] = 0;
    }

    nextQuestion(1);
}

function givePoints(amount, toWhich, questionNumber) {
    resultPoints[toWhich-1] += amount;
    console.log("questionNumber: " + questionNumber + ", questions.length: " + questions.length);
    console.log("resultPoints: ")
    console.log(resultPoints);
    if(questionNumber > questions.length) {
        displayResults();
    }
    else {
        nextQuestion(questionNumber);
    }
}

function nextQuestion(questionNumber) {
    var container = document.getElementsByClassName("quiz-container")[0];

    $(".quiz-question-container").remove();
    $(".quiz-answer-container").remove();

    var questionContainer = document.createElement("div");
    container.appendChild(questionContainer);
    questionContainer.classList.add("quiz-question-container");

    var answerContainer = document.createElement("div");
    container.appendChild(answerContainer);
    answerContainer.classList.add("quiz-answer-container");

    var questionInfo = questions[questionNumber-1];
    //console.log("questions: " + questions);
    //console.log("questionInfo: " + questionInfo);

    var questionLister = document.createElement("div");
    questionContainer.appendChild(questionLister);
    questionLister.classList.add("quiz-question-number");
    questionLister.innerHTML = "Question " + questionNumber + " of " + questions.length;

    var questionTitle = document.createElement("div");
    questionContainer.appendChild(questionTitle);
    questionTitle.classList.add("quiz-question-title")
    questionTitle.innerHTML = questionInfo[0];

    var questionImgContainer = document.createElement("div");
    questionContainer.appendChild(questionImgContainer);
    questionImgContainer.classList.add("quiz-question-img-container");
    questionImgContainer.innerHTML = "<img class='quiz-question-image' src='"+questionInfo[1]+"' alt='"+questionInfo[2]+"'>";

    var allAnswersInfo = answers[questionNumber-1];
    for (var i = 0; i < allAnswersInfo.length; i++) {
        thisAnswerInfo = allAnswersInfo[i];

        var answerButton = document.createElement("div");
        answerContainer.appendChild(answerButton);
        answerButton.classList.add("quiz-answer-button");
        answerButton.innerHTML = thisAnswerInfo[0];
        //answerButton.addEventListener("click", givePoints(thisAnswerInfo[2], thisAnswerInfo[1], questionNumber+1));
        answerButton.setAttribute("onclick", "givePoints("+thisAnswerInfo[2]+", "+thisAnswerInfo[1]+", "+(questionNumber+1)+")")
    }
}

function displayResults() {
    $(".quiz-question-container").remove();
    $(".quiz-answer-container").remove();

    var container = document.getElementsByClassName("quiz-container")[0];

    var resultContainer = document.createElement("div");
    container.appendChild(resultContainer);
    resultContainer.classList.add("quiz-result-container")

    var maxNumber = 0;
    for (var i = 0; i < resultPoints.length; i++) {
        if (resultPoints[i] > maxNumber) {
            maxNumber = resultPoints[i];
        }
    }

    console.log("maxNumber: " + maxNumber);

    var outcome = 0;
    for (var i = 0; i < resultPoints.length; i++) {
        if (resultPoints[i] >= maxNumber) {
            outcome += Math.pow(2, i);
        }
    }
    outcome--;

    console.log("outcome: " + outcome + ", resultPoints:" + resultPoints);

    var ourResult = results[outcome];

    var resultIntro = document.createElement("div");
    resultContainer.appendChild(resultIntro);
    resultIntro.classList.add("quiz-result-intro");
    resultIntro.innerHTML = ourResult[0];

    var resultTitle = document.createElement("div");
    resultContainer.appendChild(resultTitle);
    resultTitle.classList.add("quiz-result-title");
    resultTitle.innerHTML = ourResult[1];

    var resultImgContainer = document.createElement("div");
    resultContainer.appendChild(resultImgContainer);
    resultImgContainer.classList.add("quiz-result-img-container");
    resultImgContainer.innerHTML = "<img class='quiz-result-img', src='"+ourResult[2]+"' alt='"+ourResult[3]+"'>"; 

    var resultDesc = document.createElement("div");
    resultContainer.appendChild(resultDesc);
    resultDesc.classList.add("quiz-result-desc");
    resultDesc.innerHTML = ourResult[4];

    var resultTryAgain = document.createElement("div");
    resultContainer.appendChild(resultTryAgain);
    resultTryAgain.classList.add("quiz-result-try-again");
    resultTryAgain.innerHTML = "TAKE THE QUIZ AGAIN!";
    //resultTryAgain.addEventListener("click", startQuiz);
    resultTryAgain.setAttribute("onclick", "startQuiz()")

    var resultComsec = document.createElement("div");
    resultContainer.appendChild(resultComsec);
    resultComsec.classList.add("quiz-result-comsec");
    resultComsec.innerHTML = "<a href='"+comseclink+"'>See what others think about this quiz and join the discussion!</a>";
}
