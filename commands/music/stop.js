const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('Clears the queue and leaves the voice chat'),
	async execute(interaction, distube) {
        distube.stop(interaction)
        interaction.reply('Stopped the music')
	},
};