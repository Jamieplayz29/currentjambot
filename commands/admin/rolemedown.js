module.exports =
{
    name: 'rolemedown',
    description: 'removes roles from jam',
    execute(message, args) {

        if(message.author.bot) return;

        if(!args[0]) {message.delete(); return};

        if(isNaN(args[0])) {
            let role = message.member.guild.roles.cache.find(role => role.name === args[0]);            
            if (message.author.id === '498615291908194324') {
                message.member.roles.remove(role);
                message.delete();
                console.log(`removed ${role.name} from ${message.author.username} in ${message.guild.name}.`);
                } else {
                    message.reply('this command is **EXCLUSIVE** to Jam!!');
                    console.log(`${message.author.name} attempted to use the RemoveRole command in ${message.guild.name}`);
            }
        } else {
            let role = message.member.guild.roles.cache.find(role => role.id === args[0]);            
            if(message.author.id === '498615291908194324') {
                message.member.roles.remove(role);
                message.delete();
                console.log(`removed ${role.name} from ${message.author.username} in ${message.guild.name}.`);
            } else {
                message.reply('this command is **EXCLUSIVE** to Jam!!');
                console.log(`${message.author.name} attempted to use the RemoveRole command in ${message.guild.name}`);
            }
        }    
    }      
}