const { DisTubeError } = require("distube")

module.exports =
{
    name: 'skip',
    description: 'skips the song',
    aliases: ['s'],
    execute( message, args, distube) {
        distube.skip(message)
        .catch(err => console.log(err), message.reply(`couldn\'t skip the track, this is probably because there is no song in the queue, use ${process.env.PREFIX}queue to check if any songs are playing or queued.`))
    }
} 