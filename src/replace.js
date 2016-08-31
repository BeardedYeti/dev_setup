var Replace = function(input) {

  var replace = this;

  replace.input = input;

  replace.replace = function(searchItem, replaceItem){
    var reSearchItem = new RegExp(searchItem, 'g');
    var output = input.replace(reSearchItem, replaceItem);
    return output;
  };

};

module.exports = Replace;