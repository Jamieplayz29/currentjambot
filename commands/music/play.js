module.exports =
{
    name: 'play',
    description: 'plays a song',
    async execute(message, args) { 
        if (!message.member.voice.channelId) return await message.reply({ content: "You are not in a voice channel!", empheral: true });
        if (message.guild.me.voice.channelId && message.member.voice.channelId !== message.guild.me.voice.channelId) return await message.reply({ content: "You are not in my voice channel!", empheral: true });
        const query = message.options.get("query").value;
        const queue = player.createQueue(message.guild, {
            metadata: {
                channel: message.channel
            }
        });
    }      
}