const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('previous')
		.setDescription('replays previous song from queue'),
	async execute(interaction, distube) {
        distube.previous(interaction)
        interaction.reply('Replaying previous song')
	},
};