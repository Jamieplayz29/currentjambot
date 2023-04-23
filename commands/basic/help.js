const { EmbedBuilder, PermissionsBitField } = require("discord.js");

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Displays a list of commands Jam Bot can do'),
	async execute(interaction) {
        if(interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.Administrator)) {
            const HelpEmbed = new EmbedBuilder()
                .setColor(0x3498DB)
                .setTitle('Jam Bot')
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .addFields(
                    { name: 'Commands', value: '__ping__: Sends a ping to the jambot server to check if the bot is online. \n __say__ <message>: Tells the bot to say something \n __kick__: Kicks a user from the server. **You must be able to kick someone first**'},
                    { name: 'Music Commands', value: '__play__ <Song name/URL>: Plays a song or a playlist. Searches are done on youtube and links can be used from many sites including: **Spotify**, **SoundCloud** and of course **YouTube** \n __pause__: pauses the song \n __skip__: Skips the currently playing song \n __stop__: Stops the music and disconnects the bot \n __queue__: Shows the songs currently in the queue \n __jump__ <number of song in queue>: skips to a song in the queue \n __previous__: replays the song just played/skipped'},
                    { name: 'Admin Commands', value: '__clear__ <number of messages>: Deletes up to 100 messages at a time \n __Smacmedown__ <mention>: Remove all of someones roles \n __Timeout__ <mention> <time in minutes> <reason>'},
                    { name: 'Development', value: 'Jam Bots source code is available [here](https://github.com/Jamieplayz29/currentjambot) on GitHub. \n Man also has [PayPal](https://www.paypal.com/paypalme/JamiePlayZ) to pay them bills innit'}
                )
                .setThumbnail('https://i.imgur.com/PMauoQo.jpeg')
                .setTimestamp()
                .setFooter( {text: `help requested by ${interaction.member.user.username}`, iconURL: `https://cdn.discordapp.com/avatars/${interaction.member.user.id}/${interaction.member.user.avatar}.png` } );

            interaction.reply({ embeds: [HelpEmbed] });
        } else {
            const HelpEmbed = new EmbedBuilder()
            .setColor(0x3498DB)
            .setTitle('Jam Bot')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .addFields(
                { name: 'Commands', value: '__ping__: Sends a ping to the jambot server to check if the bot is online. \n __say__ <message>: Tells the bot to say something \n __kick__: Kicks a user from the server. **You must be able to kick someone first**'},
                { name: 'Music Commands', value: '__play__ <Song name/URL>: Plays a song or a playlist. Searches are done on youtube and links can be used from many sites including: **Spotify**, **SoundCloud** and of course **YouTube** \n __pause__: pauses the song \n __skip__: Skips the currently playing song \n __stop__: Stops the music and disconnects the bot \n __queue__: Shows the songs currently in the queue \n __jump__ <number of song in queue>: skips to a song in the queue \n __previous__: replays the song just played/skipped'},
                { name: 'Development', value: 'Jam Bots source code is available [here](https://github.com/Jamieplayz29/currentjambot) on GitHub. \n Man also has [PayPal](https://www.paypal.com/paypalme/JamiePlayZ) to pay them bills innit'}
            )
            .setThumbnail('https://i.imgur.com/PMauoQo.jpeg')
            .setTimestamp()
            .setFooter( {text: `help requested by ${interaction.member.user.username}`, iconURL: `https://cdn.discordapp.com/avatars/${interaction.member.user.id}/${interaction.member.user.avatar}.png` } );


            interaction.reply({ embeds: [HelpEmbed] });
        }
    }      
} 
