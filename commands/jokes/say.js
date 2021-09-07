module.exports =
{
    name: 'say',
    description: 'makes the bot say what the user says',
    execute(message, args) {
        message.delete()
        message.channel.send(args[0])
    }      
} 