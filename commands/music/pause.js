const { EmbedBuilder } = require("discord.js")

module.exports =
{
    name: 'pause',
    description: 'pauses the song',
    execute(message, args, distube) {
        distube.pause(message)

        const pauseEmbed = new EmbedBuilder()
        .setDescription('Paused the song')

        message.reply({ embeds: [pauseEmbed] });
    }      
} 