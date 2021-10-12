module.exports =
{
    name: 'resume',
    description: 'resumes the music',
    aliases: ['r', 'res'],
    execute(message, distube) {
        distube.resume(message)
    }
}
