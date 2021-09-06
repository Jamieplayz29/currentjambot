module.exports =
{
    name: 'smacmedown',
    description: 'removes all the users roles',
    execute(message, args) {
        message.member.roles.remove(message.member.roles.cache);
        message.delete();
        console.log(`removed all roles from ${message.author.username} in ${message.guild.name}.`);
    }      
} 