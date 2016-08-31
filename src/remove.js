var Replace = require('./replace');

var Remove = function(input) {

	var remove = this;

	remove.input = input;

	var replace = new Replace(remove.input);

	remove.remove = function(searchItem) {
	    var output = replace.replace(searchItem, ""); 
	    return output;
	};
};

module.exports = Remove;