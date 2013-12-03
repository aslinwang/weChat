/**
 *Wechat Tools 
 */
var cmd = require('commander'),
	wechat = require('./controller/wechat');

cmd.version('0.0.1')
   .option('-c, --cmenu [value]', 'Create Menu,option with comma split')
   .option('-d, --dmenu', 'Delete Menu')
   .parse(process.argv);

if(cmd.cmenu){//create menu
	var menus = ['书籍', '工具'];
	wechat.createMenu(menus);
}
