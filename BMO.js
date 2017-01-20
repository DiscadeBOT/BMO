const Discord = require('discord.js');
const bmo = new Discord.Client();
const prefix = "!";
bmo.on('ready', () => {
  console.log('I am ready!');
});
bmo.on('message', msg => {
  msg.react("🤖")
  msg.react(":regional_indicator_b:")
  msg.react(":regional_indicator_m:")
  msg.react(":regional_indicator_o:")
  if (msg.content.startsWith 'bmo') {
    msg.channel.sendMessage('I Am BMO!');
  }
});
bmo.login('token');
