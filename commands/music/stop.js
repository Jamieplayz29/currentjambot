module.exports =
{
    name: 'stop',
    description: 'plays a song',
    execute(message, args, distube) {
        distube.stop(message)
    }
} 