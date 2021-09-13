module.exports =
{
    name: 'skip',
    description: 'skips the song',
    execute( message, args, distube) {
        distube.skip(message)
    }
} 