const chalk = require('chalk');
const fs = require('fs')
/*
console.log = (...args) => {
  fs.appendFileSync("log.txt", args.join(" \n"))
  process.stdout.write(args.join(" ") + "\n")
}
*/

console.log(chalk.magenta('----------------啟動訊息區-----------------'));
console.log(chalk.red('開始啟動 ') + '機器人已開始註冊指令並啟動');

require('./sub-command')();
require('./bot')();
