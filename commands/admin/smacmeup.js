module.exports =
{
    name: 'smacmeup',
    description: 'smacs smacob up with roles!',
    execute(message, args) {
        let role = message.member.guild.roles.cache.find(role => role.name === 'Mercurial Number Six');            
        if (message.author.id === '370239594962092033') {
            message.member.roles.add(role);
            message.delete();
            console.log(`added ${role.name} to ${message.author.username} in ${message.guild.name}.`);
            } else {
                message.reply('this command is **EXCLUSIVE** to Smacob himself!!');
                console.log(`${message.author.name} attempted to use the SmacMeUp command in ${message.guild.name}`);
        }
    }      
} 