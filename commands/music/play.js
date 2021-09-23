module.exports =
{
    name: 'play',
    description: 'plays a song',
    aliases: ['p'],
    execute( message, args, distube) {
        distube.play(message, args.join(' '))
    }
} 