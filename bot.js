const {Client, RichEmbed} = require('discord.js');
const client = new Client();
const { Player } = require("discord-player");
const player = new Player(client);
const {
	prefix,
	token,
} = require('./config.json');

const queue = new Map();
const ytdl = require('ytdl-core');
//constants!!!!  ^^^
// discord-player but rip in the chat for that
client.player = player;
client.player.on('trackStart', (message, track) => message.channel.send(`Now playing ${track.title}...`))

//actual banned words dud
const noNoWords = ['https://media.discordapp.net/attachments/562740967644594186/680193230142439446/1472904618094.gif', 'https://tenor.com/view/projectile-bird-poop-bird-poop-gif-11626075', 'https://tenor.com/view/caress-fruits-gif-12997033', 'https://cdn.discordapp.com/attachments/539298404228923444/586404923999256586/image0.gif?comment=NiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNiggerNigger', 'https://media.discordapp.net/attachments/610587194528104452/730189439522832414/do_not_disrespect.gif', 'https://tenor.com/view/old-man-guy-senior-walker-gerald-gif-17449313'];

//log the login in console... type beat
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});
 

//ping command type beat
client.on('message', msg => {
    if (msg.content === `${prefix}ping`) {
        var ping = new Date().getTime() - msg.createdTimestamp
      msg.reply(`pong (${ping}ms)`); 
    } 
}); 

//spam command type beat 
client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'disabled-command':
            message.channel.send('/a <@529024504156913679>');
        
        
    }

})



//banned word removal type beat
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



//music!!!
client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const serverQueue = queue.get(message.guild.id);
  
    if (message.content.startsWith(`${prefix}play`)) {
      execute(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${prefix}skip`)) {
      skip(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${prefix}stop`)) {
      stop(message, serverQueue);
      return;
    } else {
      message.channel.send("maybe an actual command would be helpful smh.");
    }
  });
  //server queue its literally in the code bruh.com
  async function execute(message, serverQueue) {
    const args = message.content.split(" ");
  
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        "join a voice channel then."
      );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
      return message.channel.send(
        "my role doesn't let me connect/speak in the channel dud"
      );
    }
  
    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
     };
  
    if (!serverQueue) {
      const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };
  
      queue.set(message.guild.id, queueContruct);
  
      queueContruct.songs.push(song);
  
      try {
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        play(message.guild, queueContruct.songs[0]);
      } catch (err) {
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
      }
    } else {
      serverQueue.songs.push(song);
      return message.channel.send(`${song.title} has been added to the queue`);
    }
  }
  
  function skip(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "can stop the music if ur not in the channel mate."
      );
    if (!serverQueue)
      return message.channel.send("nothings playing what do u wanna skip...");
    serverQueue.connection.dispatcher.end();
  }
  
  function stop(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "join the voice channel to stop the music mate"
      );
      
    if (!serverQueue)
      return message.channel.send("nothing is playing so theres... nothing to stop LOL!!!");
      
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
  
  function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
      serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
  
    const dispatcher = serverQueue.connection
      .play(ytdl(song.url))
      .on("finish", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Start playing: **${song.title}**`);
  }




client.login(token)