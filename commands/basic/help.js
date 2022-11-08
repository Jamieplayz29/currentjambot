const { EmbedBuilder } = require("discord.js");

module.exports =
{
    name: 'help',
    description: 'list of all commands the bot has',
    aliases: ['h'],
    execute(message, args) {
        if(interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.Administrator)) {
            const HelpEmbed = new EmbedBuilder()
            .setColor(0x3498DB)
            .setTitle('Jam Bot')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')

            .addField("Commands", "__ping__: Sends a ping to the jambot server to check if the bot is online. \n __say__ <message>: Tells the bot to say something \n __kick__: Kicks a user from the server. **You must be able to kick someone first** ")
            .addField('Music Commands', '__play__ <Song name/URL>: Plays a song or a playlist. Searches are done on youtube and links can be used from many sites including: **Spotify**, **SoundCloud** and of course **YouTube** \n __pause__: pauses the song \n __skip__: Skips the currently playing song \n __stop__: Stops the music and disconnects the bot \n __queue__: Shows the songs currently in the queue \n __jump__ <number of song in queue>: skips to a song in the queue \n __previous__: replays the song just played/skipped')
            .addField('Admin Commands', '__clear__ <number of messages>: Deletes up to 100 messages at a time \n __Smacmedown__ <mention>: Remove all of someones roles \n __Timeout__ <mention> <time in minutes> <reason>')
            .addField('Development', 'Jam Bots source code is available [here](https://github.com/Jamieplayz29/currentjambot) on GitHub. \n Man also has [PayPal](https://www.paypal.com/paypalme/JamiePlayZ) to pay them bills innit')
            .setThumbnail('https://i.imgur.com/PMauoQo.jpeg')

            .setTimestamp()
            .setFooter(`help requested by ${message.author.username}`, `https://cdn.discordapp.com/avatars/${message.member.user.id}/${message.member.user.avatar}.png`);

            message.channel.send({ embeds: [HelpEmbed] });
        } else {
            const HelpEmbed = new EmbedBuilder()
            .setColor(0x3498DB)
            .setTitle('Jam Bot')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')

            .addField("Commands", "__ping__: Sends a ping to the jambot server to check if the bot is online. \n __say__ <message>: Tells the bot to say something \n __kick__: Kicks a user from the server. **You must be able to kick someone first** ")
            .addField('Music Commands', '__play__ <Song name/URL>: Plays a song or a playlist. Searches are done on youtube and links can be used from many sites including: **Spotify**, **SoundCloud** and of course **YouTube** \n __pause__: pauses the song \n __skip__: Skips the currently playing song \n __stop__: Stops the music and disconnects the bot \n __queue__: Shows the songs currently in the queue \n __jump__ <number of song in queue>: skips to a song in the queue \n __previous__: replays the song just played/skipped')
            .addField('Development', 'Jam Bots source code is available [here](https://github.com/Jamieplayz29/currentjambot) on GitHub. \n Man also has [PayPal](https://www.paypal.com/paypalme/JamiePlayZ) to pay them bills innit')            
            .setThumbnail('https://i.imgur.com/PMauoQo.jpeg')
            
            .setTimestamp()
            .setFooter(`help requested by ${message.author.username}`, `https://cdn.discordapp.com/avatars/${message.member.user.id}/${message.member.user.avatar}.png`);

            message.channel.send({ embeds: [HelpEmbed] });
        }
    }      
} 
