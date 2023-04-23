const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('plays a song')
		.addStringOption(option => option.setName('song').setDescription('Queue a song name or paste in the URL of the song').setRequired(true)),
	async execute(interaction, distube) {
        const query = interaction.options.getString('song'); // Assuming 'song' is the name of the option in your slash command data

        const voiceChannel = interaction.member.voice.channel;
        if (!voiceChannel) {
            return await interaction.reply('You need to join a voice channel first!');
        }

        try {
            await distube.play(voiceChannel, query, {
                textChannel: interaction.channel,
                member: interaction.member,
            });
            await interaction.reply(`Now playing: ${query}`);
        } catch (error) {
            console.error(error);
            await interaction.reply('An error occurred while trying to play the song.');
        }
    },
};
