const {Client, Collection, EmbedBuilder, GatewayIntentBits, Partials, Events, REST, Routes, SlashCommandBuilder } = require('discord.js');
const client = new Client({
    partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message,
        Partials.Reaction
    ],

    intents: [    
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.MessageContent
    ],
});
const fs = require('fs');
client.commands = new Collection();
const DisTube = require('distube')
const { SoundCloudPlugin } = require('@distube/soundcloud')
const { SpotifyPlugin } = require("@distube/spotify");
require('dotenv').config();
const path = require('node:path');
const mongoose = require('mongoose');
const { YtDlpPlugin } = require("@distube/yt-dlp")
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
            new SoundCloudPlugin(),
            new YtDlpPlugin({ update: true })
        ],
})
// new command handler
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

client.once(Events.ClientReady, () => {
	console.log('Ready!');
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction, distube);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});



/*log the login in console... type beat
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});


// old command handler 
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

    if (!message.guild.members.me.permissions.has('SEND_MESSAGES')) return message.member.send(`I need the 'SEND_MESSAGES' permission to be able to reply to commands in  the server: ${message.guild.name}`);

    try {
        command.execute(message, args, distube);
    } catch(error) {
        console.error(error);
        message.reply('Either an error occured or that command doesn\'t exist, please check the command and use *=help* to see what commands I have!')
    }
});
*/


// logging disabled
/* client.on('messageCreate', message => {
    console.log(`${message.guild.name} in #${message.channel.name} | ${message.author.username}#${message.author.discriminator}: ${message.content}`);
}) */

//slash commands
/*const music = require('./commands/music/play.js')

const commands = [];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
*/


// music embeds :)
distube.on('playSong', (queue, song) => {
    const playEmbed = new EmbedBuilder()
    .setDescription(`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`)

    queue.textChannel.send({ embeds: [playEmbed] });
});

distube.on('addSong', (queue, song) => {
    const addSongEmbed = new EmbedBuilder()
    .setDescription(`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`);

    queue.textChannel.send({ embeds: [addSongEmbed] });
});


distube.on('addList', (queue, playlist) => {
    const addListEmbed = new EmbedBuilder()
    .setDescription(`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue`)

    queue.textChannel.send({ embeds: [addListEmbed] });
});

distube.on('error', (channel, error) => {
	console.error(error)
	channel.send(`An error encoutered: ${error}`)
    .catch(err => console.log(err))
})

distube.on('disconnect', queue => {
    const disconnectEmbed = new EmbedBuilder()
    .setDescription('Disconnected from the VC')

    queue.textChannel.send({ embeds: [disconnectEmbed] })
})


client.on("messageCreate", message => {
        if(message.content.includes("[Epic")) {
            message.delete();
        }
})




client.on("messageCreate", function(message) {
    //telling people to shutup lol little trolling.com XDXD
    //               Cameron:               Steev:                Leandro:              Mine:
const userIDs = ['725141738255024229' , '625765223915061289',/*'381177173274263563'*/,/* '498615291908194324' */];


    const deadResponses = ['Shush please, thanks!!', 'Did i ask', 'If i had a NASA satalite i would use it to try find who asked', 'Sick', 'Ok', 'Omds can u please shush', 'You remember when i asked for your opinion? Nah me neither', 'Cicho bądź', 'Cheeto bądź', 'yoooo thats crazy but who asked']
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

//smiley dealer
client.on("messageCreate", message => {
    const emojis = new Map([
        ['😂', '<:smileyJoy:955917291936186432>'],
        ['😳', '<:SmileyFlushed:955941065846824970>'],
        ['👼', '<a:SmileyAngel:955945220892155984> '],
        ['😠', '<:SmileyAngry:955941065834242048>'],
        ['🖤', '<a:SmileyBlackHeart:955941065918140496>'],
        ['💙', '<a:SmileyBlueHeart:955941066522103838>'],
        ['😊', '<:SmileyBlush:955941065448374364>'],
        ['👏', '<a:SmileyClap:955941066526314496>'],
        ['🙂', '<:SmileySlightSmile:955941066551480340>'],
        ['👍', '<:SmileyThumbsUp:955941066505338960>'],
        ['😯', '<:SmileyHushed:955941066249486366> '],
        ['😦', '<:SmileyFrowning:955941066245279794>'],
        ['😐', '<:SmileyFrowning:955941066245279794>'],
        ['😐', '<:SmileyNeutralFace:955941066140434472>'],
        ['😁', '<:SmileyGrin:955941066014597200>'],
        ['🤔', '<:SmileyThink:955941065960071198>'],
        ['🙃', '<:SmileyUpsideDown:955941065951682621>'],
        ['🤠', '<:SmileyCowboy:955941065943306260>'],
        ['💩', '<:SmileyPoop:955941065708433448>'],
        ['🍇', '<:SmileyGrape:955941065662267423>'],
        ['🍋', '<:SmileyLemon:955941065536438382>'],
        ['🆒', '<:cool_1:520062631390740491>'],
        ['😬', '<a:SmileyGrimace:955941067377766470>'],
        ['😡', '<a:SmileyRage:955941067377762394>'],
        ['🙄', '<a:SmileyRollingEyes:955941067352600576>'],
        ['🤮', '<a:SmileyVomiting:955941067012866098>'],
        ['😘', '<a:SmileyKissingHeart:955941067012857867>'],
        ['👺', '<a:SmileyDevil:955941066991865927>'],
        ['💀', '<a:SmileySkull:955941066941542450>'],
        ['😭', '<a:SmileyCry:955941066694082652>'],
        ['👹', '<a:SmileyJapaneseGoblin:955941066002006097>']
    ]) 

    for (let i = 0; i < emojis.size ; i++) {
        if (emojis.has(message.content)) {
            message.react(emojis.get(message.content))
            break
        }


    }

    /* if(message.content.includes('😂')) { message.react('<:smileyJoy:955917291936186432>') }
    if(message.content.includes('😳')) { message.react('<:SmileyFlushed:955941065846824970>') }
    if(message.content.includes('👼')) { message.react('<a:SmileyAngel:955945220892155984>') }
    if(message.content.includes('😠')) { message.react('<:SmileyAngry:955941065834242048>') } 
    if(message.content.includes('🖤')) { message.react('<a:SmileyBlackHeart:955941065918140496>') } 
    if(message.content.includes('💙')) { message.react('<a:SmileyBlueHeart:955941066522103838>') } 
    if(message.content.includes('😊')) { message.react('<:SmileyBlush:955941065448374364>') }
    if(message.content.includes('👏')) { message.react('<a:SmileyClap:955941066526314496>') } 
    if(message.content.includes('🙂')) { message.react('<:SmileySlightSmile:955941066551480340>') }
    if(message.content.includes('👍')) { message.react('<:SmileyThumbsUp:955941066505338960>') }
    if(message.content.includes('')) { message.react('') }
    if(message.content.includes('')) { message.react('') }
    if(message.content.includes('')) { message.react('') }
    */
     
});

// if(message.content.includes('')) { message.react('') } 








client.on('error', (err) => {console.error(err)});



//login ting
client.login(process.env.DISCORD_TOKEN);


function startBot(client) {
    client.login(process.env.DISCORD_TOKEN);
}
module.exports = { client };

module.exports = {
    startBot
};