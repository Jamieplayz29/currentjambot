module.exports =
{
    name: 'smacmeout',
    description: 'kicks a user',
    execute(message, args) {
        if(message.member.permissions.has('KICK_MEMBERS')) {
            let member = message.mentions.members.first();
            if(!member) {
                message.reply('You need to ping someone to kick')
            } else if(!member.permissions.has('ADMINISTRATOR')) {
                member.kick()
                .then(member => message.reply(`kicked ${member} from the server :sob:`))
                .catch(error => console.log(error))
            } else {message.reply('i aint kicking an admin:exclamation::exclamation:')}
        } else {message.reply('you need the Kick Members permission to use the kick command g')} 
    }      
} 