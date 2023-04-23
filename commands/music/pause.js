const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pause')
		.setDescription('pauses the song'),
	async execute(interaction, distube) {
        distube.pause(interaction)

        const pauseEmbed = new EmbedBuilder()
        .setDescription('Paused the song')

        interaction.reply({ embeds: [pauseEmbed] });
	},
};