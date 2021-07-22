const discord = require("discord.js");
const client = new discord.Client();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const db = require("quick.db");
const fs = require("fs");
const disbut = require('discord-buttons');
disbut(client);

client.commands = new discord.Collection();
client.aliases = new discord.Collection();


const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bot name :- Team69Elite,Developer:- Hornet.inc, Ram :- 3GB, ROM :- 32 GB')
});

app.listen(3000, () => {
  console.log('server started');
});

['command'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});



client.once('ready', () => {
  console.log(`${client.user.tag}`)
  client.user.setActivity("?help || Watching My Own server xD👀🛠");
});

client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  
 
  if (!message.content.toLowerCase().startsWith(prefix)) return;
  
  if (!message.member) await message.guild.fetchMember(messsage);
  
  
const args = message.content.slice(prefix.length).split(/ +/);
	const cmd = args.shift().toLowerCase();

	

	let command = client.commands.get(cmd);


	if (command) { 
	  
	  try { command.run(client, message, args);
	  } catch (error) {
	    console.error(error);
	    return message.channel.send(`An error occurred: \`${error}\``);
	  }
	}
});




client.login(token);