module.exports = 
{
    name: 'args-info',
    description: 'Info about arguments',
    execute(message, args) {
        if(!args.length) {
            return message.channel.send(`you have not provided any arguments, ${message.author}`);
        } else if(args[0] === 'foo') {
            return message.chanel.send('bar');
        }

        message.channel.send(`Arguments: $args{ \nArguments Length: ${args.length}}`);
    }
}