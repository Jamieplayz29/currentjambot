module.exports =
{
    name: 'stop',
    description: 'clears the queue and leaves the voice chat',
    aliases: ['dc', 'leave', 'leaveden', 'fuckoff', 'getout', 'exit', 'cicho-badz', 'cicho', 'cheeto-bonge'],
    execute(message, args, distube) {
        distube.stop(message)
    }
} 