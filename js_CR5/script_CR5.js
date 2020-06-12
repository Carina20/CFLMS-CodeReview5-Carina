
var moviedata = JSON.parse(Moviedata);
console.log(moviedata);
for (var i = 0; i < moviedata.length; i++) {
	var movie_object = moviedata[i];
	document.getElementsByClassName("movie_name")[0].innerHTML += movie_object.name + "<br>";
}
