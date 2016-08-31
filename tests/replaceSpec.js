var Replace = require('../src/replace');

describe("Replace", function() {

  it("should replace characters ", function() {
  	var input = "This answer combined with grant's answer solved my problem";
  	var r = new Replace(input);
  	var output = r.replace("e", "o");
    expect(output).toBe("This answor combinod with grant's answor solvod my problom");

    r = new Replace("Joe's crab shack");
    expect(r.replace("'", "")).toBe("Joes crab shack");
  });

  it("should replace words ", function() {
  	var input = "This answer combined with grant's answer solved my problem";
  	var r = new Replace(input);
  	var output = r.replace("problem", "sandwich");
    expect(output).toBe("This answer combined with grant's answer solved my sandwich");
  });

});
   