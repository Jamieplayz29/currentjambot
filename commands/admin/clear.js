const { PermissionsBitField } = require('discord.js');
module.exports =
{
    name: 'clear',
    description: 'clears a set ammount of messages',
    async execute(message, args) {
        if (message.guild.members.me.permissions.has(PermissionsBitField.Flags.Administrator)) {
            if(!args[0]) return message.reply('Enter the ammount of messages u want to clear');
            if(isNaN(args[0])) return message.reply('enter a number to clear messages');

            if(args[0] > 100) return message.reply('i cant clear more than 100 messages per command :(');
            if(args[0] < 1) return message.reply('number of messages must be more than 0');

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages, true);
                console.log(`${args[0]} messages were deleted in ${message.guild.name} by ${message.author.username} (channel: ${message.channel.name})`);
            });

        } else {
            message.reply('only admins can use the clear command.');
        }
    }
}