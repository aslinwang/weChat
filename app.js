var express = require('express'),
	http = require('http'),
	wechat = require('./controller/wechat');

var app = express();

app.configure(function(){
	app.set('port', 80);
	app.set('view engine', 'ejs');
	app.set('views', __dirname + '/views');

	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(app.router);
	app.use(express.methodOverride());
	app.use(express.static(__dirname + 'public'));
});

app.configure('development', function(){
	app.use(express.errorHandler());
})

app.get('/', wechat.index);

http.createServer(app).listen(app.get('port'), function(){
	console.log('listening on port ' + app.get('port'));
});
