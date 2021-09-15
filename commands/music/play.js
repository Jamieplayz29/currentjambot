module.exports =
{
    name: 'play',
    description: 'plays a song',
    execute( message, args, distube) {
        distube.play(message, args.join(' '))
    }
} 