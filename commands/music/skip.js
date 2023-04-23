module.exports =
{
    name: 'skip',
    description: 'skips the song',
    aliases: ['s'],
    execute( message, distube) {
        distube.skip(message)
        .catch(err => console.log(err))
    }
} 

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('skip')
		.setDescription('Skips the current song'),
	async execute(interaction, distube) {
        distube.skip(interaction)
        .catch(err => console.log(err))
	},
};