module.exports =
{
    name: 'resume',
    description: 'resumes the music',
    aliases: ['r', 'res'],
    execute(message, args, distube) {
        distube.resume(message)
    }      
} 