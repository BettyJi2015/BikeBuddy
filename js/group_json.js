
var jsonData, 
	regex,
	searchField = document.querySelector("#search"); 
	
		
function callback(json) {
	jsonData = json.photographs; 
	useParsedData(jsonData);
}

function useParsedData(data) {
	var output = "<ul class='searchresults'>";
	//	cycle through each item in JSON data
	data.forEach(function(key, index, val) {

		if ((key.name.search(regex) != -1) || (key.trip.search(regex) != -1) || (key.location.search(regex) != -1)) { 			
			output += "<div class='container'>";
			output += "<div class='panel-body'>";

			output += "<div class='col-xs-2 col-sm-2 formleft'>";
			output += "<h2>" + key.month + "</h2>";	
			output += "<h1>" + key.day + "</h1><br>"
			output += "</div>";

			output += "<div class='col-xs-10 col-sm-10 formright'>";
			output += "<li>";			
			output += "<h2>" + key.name  + "</h2>";
			output += "<p>" + key.trip + "</p>";
			output += "<p>" + key.date + "</p>"; 
			output += "<p>" + key.location + "</p>";


			for (var i = 0; i < key.filename.length; i++) {
			output += "<img src='./img/members/" + key.filename[i] + ".png'/>";
				};
			
			output += "</li>";
			output += "</div>";
			output += "</div>";
			output += "</div>";

			
		}
	});
	output += '<li style="float:none; clear:both; display:none;"></li>';
	output += '</ul>';
	document.querySelector("#update").innerHTML = output;
}


searchField.addEventListener("keyup", function() {
	var searchInput = searchField.value;
	//if search input contains multiple words, search for each word
	searchInput = searchInput.split(' ');
	for( var i = 0 ; i < searchInput.length ; i++ ){
    	regex = new RegExp(searchInput[i], "i"); 
	}	
	useParsedData(jsonData);
});
searchField.focus(); 

//	create script with JSON data and append it to your HTML document head
var script = document.createElement('script');
script.setAttribute("type", "text/javascript")
script.setAttribute("src", "js/data_jsonp.json");
document.getElementsByTagName("head")[0].appendChild(script);

