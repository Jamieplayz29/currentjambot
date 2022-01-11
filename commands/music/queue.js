const { MessageEmbed } = require("discord.js")
const client = require('../../bot');

module.exports =
{
    name: 'queue',
    description: 'displays the songs in the queue',
    aliases: ['q'],
    execute(message, args, distube) {
        const queue = distube.getQueue(message)



        // embeds
        const nothingPlaying = new MessageEmbed()
        .setDescription('Nothing playing right now!');

        if(!queue) return message.channel.send({ embeds: [nothingPlaying]} );

        let embeds = []

        for (i = 0; i < 5; i++)
        {
         embeds.push(new Discord.MessageEmbed()
                .setTitle('Current Queue:')
                .setDescription(queue.songs
                                    .map(
                                        (song, id) =>
                                            `**${id ? id : 'Playing'}**. ${song.name} - \`${
                                                song.formattedDuration
                                            }\``,
                                )
                                .slice((i*20), (i+1)*20)
                                .join('\n')
                            ))
        }

    message.channel.createSlider(message.author.id,embeds, "Next", "Back")

	}
}
