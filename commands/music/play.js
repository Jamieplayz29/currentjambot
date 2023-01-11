const {SlashCommandBuilder } = require('discord.js')

module.exports =
{
    name: 'play',
    description: 'plays a song',
    aliases: ['p'],
    execute( message, args, distube) {
        distube
		.play(message.member.voice.channel, args.join(' '), {
			message,
			textChannel: message.channel,
			member: message.member,
		})
		.catch(err => {
			message.reply(err.message);
		});
    }
} 

const musicCommand = new SlashCommandBuilder()
    .setName('play')
    .setDescription('adds a song to queue')
    .toJSON()




exports.musicCommand = musicCommand;
