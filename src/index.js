var argv = require('yargs').argv;
var Replace = require('./replace');
var Reverse = require('./reverse');
var Remove = require('./remove');

//Replace, Reverse, Remove 
var action = argv.action;
var input = argv.input;
var searchItem = argv.searchItem;
var replaceItem = argv.replaceItem;
  
   
if (action === "replace") {
	var r = new Replace(input);
	console.log(r.replace(searchItem, replaceItem));
} else if (action === "reverse") {
	var r = new Reverse(input);
	console.log(r.reverse());
} else if (action === "remove") {
	//searchItem removeItem
	var r = new Remove(input);
	console.log(r.remove(searchItem));
} else {
	console.log("Nothing");
}     