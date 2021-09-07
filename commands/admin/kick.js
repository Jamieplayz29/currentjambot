module.exports =
{
    name: 'kick',
    description: 'kicks a user',
    execute(message, args) {
        if(message.member.permissions.has('KICK_MEMBERS')) {
            let member = message.mentions.members.first();
            if(!member.permissions.has('ADMINISTRATOR')) {
            member.send(`you have been kicked from ${message.guild.name}`);
            member.kick();
            } else {message.reply('i aint kicking an admin:exclamation::exclamation: ')}
        } else {message.reply('you need the Kick Members permission to use the kick command g')}
    }      
} 