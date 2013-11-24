"use strict"
var url = require('url');

function checkSignature(){
	
}

exports.index = function(req, res){
	var _url = url.parse(req.url);
	var _params = _url.query;

	console.log(_params);
}