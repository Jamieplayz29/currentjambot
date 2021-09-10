const {Client, Intents, Discord, Collection, MessageEmbed} = require('discord.js');
const client = new Client({
    partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION'],
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES']
});
const fs = require('fs');
client.commands = new Collection();
const { Player } = require("discord-player");
const { measureMemory } = require('vm');
const player = new Player(client);
client.player = player;
require('dotenv').config();


//actual banned words dud
const noNoWords = ['https://tenor.com/view/pog-frog-frog-pog-frog-dance-gif-20735320', 'https://media.discordapp.net/attachments/562740967644594186/680193230142439446/1472904618094.gif', 'https://tenor.com/view/projectile-bird-poop-bird-poop-gif-11626075', 'https://tenor.com/view/caress-fruits-gif-12997033', 'https://media.discordapp.net/attachments/610587194528104452/730189439522832414/do_not_disrespect.gif', 'https://tenor.com/view/old-man-guy-senior-walker-gerald-gif-17449313'];

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
    const command = args.shift().toLowerCase();
    const embed = new MessageEmbed()

    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(message, args, embed);
    }catch(error) {
        console.error(error);
        message.reply('Uh oh! It looks like you have encountered a glitch up in the system, please try again later! || <@498615291908194324> fix yo dead bot ||')
    }
});



client.on('messageCreate', message => {
    console.log(`${message.guild.name} in #${message.channel.name} | ${message.author.username}#${message.author.discriminator}: ${message.content}`);
})


//music stuff :(
client.player.on("trackStart", (message, track) => message.channel.send(`Now playing ${track.title}...`));



//banned word removal type beat
client.on("messageCreate", message => {
    let content = message.content;
    for (let i = 0; i < noNoWords.length; i++) {
        if (content.includes(noNoWords[i])){  
            message.delete();
            console.log(`${noNoWords[i]} was sent by ${message.author.username} and was deleted`)
            break
        } 
    }
})







client.on("messageCreate", function(message) {
    //telling people to shutup lol little trolling.com XDXD
    //               Cameron:               Steev:                Leandro:              Mine:
    const userIDs = ['725141738255024229', '625765223915061289','381177173274263563','498615291908194324'];

    const deadResponses = ['Shush please, thanks!!', 'Did i ask', 'If i had a NASA satalite i would use it to try find who asked', 'Sick', 'Ok', 'Omds can u please shush', 'You remember when i asked for your opinion? Nah me neither', 'Cicho bądź', 'Cheeto bądź']
    for (let i = 0; i < userIDs.length; i++) {
        if (message.author.id === userIDs[i]){
            let randomNumber = Math.floor(Math.random() * 9);
            message.reply(deadResponses[randomNumber]);
            console.log(`said "${deadResponses[randomNumber]}" to ${message.author.username} in ${message.guild.name}`);
            break
        }
    }
});


//login ting
client.login(process.env.DISCORD_TOKEN);