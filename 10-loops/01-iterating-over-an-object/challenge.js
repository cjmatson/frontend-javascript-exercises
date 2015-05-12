module.exports.getKeys = function (object) {
	var key = [];
	for (var property in object) {
		key.push(property);
	}
	return key;
}

module.exports.getValues = function (object) {
	var array = [];
	for (var key in object) {
		array.push(object[key]);
	}
	return array;
}

module.exports.objectToArray = function (object) {
	var array = [];
	for (var key in object) {
		array.push(key + " is " + object[key]);
	}
	return array;
}