const { MessageEmbed } = require("discord.js")

module.exports =
{
    name: 'timeout',
    description: 'times out a user',
    aliases: ['to'],
    execute(message, args) {

        if (!message.member.permissions.has('ADMINISTRATOR')) return  message.reply('only admins can use the timeout command!:sob::sob:')

        let member = message.mentions.members.first();
        let time = args[1] * 60 * 100
        let reason = args[2]
        const timeOutEmbed = new MessageEmbed()
        .setDescription(`**Succesfully timed out ${member} for ${time / 6000} minutes \n Reason:** *${reason}*`);
        const errorEmbed = new MessageEmbed()
        .setDescription(`An error occured while timeing out ${member} please ensure you have used the correct command format: \n *=timeout [@user] [time in minutes] 'reason for timeout'*`);

        member.timeout(time, reason)
        .then(message.reply({embeds: [ timeOutEmbed ] }))
        .catch( err => {
            console.error(err)
            message.reply({embeds: [ errorEmbed ]})
        });
    }
} 