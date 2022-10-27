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