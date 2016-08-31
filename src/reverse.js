var Reverse = function(input) {
	
	var reverse = this;

	reverse.input = input;

	reverse.reverse = function(){
		var charArr = reverse.input.split('');
		charArr.reverse();
		var output = charArr.join('');
		return output;
  	};
};

module.exports = Reverse;