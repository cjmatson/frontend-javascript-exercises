module.exports.copy = function (object) {
	var copy = {};
	for (var property in object) {
		if (object.hasOwnProperty(property)) {
			copy[property] = object[property];
		}
	}
	return copy;
}

module.exports.extend = function (dest, src) {
	for (var key in src) {
		dest[key] = src[key];
	}
	return dest;
}

module.exports.hasElems = function (object, array) {
	for (var i = 0; i < array.length; i++) {
		if (!object[array[i]]) {
			return false;
		}
	}
	return true;
}