const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('seek')
		.setDescription('skips to a timestamp of a song in seconds')
		.addIntegerOption(option => option.setName('timestamp').setDescription('The seconds into the song that you want to fast forward to').setRequired(true)),
	async execute(interaction, distube) {
        const timestamp = interaction.options.getNumber('timestamp');

        if (timestamp === null) {
            return interaction.reply({ content: 'Enter a timestamp in seconds (yeah shush ill add it so u can ff to minute timestamps soon)', ephemeral: true });
        }
        distube.seek(interaction.guild, Number(timestamp));

	    },
};