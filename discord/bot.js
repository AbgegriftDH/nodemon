const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  <client>.user.setActivity('made by AbgegriftDH', { type: 'LISTENING' });
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('token');

class ExecPHP {
	/**
	*
	*/
	constructor() {
		this.phpPath = './discord/settings.php';
		this.phpFolder = '';
	}	
	/**
	*
	*/
	parseFile(fileName,callback) {
		var realFileName = this.phpFolder + fileName;
		
		console.log('parsing file: ' + realFileName);

		var exec = require('child_process').exec;
		var cmd = this.phpPath + ' ' + realFileName;
		
		exec(cmd, function(error, stdout, stderr) {
			callback(stdout);
		});
	}
}
module.exports = function() {
	return new ExecPHP();
};
