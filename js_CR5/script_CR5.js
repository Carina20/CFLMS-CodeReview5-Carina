

var moviedataA = JSON.parse(movieA);
console.log (moviedataA);
var i = 0;
for (var i = 0; i < moviedataA.length; i++) {
	var movie_object = moviedataA[i];
	document.getElementById("movie1").innerHTML += movie_object.name + "<hr width=150> </hr>";
	document.getElementById("description1").innerHTML += movie_object.description + "<br>";
}


var moviedataB = JSON.parse(movieB);
var i = 0;
for (var i = 0; i < moviedataB.length; i++) {
	var movie_object = moviedataB[i];
	document.getElementById("movie2").innerHTML += movie_object.name + "<br>";
	document.getElementById("description2").innerHTML += movie_object.description + "<br>";
}

var moviedataC = JSON.parse(movieC);
var i = 0;
for (var i = 0; i < moviedataC.length; i++) {
	var movie_object = moviedataC[i];
	document.getElementById("movie3").innerHTML += movie_object.name + "<br>";
	document.getElementById("description3").innerHTML += movie_object.description + "<br>";
}
