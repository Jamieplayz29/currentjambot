const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('resume')
		.setDescription('resumes the music'),
	async execute(interaction, distube) {
        distube.resume(interaction)
    }
}