"use strict"

var CONFIG = require('../config');

var url = require('url'),
    crypto = require('crypto'),
	qs = require('querystring'),
	https = require('https');

function checkSignature(ts, nonce, sign){
    var token = CONFIG.TOKEN,
	arr = [token, ts, nonce];
    
    var res = arr.sort().join('');
    var sha1 = crypto.createHash('sha1');

    sha1.update(res);
    if(sha1.digest('hex') == sign){
        return true;
    }
    else{
	return false;
    }
}

function getAccessToken(callback){
	var options = {
		hostname:'api.weixin.qq.com',
		port:443,
		path:'/cgi-bin/token?grant_type=client_credential&appid='+CONFIG.APPID+'&secret='+CONFIG.APPSECRET,
		method:'GET'	
	};

	var req = https.request(options, function(res){
		res.on('data', function(data){
			data = JSON.parse(data);
			callback(data);
		})
	});
	req.end();

	req.on('error', function(e){
		console.log(e);
	});
}

exports.index = function(req, res){
	var _url = url.parse(req.url, true);
	var _params = _url.query;
	
	if(checkSignature(_params['timestamp'], _params['nonce'], _params['signature'])){
	    res.send(_params['echostr']);
	}
	else{
	    res.send('ok');
	}
}

exports.createMenu = function(menus){
	getAccessToken(function(data){
		console.log(data);
	});
}
