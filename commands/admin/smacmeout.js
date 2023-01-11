const { PermissionsBitField } = require('discord.js');

module.exports =
{
    name: 'smacmeout',
    description: 'kicks a user',
    execute(message, args) {
        if(!message.member.permissions.has('KICK_MEMBERS')) return message.reply('you need the Kick Members permission to use the kick command g')

        let member = message.mentions.members.first();
        
        if(!member) {
            message.reply('You need to ping someone to kick')
        } else if(!message.guild.members.me.permissions.has(PermissionsBitField.Flags.Administrator)) {
            member.kick()
            .then(member => message.reply(`kicked ${member} from the server :sob:`))
            .catch(error => console.log(error))
        } else {message.reply('i aint kicking an admin:exclamation::exclamation:')}
    }      
} 