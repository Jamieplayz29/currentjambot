module.exports =
{
    name: 'seek',
    description: 'skips to a timestamp in the current song',
    aliases: ['ff', 'fast-forward'],
    execute(message, args, distube) {
        if(!args[0]) return message.reply('enter a timestamp in seconds (yeah shush ill add it so u can ff to minute timestamps soon)')
        distube.seek(message, Number(args[0]));
    }      
} 