const {Client, Collection, MessageEmbed} = require('discord.js');
const client = new Client({
    partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION'],
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES']
});
const fs = require('fs');
client.commands = new Collection();
const DisTube = require('distube')
const { SoundCloudPlugin } = require('@distube/soundcloud')
const { SpotifyPlugin } = require("@distube/spotify");
require('dotenv').config();
const mongoose = require('mongoose');
const distube = new DisTube.default(client, {
	searchSongs: 1,
	searchCooldown: 30,
	leaveOnEmpty: true,
	emptyCooldown: 30,
	leaveOnFinish: true,
	leaveOnStop: true,
    youtubeCookie: process.env.YOUTUBE_COOKIE,
	plugins: [new SpotifyPlugin({
                parallel: true,
                emitEventsAfterFetching: false,
                api: {
                clientId: process.env.SPOTIFY_CLIENT_ID,
                clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
                }
            }),
            new SoundCloudPlugin()
        ],
})


mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

//log the login in console... type beat
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});


//command handler
fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for(const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        client.commands.set(command.name, command)
    }
});

client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(process.env.PREFIX)) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command && client.commands.has(commandName)) return;

    if (!message.guild.me.permissions.has('SEND_MESSAGES')) return message.member.send(`I need the 'SEND_MESSAGES' permission to be able to reply to commands in  the server: ${message.guild.name}`);

    try {
        command.execute(message, args, distube);
    } catch(error) {
        console.error(error);
        message.reply('Uh oh! It looks like you have encountered a glitch up in the system, please try again later! || <@498615291908194324> fix yo dead bot ||')
    }
});

client.on('messageCreate', message => {
    console.log(`${message.guild.name} in #${message.channel.name} | ${message.author.username}#${message.author.discriminator}: ${message.content}`);
})

//slash commands

/*const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationCommands(process.env.CLIENT_ID),
			{ body: 'bruh' },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})(); */

// music embeds :)
distube.on('playSong', (queue, song) => {
    const playEmbed = new MessageEmbed()
    .setDescription(`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`)

    queue.textChannel.send({ embeds: [playEmbed] });
});

distube.on('addSong', (queue, song) => {
    const addSongEmbed = new MessageEmbed()
    .setDescription(`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`);

    queue.textChannel.send({ embeds: [addSongEmbed] });
});


distube.on('addList', (queue, playlist) => {
    const addListEmbed = new MessageEmbed()
    .setDescription(`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue`)

    queue.textChannel.send({ embeds: [addListEmbed] });
});

distube.on('error', (channel, error) => {
	console.error(error)
	channel.send(`An error encoutered: ${error}`)
    .catch(err => console.log(err))
})

distube.on('disconnect', queue => {
    const disconnectEmbed = new MessageEmbed()
    .setDescription('Disconnected from the VC')

    queue.textChannel.send({ embeds: [disconnectEmbed] })
})

//banned word removal type beat

const noNoWords = ['https://tenor.com/view/pog-frog-frog-pog-frog-dance-gif-20735320', 'https://media.discordapp.net/attachments/562740967644594186/680193230142439446/1472904618094.gif', 'https://tenor.com/view/projectile-bird-poop-bird-poop-gif-11626075', 'https://tenor.com/view/caress-fruits-gif-12997033', 'https://media.discordapp.net/attachments/610587194528104452/730189439522832414/do_not_disrespect.gif', 'https://tenor.com/view/old-man-guy-senior-walker-gerald-gif-17449313'];

client.on("messageCreate", message => {
    let content = message.content;
    for (let i = 0; i < noNoWords.length; i++) {
        if (content.includes(noNoWords[i])){
            message.delete()
            .catch (error => console.error(error))
            break
        }
    }
})


client.on("messageCreate", message => {
        if(message.content.includes("[Epic")) {
            message.delete();
        }
})




client.on("messageCreate", function(message) {
    //telling people to shutup lol little trolling.com XDXD
    //               Cameron:               Steev:                Leandro:              Mine:
const userIDs = ['725141738255024229', '625765223915061289',/*'381177173274263563','498615291908194324'*/];

    const deadResponses = ['Shush please, thanks!!', 'Did i ask', 'If i had a NASA satalite i would use it to try find who asked', 'Sick', 'Ok', 'Omds can u please shush', 'You remember when i asked for your opinion? Nah me neither', 'Cicho bądź', 'Cheeto bądź']
    for (let i = 0; i < userIDs.length; i++) {
        if (message.author.id === userIDs[i]){
            let randomNumber = Math.floor(Math.random() * 9);
            message.reply(deadResponses[randomNumber])
            .then (console.log(`said "${deadResponses[randomNumber]}" to ${message.author.username} in ${message.guild.name}`))
            .catch (error => console.error(error));
            break
        }
    }
});

client.on('error', (err) => {console.error(err)});

//login ting
client.login(process.env.DISCORD_TOKEN);
