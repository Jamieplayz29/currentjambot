module.exports =
{
    name: 'smacmedown',
    description: 'removes all the users roles',
    execute(message, args) {
        if (message.member.permissions.has('ADMINISTRATOR')) {
            let member = message.mentions.members.first();
            member.roles.remove(member.roles.cache);
            message.channel.send(`removed all roles from ${member} :rofl::rofl::rofl:`)
            console.log(`removed all roles from ${member} in ${message.guild.name}.`);
        } else { message.reply('only admins can use the smacmedown command!:sob::sob:') }
    }      
} 