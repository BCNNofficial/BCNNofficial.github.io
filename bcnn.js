function loadHead ()
{
	$(".tab").remove();
	$(".title").remove();
	$(".choice").remove();
	//$("h1").text("BUST");
	//console.log(window.innerWidth)
	//console.log(typeof window.innerWidth)
	var title = document.createElement("div");
	title.className = "title";
	document.body.appendChild(title);
	title.innerHTML = "BCNN";
	var choice = document.createElement("div");
	choice.className = "choice";
	document.body.appendChild(choice);
	var totalWidth = window.innerWidth;
	//console.log(totalWidth)
	var tabWidth = (totalWidth)/6;
	//console.log(tabWidth)
	var tabs = ["Need to Know", "Happening NOW", "Topics", "Find a Story", "Sources", "About BCNN"];
	var links = ["https://bcnnofficial.github.io/need-to-know/", "https://bcnnofficial.github.io/happening-NOW/", "https://bcnnofficial.github.io/topics/", "https://bcnnofficial.github.io/find-a-story/", "https://bcnnofficial.github.io/sources/", "https://bcnnofficial.github.io/about-us/"];
	for (var i = 0; i < tabs.length; i++)
	{
		var tablink = document.createElement("a");
		tablink.href = links[i];
		document.body.appendChild(tablink);

		var tab = document.createElement("div");
		tab.className = "tab";
		//document.body.appendChild(tab);
		tablink.appendChild(tab);
		tab.style.width = tabWidth + "px";
		tab.style.left = ((i)*tabWidth) + "px";
		tab.style.top = "128px";
		tab.innerHTML = tabs[i];
	}
}