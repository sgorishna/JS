function fizz() {

	var temp =[];
	
	for (var i = 1; i <= 100; i++) {
		
		

		if (i % 3 == 0 & i % 5 == 0) {

			temp.push("FizzBuzz");
		} else if (i % 3 != 0 & i % 5 == 0) {

			temp.push("Buzz");

		} else if (i % 3 == 0) {
			temp.push("Fizz");
		}

		else {
			temp.push(i);
		}

	}
	
	return temp;
}

function mas1() {

	var mas = [];
	for (var i = 0; i <= 10; i++) {

		var random = Math.floor((Math.random() * 100) + 0);

		mas[i] = random;

	}

	document.write("before =[ ");

	for (var i = 0; i < mas.length; i++) {

		document.write(mas[i] + ", ");
	}

	document.write("]" + "<p>");

	var max = mas[0];
	var maxIndex = 0;
var last = mas[mas.length - 1];
	for (var i = 0; i < mas.length; i++) {

		if (max >  mas[i]) {
			max = mas[i];
			maxIndex = i;
		}

		mas[maxIndex] = last;
		mas[mas.length - 1] = max;

	}

	document.write("after =[ ");

	for (var i = 0; i < mas.length; i++) {

		document.write(mas[i] + ", ");
	}

	document.write("]");
}


function mas2() {

	var mas = [];
	for (var i = 0; i <= 10; i++) {

		var random = Math.floor((Math.random() * -5) + -1);

		mas[i] = random;

	}

	document.write("before =[ ");

	for (var i = 0; i < mas.length; i++) {

		document.write(mas[i] + ", ");
	}

	document.write("]" + "<p>");

	var max = mas[0];
	var maxIndex = 0;
var last = mas[mas.length - 1];
	for (var i = 0; i < mas.length; i++) {

		if (max < mas[i]) {
			max = mas[i];
			maxIndex = i;
		}

		mas[maxIndex] = last;
		mas[mas.length - 1] = max;

	}

	document.write("after =[ ");

	for (var i = 0; i < mas.length; i++) {

		document.write(mas[i] + ", ");
	}

	document.write("]");
}

function fn( string,len){
	
	if(len < string.length){
		
		return len;
	}else{
		var array = string.split("");
	
	for(var i = array.length; i<=len; i++){
		array.push("undefined");
	}
	}
	
	return array;
	
	}
	
	//если function как метод объекта, this будет ссылаться на этот объект
