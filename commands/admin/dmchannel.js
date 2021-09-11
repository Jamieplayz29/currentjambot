module.exports =
{
    name: 'dmchannel',
    description: 'creates an invite link to a server',
    execute(message, args) {
        if (message.channel.type === 'dm')
            console.log(message.channel.type)
    }      
} 