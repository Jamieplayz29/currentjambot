const {Client, RichEmbed} = require('discord.js');
const client = new Client();
const settings = {
	prefix: "=",
  token: "NzA5MDI2OTM2OTE5MjkzOTg0.Xrf6yg.0DCFMGcUTtgBDSRPI7xk3HJk1n8"
};


//actual banned words dud
const noNoWords = ['https://media.discordapp.net/attachments/562740967644594186/680193230142439446/1472904618094.gif', 'https://tenor.com/view/projectile-bird-poop-bird-poop-gif-11626075', 'https://tenor.com/view/caress-fruits-gif-12997033', 'https://cdn.discordapp.com/attachments/539298404228923444/586404923999256586/image0.gif?comment=NiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNigger', 'https://media.discordapp.net/attachments/610587194528104452/730189439522832414/do_not_disrespect.gif', 'https://tenor.com/view/old-man-guy-senior-walker-gerald-gif-17449313'];

//log the login in console... type beat
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});
 

//ping command type beat
client.on('message', msg => {
    if (msg.content === `${settings.prefix}ping`) {
        let ping = new Date().getTime() - msg.createdTimestamp
      msg.reply(`pong (${ping}ms)`); 
    } 
}); 

/* spam command type beat 
client.on('message', message => {
    let args = message.content.substring(settings.prefix.length).split(" ");
    switch (args[0]) {
        case 'lost.com':
            message.channel.send('/a <@529024504156913679>');
        
        
    }

}) */


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



//telling people to shutup lol little trolling.com XDXD
//               Cameron:               Steev:                Leandro:
const userIDs = ['725141738255024229', '625765223915061289', '381177173274263563'];

client.on("message", function(message) {
    for (let i = 0; i < userIDs.length; i++) {
        if (message.author.id === userIDs[i]){  
            message.reply("shush please, thanks!!")
            console.log("did a little trolling!!")
            break
        }
    }
});

//login ting
client.login(settings.token)
