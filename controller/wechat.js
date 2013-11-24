"use strict"

var CONFIG = require(../config);

var url = require('url'),
    crypto = require('crypto');

function checkSignature(ts, nonce, sign){
    var token = CONFIG.TOKEN,
	arr = [token, ts, nonce];
    
    var res = arr.sort().join();
    var sha1 = crypto.createHash('sha1');

    sha1.update(res);
    if(sha1.digest('hex') == sign){
        return true;
    }
    else{
	return false;
    }
}

exports.index = function(req, res){
	var _url = url.parse(req.url, true);
	var _params = _url.query;
	
	if(checkSignature(_params['timestamp'], _params['nonce'], _param['signature'])){
	    res.send(_params['echostr']);
	}
	else{
	    res.send('ok');
	}
}
