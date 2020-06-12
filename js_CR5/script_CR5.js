var moviedata = JSON.parse(Moviedata);
for (var i = 0; i < Moviedata.length; i++) {
	document.getElementByClass("movie_name").innerHTML +=
	Moviedata[0].name + "<br>";
}
