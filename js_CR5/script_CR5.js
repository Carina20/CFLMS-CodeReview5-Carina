

var moviedataA = JSON.parse(movieA);
console.log (moviedataA);
var i = 0;
for (var i = 0; i < moviedataA.length; i++) {
	var movie_object = moviedataA[i];
	document.getElementById("movieA").innerHTML += movie_object.name + "<br>";
	document.getElementById("descriptionA").innerHTML += movie_object.description + "<br>";
}


var moviedataB = JSON.parse(movieB);
var i = 0;
for (var i = 0; i < moviedataB.length; i++) {
	var movie_object = moviedataB[i];
	document.getElementById("movieB").innerHTML += movie_object.name + "<br>";
	document.getElementById("descriptionB").innerHTML += movie_object.description + "<br>";
}

var moviedataC = JSON.parse(movieC);
var i = 0;
for (var i = 0; i < moviedataC.length; i++) {
	var movie_object = moviedataC[i];
	document.getElementById("movieC").innerHTML += movie_object.name + "<br>";
	document.getElementById("descriptionC").innerHTML += movie_object.description + "<br>";
}
