const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jump')
		.setDescription('Jumps to a song in the queue')
		.addIntegerOption(option => option.setName('song').setDescription('The number of the song in the queue to skip to').setRequired(true)),
	async execute(interaction, distube) {
        const songNumber = interaction.options.getInteger('song')

        if (songNumber === null) {
            return interaction.reply({ content: 'Enter a song number', ephemeral: true });
        }
        distube.jump(interaction, parseInt(songNumber))
        .catch(err => console.log(err))

        interaction.reply(`Jumped to song number ${songNumber}`)
	},
};