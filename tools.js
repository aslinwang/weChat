/**
 *Wechat Tools 
 */
var cmd = require('commander');

cmd.version('0.0.1')
   .option('-c, --cmenu', 'Create Menu')
   .option('-h, --help', 'help')
   .parse(process.argv);

console.log('-c:create menu');
console.log('-h:seek for help');

if(cmd.cmenu){
    console.log(cmd.cmenu);
}
