module.exports =
{
    name: 'jump',
    description: 'jumps to a song in the queue',
    aliases: ['skipto', 'j', 'jumpto'],
    execute( message, args, distube) {
        distube.jump(message, parseInt(args[0]))
        .catch(err => console.log(err))
    }
} 