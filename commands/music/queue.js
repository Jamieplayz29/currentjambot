const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('queue')
		.setDescription('Displays the songs in the queue'),
	async execute(interaction, distube) {
		const queue = distube.getQueue(interaction);
		if (!queue) {
			interaction.reply('Nothing playing right now!');
		} else {
			interaction.reply(
				`Current queue:\n${queue.songs
					.map(
						(song, id) =>
							`**${id ? id : 'Playing'}**. ${
								song.name
							} - \`${song.formattedDuration}\``,
					)
					.slice(0, 10)
					.join('\n')}`,
			);
		}
	}
}