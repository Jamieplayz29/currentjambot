module.exports =
{
    name: 'checkrole',
    description: 'checks if someones role is higher than that of the bot.',
    aliases: ['cr'],
    execute(message, args) {
        if(message.mentions.members.first().roles.highest.position > message.guild.members.resolve(bot.user).roles.highest.position)
            return message.channel.send("My highest role is lower than the mentioned user's role");
        else {
            return message.channel.send('My highest role is lower than the mentioned user\'s role');
        }
    }      
}