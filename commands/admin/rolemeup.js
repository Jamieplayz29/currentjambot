module.exports =
{
    name: 'rolemeup',
    description: 'addes roles to jam',
    execute(message, args) {
        if(message.author.bot) return;
        let role = message.member.guild.roles.cache.find(role => role.name === 'Mercurial Number Six');
        if (message.author.id === '498615291908194324') {
            message.member.roles.add(role);
            message.delete();
            console.log(`added ${role.name} to ${message.author.username} in ${message.guild.name}.`);
            } else {
                message.reply('this command is **EXCLUSIVE** to Jam!!');
                console.log(`${message.author.name} attempted to use the RoleMeUp command in ${message.guild.name}`);
            };
    }      
} 