module.exports =
{
    name: 'queue',
    description: 'displays the songs in the queue',
    aliases: ['q'],
    execute(message, args, distube) {
        const queue = distube.getQueue(message)
        if (!queue) {
            message.channel.send('Nothing playing right now!')
        } else {
        message.channel.send(
            `Current queue:\n${queue.songs
                .map(
                    (song, id) =>
                        `**${id ? id : 'Playing'}**. ${song.name} - \`${
                            song.formattedDuration
                        }\``,
                )
                .slice(0, 10)
                .join('\n')}`,
			)
		}
	}
}      

