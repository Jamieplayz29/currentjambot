module.exports =
{
    name: 'test',
    description: 'test',
    aliases: [],
    execute(message, args, client) {
        message.guild.members.fetch(process.env.CLIENT_ID).then((bot) => {
        if(message.mentions.members.first().roles.highest.position < bot.roles.highest.position)
            return message.channel.send("My highest role is higher than the mentioned user's role");
        else {
            return message.channel.send("My highest role is lower than the mentioned user's role");
        }

        })

    }      
} 
