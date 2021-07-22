const discord = require('discord.js');
const prefix = process.env.PREFIX;

module.exports = {
	name: 'ping',
	description: 'Get the ping latency of the api and the bot',
	category: '😂Fun',
	usage: `${prefix}ping`,
	aliases: ['latency'],
	run: (client, message, args) => {
		message.channel.send('Fetching the bot ping latency!').then(m => {
		  const embed = new discord.MessageEmbed()
		  .setAuthor(client.user.username, client.user.displayAvatarURL())
		  .setDescription('Here are the ping latencies:')
		  .setFooter(client.user.username)
		  .setColor('GREEN')
		  .setTimestamp()
		  .addFields({
		    name: 'Api ping latency',
		    value: client.ws.ping + "ms"
		  }, {
		    name: 'Bot ping latency (bot response time)',
		    value: m.createdTimestamp - message.createdTimestamp + "ms"
		  })
		  
		  m.edit(embed);
		});
	}
};
