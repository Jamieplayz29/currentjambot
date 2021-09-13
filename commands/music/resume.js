module.exports =
{
    name: 'resume',
    description: 'resumes the music',
    execute(message, args, distube) {
        distube.resume(message)
    }      
} 