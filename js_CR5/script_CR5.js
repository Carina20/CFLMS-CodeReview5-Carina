

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
	document.getElementById("movie2").innerHTML += movie_object.name + "<hr width=150> </hr>";
	document.getElementById("description2").innerHTML += movie_object.description + "<br>";
}

var moviedataC = JSON.parse(movieC);
var i = 0;
for (var i = 0; i < moviedataC.length; i++) {
	var movie_object = moviedataC[i];
	document.getElementById("movie3").innerHTML += movie_object.name + "<hr width=150> </hr>";
	document.getElementById("description3").innerHTML += movie_object.description + "<br>";
}

var moviedataD = JSON.parse(movieD);
var i = 0;
for (var i = 0; i < moviedataD.length; i++) {
	var movie_object = moviedataD[i];
	document.getElementById("movie4").innerHTML += movie_object.name + "<hr width=150> </hr>";
	document.getElementById("description4").innerHTML += movie_object.description + "<br>";
}

var moviedataE = JSON.parse(movieE);
var i = 0;
for (var i = 0; i < moviedataE.length; i++) {
	var movie_object = moviedataE[i];
	document.getElementById("movie5").innerHTML += movie_object.name + "<hr width=150> </hr>";
	document.getElementById("description5").innerHTML += movie_object.description + "<br>";
}

var moviedataF = JSON.parse(movieF);
var i = 0;
for (var i = 0; i < moviedataF.length; i++) {
	var movie_object = moviedataF[i];
	document.getElementById("movie6").innerHTML += movie_object.name + "<hr width=150> </hr>";
	document.getElementById("description6").innerHTML += movie_object.description + "<br>";
}

var moviedataG = JSON.parse(movieG);
var i = 0;
for (var i = 0; i < moviedataG.length; i++) {
	var movie_object = moviedataG[i];
	document.getElementById("movie7").innerHTML += movie_object.name + "<hr width=150> </hr>";
	document.getElementById("description7").innerHTML += movie_object.description + "<br>";
}

var moviedataH = JSON.parse(movieH);
var i = 0;
for (var i = 0; i < moviedataH.length; i++) {
	var movie_object = moviedataH[i];
	document.getElementById("movie8").innerHTML += movie_object.name + "<hr width=150> </hr>";
	document.getElementById("description8").innerHTML += movie_object.description + "<br>";
}