module.exports.reversePlusOne = function(array) {
	return array.reverse(array.push(1));
}

module.exports.plusesEverywhere = function(array) {
	return array.join("+");
}

module.exports.arrayQuantityPlusOne = function(array) {
	var add = array.length + 1;
	return add;
}