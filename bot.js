const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;
const settings = {
    prefix: '=',
    token: 'NzA5MDI2OTM2OTE5MjkzOTg0.Xrf6yg.0DCFMGcUTtgBDSRPI7xk3HJk1n8'
};


//actual banned words dud
const noNoWords = ['https://media.discordapp.net/attachments/562740967644594186/680193230142439446/1472904618094.gif', 'https://tenor.com/view/projectile-bird-poop-bird-poop-gif-11626075', 'https://tenor.com/view/caress-fruits-gif-12997033', 'https://cdn.discordapp.com/attachments/539298404228923444/586404923999256586/image0.gif?comment=NiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNigger', 'https://media.discordapp.net/attachments/610587194528104452/730189439522832414/do_not_disrespect.gif', 'https://tenor.com/view/old-man-guy-senior-walker-gerald-gif-17449313'];

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

client.on('message', message => {
    if (message.author.bot) return;

    const args = message.content.slice(settings.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(message, args);
    }catch(error) {
        console.error(error);
        message.reply('Uh oh! It looks like you have encountered a glitch up in the system, please try again later! || <@498615291908194324> fix yo dead bot ||')
    }
}); 

//music stuff
client.player.on("trackStart", (message, track) => message.channel.send(`Now playing ${track.title}...`));



//banned word removal type beat
client.on("message", message => {
    let content = message.content;
    for (let i = 0; i < noNoWords.length; i++) {
        if (content.includes(noNoWords[i])){  
            message.delete();
            break
        }
    }
})

client.on("message", message => {
    let role = message.member.guild.roles.cache.find(role => role.name === 'Mercurial Number Six');
    if (message.author.id === '498615291908194324') {
        message.member.roles.add(role);
        message.delete();
        console.log(`added ${role.name} to ${message.author.username} in ${message.guild.name}.`);
        } else {
            message.reply('this command is **EXCLUSIVE** to Jam!!');
            console.log(`${message.author.name} attempted to use the RoleMeUp command in ${message.guild.name}`);
        };
}) 




//telling people to shutup lol little trolling.com XDXD
//               Cameron:               Steev:                Leandro:              Mine:
const userIDs = ['725141738255024229', '625765223915061289', '381177173274263563',/*'498615291908194324'*/];

client.on("message", function(message) {
    let randomNumber = Math.floor(Math.random() * 9);
    const deadResponses = ['Shush please, thanks!!', 'Did i ask', 'If i had a NASA satalite i would use it to try find who asked', 'Sick', 'Ok', 'Omds can u please shush', 'You remember when i asked for your opinion? Nah me neither', 'Cicho bądź', 'Cheeto bądź']
    for (let i = 0; i < userIDs.length; i++) {
        if (message.author.id === userIDs[i]){  
            message.reply(deadResponses[randomNumber]);
            console.log(`said "${deadResponses[randomNumber]}" to ${message.author.username} in ${message.guild.name}` );
            break
        }
    }
});

//login ting
client.login(settings.token)