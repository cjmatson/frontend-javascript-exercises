module.exports.sumNumbers = function(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
	sum += array[i]; 
	}
	return sum;
}

module.exports.splitAndLowerCaseString = function (inputString) {
	var string = inputString.toLowerCase().split(",");
	for (var i = 0; i < string.length; i++) {
		console.log(string[i]);
	}	
		return string;
}

module.exports.addIndex = function (array) {
	var  returnArray = [];
	for (var index = 0; index < array.length; index++) {
		returnArray.push(index + " is " + array[index]);
	}
	return returnArray;
}
