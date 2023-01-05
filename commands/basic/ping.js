const { SlashCommandBuilder } = require('discord.js')

module.exports =
{
    data: new SlashCommandBuilder()
        .setName('testping')
        .setDescription('Pongs'),
        aliases: ['pg'],
    execute(message, args) {
        let ping = new Date().getTime() - message.createdTimestamp
        message.reply(`pong (${ping}ms)`);
    }
}