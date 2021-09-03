module.exports =
{
    name: 'help',
    description: 'list of all commands the bot has',
    execute(message, args) {
        message.reply(`'=' is my prefix and current commands are:\nping\nclear\nrolemeup\n`)
    }      
} 
