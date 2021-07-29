module.exports =
{
    name: 'ping',
    description: 'Ping Command',
    execute(message, args) {
        let ping = new Date().getTime() - message.createdTimestamp
        message.reply(`pong (${ping}ms)`);
    }
}