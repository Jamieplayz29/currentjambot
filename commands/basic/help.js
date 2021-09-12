const { MessageEmbed } = require("discord.js");

module.exports =
{
    name: 'help',
    description: 'list of all commands the bot has',
    execute(message, args) {
        if(message.member.permissions.has('ADMINISTRATOR')) {
            const HelpEmbed = new MessageEmbed()
            .setColor(0x3498DB)
            .setTitle('Jam Bot')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')

            .addField("Commands", "__ping__: sends a ping to the jambot server to check if the bot is online. \n __say__ <message>: tells the bot to say something \n __kick__: kicks a user from the server. **You must be able to kick someone first** \n ~~play~~: coming soon:tm:")
            .addField('Admin Commands', '__clear__ <number of messages>: deletes up to 100 messages at a time \n __smacmedown__ <mention>: remove all of someones roles ')
            .addField('Development', 'Jam Bots source code is available [here](https://github.com/Jamieplayz29/currentjambot) on GitHub. \n Man also has [PayPal](https://www.paypal.com/paypalme/JamiePlayZ) to pay them bills innit')
            .setThumbnail('https://i.imgur.com/PMauoQo.jpeg')

            .setTimestamp()
            .setFooter(`help requested by ${message.author.username}`);

            message.channel.send({ embeds: [HelpEmbed] });
        } else {
            const HelpEmbed = new MessageEmbed()
            .setColor(0x3498DB)
            .setTitle('Jam Bot')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')

            .addField("Commands", "__ping__: sends a ping to the jambot server to check if the bot is online. \n __say__ <message>: tells the bot to say something \n __kick__: kicks a user from the server. **You must be able to kick someone first** \n ~~play~~: coming soon:tm:")
            .addField('Development', 'Jam Bots source code is available [here](https://github.com/Jamieplayz29/currentjambot) on GitHub. \n Man also has [PayPal](https://www.paypal.com/paypalme/JamiePlayZ) to pay them bills innit')            
            .setThumbnail('https://i.imgur.com/PMauoQo.jpeg')
            
            .setTimestamp()
            .setFooter(`help requested by ${message.author.username}`);

            message.channel.send({ embeds: [HelpEmbed] });
        }
    }      
} 