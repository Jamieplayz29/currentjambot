module.exports =
{
    name: 'previous',
    description: 'replays previous song from the queue',
    aliases: ['prev', 'replay', 'r'],
    execute( message, args, distube) {
        distube.previous(message)
    }
} 