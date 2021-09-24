const { DisTubeError } = require("distube")

module.exports =
{
    name: 'skip',
    description: 'skips the song',
    aliases: ['s'],
    execute( message, args, distube) {
        distube.skip(message)
        .catch(err => console.log(err))
    }
} 