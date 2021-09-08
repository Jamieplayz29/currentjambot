const errorCode = require("rest/interceptor/errorCode");

module.exports =
{
    name: 'smacmedown',
    description: 'removes all the users roles',
    execute(message, args) {
        if (message.member.permissions.has('ADMINISTRATOR')) {
            let meAndBot = ['<@!709026936919293984>', '<@!498615291908194324>']
            if(args[0] === '<@!709026936919293984>' ||args[0] === '<@!498615291908194324>') {
                message.reply('Can\'t remove me or my supreme leader (jam)\'s roles mate');
            } else {
                if (!args[0]) {message.reply('you need to ping someone to smac after =smacmedown')}
                else {
                let member = message.mentions.members.first();
                member.roles.remove(member.roles.cache);
                message.channel.send(`removed all roles from ${member} :rofl::rofl::rofl:`)
                console.log(`removed all roles from ${member} in ${message.guild.name}.`);
                }
            }
        } else { message.reply('only admins can use the smacmedown command!:sob::sob:') }  
    }
}