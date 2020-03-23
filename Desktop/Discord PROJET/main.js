const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping')  msg.reply('pong');
  if (msg.content === 'everyone')  msg.reply('@everyone, salut à tous !', { disableEveryone: false });
  if (msg.content === 'noteverone')  msg.reply('@everyone (noteveryone), salut à tous !');
 
});

client.login('NjkxNDYzNzA2NDQ1MzQ4ODg0.XngWPA.LJ59GEZ-w682Nyom5HE7axhld3E');