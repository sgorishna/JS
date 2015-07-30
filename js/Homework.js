function func() {
	var a = 10;
	var b = "20";
	var c = a + b;
	var d = a + parseInt(b);
	document.write("a= " + a + "<br>");
	document.write("b = " + "'" + b + "'" + "<br>");
	document.write("a+b = " + c + "<br>");
	document.write("a+b = " + d + "<br>");

}

function arrayToString() {
	var s = "a.v.d.s.e.r.t.b.v.d";
	var array = s.split(".");

	document.write("string = " + s + "<br>");
	for (var i = 0; i < array.length; i++) {
		document.write("array " + "[" + i + "]" + " = " + array[i] + "<br>");
	}
}

function table(size) {

	document.write("<h1>Multiplication table</h1>");
	document.write("<table ");

	var row;
	var col;
	for (row = 1; row <= size; row++) {
		document.write("<tr>");

		for (col = 1; col <= size; col++) {
			document.write("<td>" + row * col + " </td> ");
		}
		document.write("</tr>");
	}
	document.write("</table>");
}

function triangle(size) {
	var result = [];
	result[0] = [ 1 ];
	result[1] = [ 1, 1 ];
	for (var row = 2; row < size; row++) {
		result[row] = [ 1 ];
		for (var col = 1; col <= row - 1; col++) {
			result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
			
			
			
		}
	}

	return result;

}



