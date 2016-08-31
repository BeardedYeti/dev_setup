var Reverse = require('../src/reverse');

describe("Reverse", function() {

	it("should reverse an input string", function() {
	  	var input = "Trogdor the burninator";
	  	var r = new Reverse(input);
	  	var output = r.reverse();
	    expect(output).toBe("rotaninrub eht rodgorT");
	});

	it("should reverse an input string of numbers", function() {
	  	var input = "1 2 3 4 5";
	  	var r = new Reverse(input);
	  	var output = r.reverse();
	    expect(output).toBe("5 4 3 2 1");
	});

	it("should reverse an input string with special characters", function() {
	  	var input = "I don't know pi to the 100th place!";
	  	var r = new Reverse(input);
	  	var output = r.reverse();
	    expect(output).toBe("!ecalp ht001 eht ot ip wonk t'nod I");
	});

});  