var Remove = require('../src/remove');

describe("Remove", function() {

  it("should remove characters", function() {
  	var input = "My dog Skip likes to go for really long walks.";
  	var r = new Remove(input);
  	var output = r.remove("o");
    expect(output).toBe("My dg Skip likes t g fr really lng walks.");
  });

  it("should remove words", function() {
  	var input = "Sandy is a Georgia Peach";
  	var r = new Remove(input);
  	var output = r.remove("Sandy");
    expect(output).toBe(" is a Georgia Peach");
  });

});

