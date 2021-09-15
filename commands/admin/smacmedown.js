const errorCode = require("rest/interceptor/errorCode");

module.exports =
{
    name: 'smacmedown',
    description: 'removes all the users roles',
    execute(message, args) {
        if (!message.member.permissions.has('ADMINISTRATOR')) return  message.reply('only admins can use the smacmedown command!:sob::sob:')

        let member = message.mentions.members.first();

        if (!member) { 
            message.reply('you need to ping someone to smac after =smacmedown')
        } else if (args[0] == '<@!498615291908194324>') {
            // Jam's ID
            message.reply('Nah man really tried it :skull:')
        } else {
            member.roles.set([])
            .then(member => message.channel.send(`removed all roles from ${member} :rofl::rofl::rofl:`))
            .catch(err =>  message.reply(`I could\'nt remove roles from ${member}, probably because they have roles higher than me.`));
        }
    }
}