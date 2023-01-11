const { EmbedBuilder, PermissionsBitField } = require("discord.js")

module.exports =
{
    name: 'timeout',
    description: 'times out a user',
    aliases: ['to'],
    execute(message, args) {

        if (!message.guild.members.me.permissions.has(PermissionsBitField.Flags.Administrator)) return  message.reply('only admins can use the timeout command!:sob::sob:')
        let member = message.mentions.members.first();
        let time = args[1] * 60 * 1000
        let reason = args[2]
        const timeOutEmbed = new EmbedBuilder()
        .setDescription(`**Succesfully timed out ${member} for ${time / 60000} minutes \n Reason:** *${reason}*`);
        const errorEmbed = new EmbedBuilder()
        .setDescription(`An error occured while timing out ${member}, they most likely have a higher role than the bot but ensure you have used the correct command format: \n *=timeout [@user] [time in minutes] 'reason for timeout'*`);

        if(isNaN(args[1])) return message.reply('Please enter a time in minutes after pinging the user, use the command format *=timeout <@user> [time in minutes] \'reason\'*');

        message.guild.members.fetch(process.env.CLIENT_ID)
            .then( (bot) => {
                if(message.mentions.members.first().roles.highest.position < bot.roles.highest.position)
                    return member.timeout(time, reason).then(message.reply({ embeds: [timeOutEmbed] }));
                else {
                    return message.reply({ embeds: [errorEmbed] });
                }
            }) 

    }
} 