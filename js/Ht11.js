
var interval;

function showSquare() {
	
	clearInterval(interval);
	
   document.getElementById('square').style.display = "block";
   
   interval = setInterval(function(){ move() }, 500);
  
}

function move(){
	var div = document.getElementById('square');	
	
	div.style.left = parseFloat(getComputedStyle(div).left) + 42 + 'px';
	
}


function stop(){
	
	
	clearInterval(interval);
	
	var div = document.getElementById('square');
	
	div.style.left = '10px';
	
	interval = setInterval(function(){ move() }, 500);
	
	
	
}