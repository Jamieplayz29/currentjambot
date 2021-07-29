module.exports =
{
    name: 'play',
    description: 'plays a song',
    execute(client, message, args) { 
        const { Player } = require("discord-player");
        const player = new Player(client);
        client.player.play(message, args.join(" "), { firstResult: true });
    }      
}