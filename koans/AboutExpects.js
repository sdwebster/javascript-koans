describe("About Expects", function() {

  //We shall contemplate truth by testing reality, via spec expectations.  
  it("should expect true", function() {
    expect(true).toEqual(true); //Changed this so we use 'toEqual'
  });

  //To understand reality, we must compare our expectations against reality.
  it("should expect equality", function () { 
	  var expectedValue = 2;
	  var actualValue = 1 + 1;
	
	  expect(actualValue).toEqual(expectedValue); //Changed this to use '.toEqual'
  });  

  //Some ways of asserting equality are better than others.
  it("should assert equality a better way", function () { 
	  var expectedValue = 2;
	  var actualValue = 1 + 1;
	
  // toEqual() compares using common sense equality.
	  expect(actualValue).toBe(expectedValue); //Changed 'toEqual' to 'toBe'
  });

  //Sometimes you need to be really exact about what you "type".
  it("should assert equality with ===", function () { 
	  var expectedValue = '2';
	  var actualValue = (1 + 1).toString();
	
  // toBe() will always use === to compare.
	  expect(actualValue).toBe(expectedValue);
  });  

  //Sometimes we will ask you to fill in the values.
  it("should have filled in values", function () {
	  expect(1 + 1).toEqual(2);
  });
});
