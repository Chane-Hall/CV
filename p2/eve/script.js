var counter = 1;
var babaint = 0;
//var mySound;
var snd3 = new Audio("fonts/ver.mp3");
var snd = new Audio("fonts/wlaugh.mp3");
var snd1 = new Audio("fonts/babycRingtone.mp3"); 
var wen = new Audio("fonts/Wen.mp3");
var verllo = new Audio("fonts/super.mp3");


function correct(){
	 // buffers automatically when created
		snd3.play();
		document.getElementById("yay").style.display = "block";
		console.log("wys wen");
		document.getElementById("3").style.border = "4px solid #00FF00";
		document.getElementById("yay").style.WebkitAnimationDelay = "10s";
		document.getElementById("yay").style.WebkitAnimation = "example11 1s ease-out";
		document.getElementById("babies22").innerHTML ="<img id='still' src='1x/babes3.png'/>";
		//document.getElementById("still").style.WebkitAnimation = "example11 2s ease-out";
		document.getElementById("yay").addEventListener("animationend", myEndFunction2);
	}

function myEndFunction2(){
	//alert("You have succesfully defeated the creature by correctly identifying the creature. click ok to go to the next level.");
	document.getElementById("cor").style.display = "block";
	document.getElementById("yay").removeEventListener("animationend", myEndFunction2);
	//next();
	document.getElementById("cr").addEventListener("click", next);	
}
	
function incorrect(idn){
		
		 // buffers automatically when created
		snd.play();
		 // buffers automatically when created
		snd1.play();
		document.getElementById("yay").style.display = "block";
		console.log("wys verloor");
		//sound.src = ;
		//sound.play();
		document.getElementById("3").style.border = "4px solid #00FF00";
		document.getElementById(idn).style.border = "4px solid red";
		document.getElementById("yay").style.WebkitAnimationDelay = "2s";
		document.getElementById("still").style.WebkitAnimationDelay = "2s";
		document.getElementById("yay").style.WebkitAnimation = "example33 2s ease-out forwards";
		document.getElementById("still").style.WebkitAnimation = "example33 2s ease-out forwards";
		setTimeout(function()
		{
			document.getElementById("still").style.WebkitAnimation = "none";
			document.getElementById("yay").style.WebkitAnimation = "none";
		},2100);
		document.getElementById("yay").addEventListener("webkitAnimationEnd", myEndFunction);
	}

function myEndFunction(){
	//document.getElementById("yay").style.display = "none";
	//snd1.pause();
	//alert("You have incorrectly identified the creature and therefore it stole one of your children, if you lose 3 children, you lose the game. click ok to go to the next level.");
	//document.getElementById("incor").style.display = "block";
	document.getElementById("yay").removeEventListener("animationend", myEndFunction);
		if (babaint == 0){
			document.getElementById("baby").innerHTML = "<img  src='1x/ry2.png'/>";
			babaint = 1;
			document.getElementById("incor").style.display = "block";
			document.getElementById("incr").addEventListener("click", next);
		}
		else if (babaint == 1){
			document.getElementById("baby").innerHTML = "<img  src='1x/ry1.png'/>";
			babaint = 2;
			document.getElementById("incor").style.display = "block";
			document.getElementById("incr").addEventListener("click", next);
		}
		else if (babaint == 2){
			document.getElementById("baby").innerHTML = "<img  src='1x/ry0.png'/>";
			babaint = 3;
			done();
		}
		
}



function next(){
	document.getElementById("cor").style.display = "none";
	document.getElementById("incor").style.display = "none";
	document.getElementById("cr").removeEventListener("click", next);
	document.getElementById("pra").innerHTML = "Finland";
	document.getElementById("yay").src = "1x/mons1.png";
	document.getElementById("babies22").innerHTML ="<img id='still' src='1x/babes4.png'/>";
	document.getElementById("yay").style.display = "none";
	document.getElementById("imggg").innerHTML = "<img class='co' src='Asset 34.png'/></br>";
	document.getElementById("imgg").innerHTML = "<img class='co' src='Asset 34.png'/></br>";
	document.getElementById("char").innerHTML = "<div id='instr'><p>Choose the creature used in this country to scare children into behaving.</p></div></br>";
	document.getElementById("char").innerHTML += "<img class='block' id='1' src='Asset 16.png' onclick='incorrect2(1)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='2' src='Asset 17.png' onclick='incorrect2(2)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='3' src='Asset 18.png' onclick='incorrect2(3)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='4' src='Asset 19.png' onclick='incorrect2(4)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='5' src='Asset 20.png' onclick='incorrect2(5)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='6' src='Asset 34.png' onclick='correct2()'/>";
	document.getElementById("game").style.backgroundImage = "url('1x/env1.png')";
	console.log("agtergrond");
	document.body.style.backgroundColor = "purple";//#ccadc7
}


function correct2(){
	snd3.play();
		document.getElementById("yay").style.display = "block";
		console.log("wys wen");
		//document.getElementById("yay").style.WebkitAnimationDelay = "10s";
		document.getElementById("6").style.border = "4px solid #00FF00";
		document.getElementById("yay").style.WebkitAnimation = "example11 1s ease-out";
		document.getElementById("babies22").innerHTML ="<img id='still' src='1x/babes3.png'/>";
		//document.getElementById("still").style.WebkitAnimation = "example11 2s ease-out";
		document.getElementById("yay").addEventListener("animationend", myEndFunction21);
	}

function myEndFunction21(){
	//alert("You have succesfully defeated the creature by correctly identifying the creature. click ok to go to the next level.");
	document.getElementById("cor").style.display = "block";
	document.getElementById("cr").addEventListener("click", next2);
	document.getElementById("yay").removeEventListener("animationend",myEndFunction21);
	//next2();	
}
	
function incorrect2(idn){
		
		snd.play();
		snd1.play();
		document.getElementById("yay").style.display = "block";
		console.log("wys verloor");
		//sound.src = ;
		//sound.play();
		//document.getElementById("yay").style.WebkitAnimationDelay = "2s";
		//document.getElementById("still").style.WebkitAnimationDelay = "2s";
		document.getElementById("6").style.border = "4px solid #00FF00";
		document.getElementById(idn).style.border = "4px solid red";
		document.getElementById("yay").style.WebkitAnimation = "example33 2s ease-out forwards";
		document.getElementById("still").style.WebkitAnimation = "example33 2s ease-out forwards";
		setTimeout(function()
		{
			document.getElementById("still").style.WebkitAnimation = "none";
			document.getElementById("yay").style.WebkitAnimation = "none";
		},2100);
		document.getElementById("yay").addEventListener("animationend", myEndFunction22);
	}

function myEndFunction22(){
	//document.getElementById("yay").style.display = "none";
	//snd1.pause();
	document.getElementById("yay").removeEventListener("animationend", myEndFunction22);
		if (babaint == 0){
			document.getElementById("baby").innerHTML = "<img  src='1x/ry2.png'/>";
			babaint = 1;
			document.getElementById("incor").style.display = "block";
			document.getElementById("incr").addEventListener("click", next2);
		}
		else if (babaint == 1){
			document.getElementById("baby").innerHTML = "<img  src='1x/ry1.png'/>";
			babaint = 2;
			document.getElementById("incor").style.display = "block";
			document.getElementById("incr").addEventListener("click", next2);
		}
		else if (babaint == 2){
			document.getElementById("baby").innerHTML = "<img  src='1x/ry0.png'/>";
			babaint = 3;
			done();
		}
		
}


function next2(){
	document.getElementById("cor").style.display = "none";
	document.getElementById("incor").style.display = "none";
	document.getElementById("cr").removeEventListener("click", next);
	document.getElementById("pra").innerHTML = "Brazil";
	document.getElementById("yay").src = "1x/mons2.png";
	document.getElementById("babies22").innerHTML ="<img id='still' src='1x/babes4.png'/>";
	document.getElementById("yay").style.display = "none";
	document.getElementById("imggg").innerHTML = "<img class='co' src='Asset 10.png'/></br>";
	document.getElementById("imgg").innerHTML = "<img class='co' src='Asset 10.png'/></br>";
	document.getElementById("char").innerHTML = "<div id='instr'><p>Choose the creature used in this country to scare children into behaving.</p></div></br>";
	document.getElementById("char").innerHTML += "<img class='block' id='1' src='Asset 10.png' onclick='correct3()'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='2' src='Asset 23.png' onclick='incorrect3(2)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='3' src='Asset 24.png' onclick='incorrect3(3)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='4' src='Asset 25.png' onclick='incorrect3(4)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='5' src='Asset 26.png' onclick='incorrect3(5)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='6' src='Asset 27.png' onclick='incorrect3(6)'/>";
	document.getElementById("game").style.backgroundImage = "url('1x/env5.png')";
	document.body.style.backgroundColor = "lightpink";
}



function correct3(){
	snd3.play();
		document.getElementById("yay").style.display = "block";
		console.log("wys wen");
		document.getElementById("1").style.border = "4px solid #00FF00";
		//document.getElementById("still").style.WebkitAnimation = "example11 2s ease-out";
		document.getElementById("yay").style.WebkitAnimation = "example11 1s ease-out";
		document.getElementById("babies22").innerHTML ="<img id='still' src='1x/babes3.png'/>";
		setTimeout(function()
		{
			document.getElementById("still").style.WebkitAnimation = "none";
			document.getElementById("yay").style.WebkitAnimation = "none";
		},2100);
		document.getElementById("yay").addEventListener("animationend", myEndFunction23);
	}

function myEndFunction23(){
	//alert("You have succesfully defeated the creature by correctly identifying the creature. click ok to go to the next level.");
	document.getElementById("yay").removeEventListener("animationend", myEndFunction23);
	//next3();
	document.getElementById("cor").style.display = "block";
	document.getElementById("cr").addEventListener("click", next3);	
}
	
function incorrect3(idn){
		
		snd.play();
		snd1.play();
		document.getElementById("yay").style.display = "block";
		console.log("wys verloor");
		//sound.src = ;
		//sound.play();
		document.getElementById("1").style.border = "4px solid #00FF00";
		document.getElementById(idn).style.border = "4px solid red";
		document.getElementById("yay").style.WebkitAnimation = "example33 2s ease-out forwards";
		document.getElementById("still").style.WebkitAnimation = "example33 2s ease-out forwards";
		setTimeout(function()
		{
			document.getElementById("still").style.WebkitAnimation = "none";
			document.getElementById("yay").style.WebkitAnimation = "none";
		},2100);
		document.getElementById("yay").addEventListener("animationend", myEndFunction3);
	}

function myEndFunction3(){
	//document.getElementById("yay").style.display = "none";
	//snd1.pause();
	document.getElementById("yay").removeEventListener("animationend", myEndFunction3);
		if (babaint == 0){
			document.getElementById("baby").innerHTML = "<img src='1x/ry2.png'/>";
			babaint = 1;
			document.getElementById("incor").style.display = "block";
			document.getElementById("incr").addEventListener("click", next3);
		}
		else if (babaint == 1){
			document.getElementById("baby").innerHTML = "<img src='1x/ry1.png'/>";
			babaint = 2;
			document.getElementById("incor").style.display = "block";
			document.getElementById("incr").addEventListener("click", next3);
		}
		else if (babaint == 2){
			document.getElementById("baby").innerHTML = "<img src='1x/ry0.png'/>";
			babaint = 3;
			done();
		}
		
}





function next3(){
	document.getElementById("cor").style.display = "none";
	document.getElementById("incor").style.display = "none";
	document.getElementById("cr").removeEventListener("click", next);
	document.getElementById("pra").innerHTML = "Mexico";
	document.getElementById("yay").src = "1x/mons3.png";
	document.getElementById("babies22").innerHTML ="<img id='still' src='1x/babes4.png'/>";
	document.getElementById("yay").style.display = "none";
	document.getElementById("imggg").innerHTML = "<img class='co' src='Asset 40.png'/></br>";
	document.getElementById("imgg").innerHTML = "<img class='co' src='Asset 40.png'/></br>";
	document.getElementById("char").innerHTML = "<div id='instr'><p>Choose the creature used in this country to scare children into behaving.</p></div></br>";
	document.getElementById("char").innerHTML += "<img class='block' id='1' src='Asset 28.png' onclick='incorrect4(1)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='2' src='Asset 29.png' onclick='incorrect4(2)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='3' src='Asset 30.png' onclick='incorrect4(3)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='4' src='Asset 31.png' onclick='incorrect4(4)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='5' src='Asset 26.png' onclick='incorrect4(5)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='6' src='Asset 40.png' onclick='correct4()'/>";
	document.getElementById("game").style.backgroundImage = "url('1x/env3.png')";
	document.body.style.backgroundColor = "grey";
}


function correct4(){
	snd3.play();
		document.getElementById("yay").style.display = "block";
		console.log("wys wen");
		document.getElementById("6").style.border = "4px solid #00FF00";
		//document.getElementById("still").style.WebkitAnimation = "example11 2s ease-out";
		document.getElementById("yay").style.WebkitAnimation = "example11 1s ease-out";
		document.getElementById("babies22").innerHTML ="<img id='still' src='1x/babes3.png'/>";
		setTimeout(function()
		{
			document.getElementById("still").style.WebkitAnimation = "none";
			document.getElementById("yay").style.WebkitAnimation = "none";
		},2100);
		document.getElementById("yay").addEventListener("animationend", myEndFunction24);
	}

function myEndFunction24(){
	//alert("You have succesfully defeated the creature by correctly identifying the creature. click ok to go to the next level.");
	document.getElementById("yay").removeEventListener("animationend", myEndFunction24);
	//next4();
	console.log("remove");
	document.getElementById("cor").style.display = "block";
	document.getElementById("cr").addEventListener("click", next4);	
}
	
function incorrect4(idn){
		
		snd.play();
		snd1.play();
		document.getElementById("yay").style.display = "block";
		console.log("wys verloor");
		//sound.src = ;
		//sound.play();
		document.getElementById("6").style.border = "4px solid #00FF00";
		document.getElementById(idn).style.border = "4px solid red";
		document.getElementById("yay").style.WebkitAnimationDelay = "2s";
		document.getElementById("still").style.WebkitAnimationDelay = "2s";
		document.getElementById("yay").style.WebkitAnimation = "example33 2s ease-out forwards";
		document.getElementById("still").style.WebkitAnimation = "example33 2s ease-out forwards";
		setTimeout(function()
		{
			document.getElementById("still").style.WebkitAnimation = "none";
			document.getElementById("yay").style.WebkitAnimation = "none";
		},2100);
		document.getElementById("yay").addEventListener("animationend", myEndFunction4);
	}

function myEndFunction4(){
	//document.getElementById("yay").style.display = "none";
	//snd1.pause();
	document.getElementById("yay").removeEventListener("animationend", myEndFunction4);
		if (babaint == 0){
			document.getElementById("baby").innerHTML = "<img  src='1x/ry2.png'/>";
			babaint = 1;
			document.getElementById("incor").style.display = "block";
			document.getElementById("incr").addEventListener("click", next4);
		}
		else if (babaint == 1){
			document.getElementById("baby").innerHTML = "<img  src='1x/ry1.png'/>";
			babaint = 2;
			document.getElementById("incor").style.display = "block";
			document.getElementById("incr").addEventListener("click", next4);
		}
		else if (babaint == 2){
			document.getElementById("baby").innerHTML = "<img  src='1x/ry0.png'/>";
			babaint = 3;
			done();
		}
		
}



function next4(){
	document.getElementById("cor").style.display = "none";
	document.getElementById("incor").style.display = "none";
	document.getElementById("cr").removeEventListener("click", next);
	document.getElementById("pra").innerHTML = "Egypt";
	document.getElementById("yay").src = "1x/mons4.png";
	document.getElementById("babies22").innerHTML ="<img id='still' src='1x/babes4.png'/>";
	document.getElementById("yay").style.display = "none";
	document.getElementById("imggg").innerHTML = "<img class='co' src='Asset 36.png'/></br>";
	document.getElementById("imgg").innerHTML = "<img class='co' src='Asset 36.png'/></br>";
	document.getElementById("char").innerHTML = "<div id='instr'><p>Choose the creature used in this country to scare children into behaving.</p></div></br>";
	document.getElementById("char").innerHTML += "<img class='block' id='1' src='Asset 28.png' onclick='incorrect5(1)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='2' src='Asset 29.png' onclick='incorrect5(2)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='3' src='Asset 30.png' onclick='incorrect5(3)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='4' src='Asset 31.png' onclick='incorrect5(4)'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='5' src='Asset 36.png' onclick='correct5()'/>";
	document.getElementById("char").innerHTML += "<img class='block' id='6' src='Asset 23.png' onclick='incorrect5(6)'/>";
	document.getElementById("game").style.backgroundImage = "url('1x/egypt.png')";
	document.body.style.backgroundColor = "grey";
}

function last(){
		if (babaint == 0){
			document.getElementById("baby").innerHTML = "<img  src='1x/ry2.png'/>";
			babaint = 1;
			document.getElementById("incor").style.display = "block";
			document.getElementById("incr").addEventListener("click", done2);
		}
		else if (babaint == 1){
			document.getElementById("baby").innerHTML = "<img  src='1x/ry1.png'/>";
			babaint = 2;
			document.getElementById("incor").style.display = "block";
			document.getElementById("incr").addEventListener("click", done2);
		}
		else if (babaint == 2){
			document.getElementById("baby").innerHTML = "<img  src='1x/ry0.png'/>";
			babaint = 3;
			done();
		}
}


function done(){
	//alert("You have lost all your babies and lost the game. GAME OVER");
	//window.location = 'Theme2.html';
	document.getElementById("incor").style.display = "block";
	verllo.play();
	document.getElementById("incor").innerHTML = "<p style='font-size:200px; margin-top: 100px;'>GAME OVER</p><p>You have lost all your babies and lost the game.</p></br></br></br></br><a class='intr' href='../Theme2.html'>Home</a>";
}
function done2(){
	document.getElementById("cor").style.display = "block";
	document.getElementById("incor").style.display = "none";
	wen.play();
	document.getElementById("cor").innerHTML = "<p style='font-size:200px; margin-top: 100px;'>You win!</p><p>You reached the final level without losing all your babies.</p></br></br></br></br><a class='intr' href='../Theme2.html'>Home</a>";
}


function correct5(){
	snd3.play();
		document.getElementById("yay").style.display = "block";
		console.log("wys wen");
		document.getElementById("6").style.border = "4px solid #00FF00";
		//document.getElementById("still").style.WebkitAnimation = "example11 2s ease-out";
		document.getElementById("yay").style.WebkitAnimation = "example11 1s ease-out";
		document.getElementById("babies22").innerHTML ="<img id='still' src='1x/babes3.png'/>";
		setTimeout(function()
		{
			document.getElementById("still").style.WebkitAnimation = "none";
			document.getElementById("yay").style.WebkitAnimation = "none";
		},2100);
		document.getElementById("yay").addEventListener("animationend", myEndFunction25);
	}

function myEndFunction25(){
	//alert("You have succesfully defeated the creature by correctly identifying the creature. click ok to go to the next level.");
	document.getElementById("yay").removeEventListener("animationend", myEndFunction25);
	done2();	
}
	
function incorrect5(idn){
		
		snd.play();
		snd1.play();
		document.getElementById("yay").style.display = "block";
		console.log("wys verloor");
		//sound.src = ;
		//sound.play();
		document.getElementById("6").style.border = "4px solid #00FF00";
		document.getElementById(idn).style.border = "4px solid red";
		document.getElementById("yay").style.WebkitAnimationDelay = "2s";
		document.getElementById("still").style.WebkitAnimationDelay = "2s";
		document.getElementById("yay").style.WebkitAnimation = "example33 2s ease-out forwards";
		document.getElementById("still").style.WebkitAnimation = "example33 2s ease-out forwards";
		setTimeout(function()
		{
			document.getElementById("still").style.WebkitAnimation = "none";
			document.getElementById("yay").style.WebkitAnimation = "none";
		},2100);
		document.getElementById("yay").addEventListener("animationend", last);
	}

/*var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      document.getElementById("yay").style.left = pos + 'px'; 
    }
  }

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function yayzies(){
	var pos = 5;
	while (pos < 10){
			document.getElementById("yay").style.left = pos+'px';
			++pos;
			document.getElementById("yay").style.transform = "translateX(50px)";
			console.log("draai");
			sleep(1000);
		}


document.getElementById("yay").style.display = "block";
		sleep(1000);
		document.getElementById("yay").style.transform = "translateX(50px)";



document.getElementById("1").onclick(incorrect());
document.getElementById("2").onclick(incorrect());
document.getElementById("3").onclick(correct());
document.getElementById("4").onclick(incorrect());
document.getElementById("5").onclick(incorrect());


<img class='block' id='2' src='Asset 17.png' onclick='incorrect()'/>
		<img class='block' id='3' src='Asset 18.png' onclick='incorrect()'/>
		<img class='block' id='4' src='Asset 19.png' onclick='incorrect()'/>
		<img class='block' id='5' src='Asset 20.png' onclick='incorrect()'/>
		<img class='block' id='6' src='Asset 21.png' onclick='correctF()'/>
  */


