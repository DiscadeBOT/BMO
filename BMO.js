
const Discord = require('discord.js');
const bmo = new Discord.Client();
const prefix = "!";
bmo.on('ready', () => {
  console.log('I am ready!');
});
bmo.on('message', msg => {
  msg.react("🤖")
  msg.react("🄱")
  msg.react("🄼")
  msg.react("🄾")
  if (msg.content.startsWith ('bmo')) {
    msg.channel.sendMessage('I Am BMO!');
  }
  if (msg.content.startsWith ('invite')) {
    msg.channel.sendMessage('🤖 http://bit.ly/2jxrMTN');
  }
});
bmo.login('token');
//NOTES
/*🇧





*/
