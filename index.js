#!/usr/bin/env node
var argv = require('yargs').argv;

//Replace, Reverse, Remove
var action = argv.action;
var input = argv.input;
var searchItem = argv.searchItem;
var replaceItem = argv.replaceItem;
var removeItem = argv.removeItem;


if (action === "replace") {
	//searchItem replaceItem
	var output = input.replace(searchItem, replaceItem);
	console.log(output);
} else if (action === "reverse") {
	var charArr = input.split('')
	charArr.reverse();
	var output = charArr.join('');
	console.log(output);
} else if (action === "remove") {
	//searchItem removeItem
	var output = input.replace(searchItem, "");
	console.log(output);
} else {
	console.log("Nothing")
}