module.exports =
{
    name: 'ping',
    description: 'Ping Command',
    execute(message, args) {
        let ping = new Date().getTime() - message.createdTimestamp
        message.reply(`pong (${ping}ms)`);

        return client.shard.fetchClientValues('guilds.cache.size')
        .then(results => {
            return message.reply(`Server count: ${results.reduce((acc, guildCount) => acc + guildCount, 0)}`);
        })
        .catch(console.error);
    }
}