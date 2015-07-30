function cross(m1, m2) {

	var res = [];
	for (var i = 0; i < m1.length; i++) {

		for (var j = 0; j < m2.length; j++) {

			if (m1[i] == m2[j]) {
				res.push(m1[i]);
			}

		}
	}

	return res;
}

function match(array) {

	var res = [];

	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if (i != j & array[i] == array[j]) {

				res.push(array[i]);

			}
		}
	}

	if (res.length > 0) {
		return res;
	}
	return false;

}

function sortArr(array) {

	var sorted = array.reverse();
	
	//var sorted = array.sort();
	var res = array.sort(sorted);

	//var res = sorted.reverse();

	return res;
}

function pow(x, n) {

	var res = 1;
	if (n < 0) {
		window.alert("N must me >0 !");
	} else {
		if (n == 1) {
			res = x;
		} else {
			for (var i = 0; i < n; i++) {
				res = res * x;
			}

		}

	}
	return res;
}

function f(min, max, count) {
	var res = [];

	for (var i = 0; i < count; i++) {

		var random = Math.floor((Math.random() * (max - min) + min));

		res[i] = random;

	}

	return res;
}