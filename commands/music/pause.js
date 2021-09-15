const { MessageEmbed } = require("discord.js")

module.exports =
{
    name: 'pause',
    description: 'pauses the song',
    execute(message, args) {
        distube.pause(message)

        const pauseEmbed = new MessageEmbed()
        .setDescription('Paused the song')

        message.reply({ embeds: [pauseEmbed] });
    }      
} 