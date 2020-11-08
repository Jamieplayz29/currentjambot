const {Client, RichEmbed} = require('discord.js');
const client = new Client();

const noNoWords = ['https://media.discordapp.net/attachments/562740967644594186/680193230142439446/1472904618094.gif'];

const PREFIX = "/"

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});


client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong');
    } 
}); 


client.on("message", message => {
    var content = message.content;
    var stringToCheck = content.replace(/\s+/g, '').toLowerCase();

    for (var i = 0; i < noNoWords.length; i++) {
        if (content.includes(noNoWords[i])){  
            message.delete();
            break
        }
    }
})

client.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'a':
            message.channel.send('/a <@529024504156913679>')   


    }

})



client.login('NzA5MDI2OTM2OTE5MjkzOTg0.Xrf6yg.Lt4vxutppDsljvTRyv4dRvhz4Eg')