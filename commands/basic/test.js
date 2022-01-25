module.exports =
{
    name: 'test',
    description: 'test',
    aliases: [],
    execute(message, args, client) {
    message.guild.members.fetch(process.env.CLIENT_ID)
        .then(data => console.log(data.roles.highest.position))
    }      
} 
