module.exports =
{
    name: 'ping',
    description: 'Ping Command',
    aliases: ['pg'],
    execute(message, args) {
        let ping = new Date().getTime() - message.createdTimestamp
        message.reply(`pong (${ping}ms)`);
    }
}