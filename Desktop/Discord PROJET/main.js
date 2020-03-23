const Discord = require('discord.js');
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client({ disableEveryone: true });

client.on('ready', () => {
  console.log("Je suis prêt !");
});

client.on('message', msg => {

  if (msg.content.startsWith(`${PREFIX}ping`))  msg.reply('pong');
  if (msg.content.startsWith(`${PREFIX}pong`))  msg.channel.send('ping');
 
});

client.login(TOKEN);