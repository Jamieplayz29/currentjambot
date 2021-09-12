const { MessageEmbed } = require('discord.js');
const punishments = require('../../models/ModSchema');


module.exports =
{
    name: 'warn',
    description: 'warns a user',
    async execute(message, args, embed) {
        let member = message.mentions.members.first();

        if (!args[0]) return message.reply('you didn\'t ping anyone to warn them');
        if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply('you need to have the manage messages permission to warn someone');
        if (message.author.id === member.id) return message.reply('man really tried to warn himself bruh.');

        let reason = args.slice(1).join(' ');

        let data = await punishments.findOne({
            GuildID: message.guild.id,
            UserID: member.id
        });

        const WarnEmbed = new MessageEmbed()
        .setDescription(`**Succesfully warned ${member} \n Reason:** *${reason}*`);

        if (data) {
            data.Punishments.unshift({
                PunishType: 'Warn',
                Moderator: message.author.id,
                Reason: reason,
            });
            data.save();

            message.reply({ embeds: [ WarnEmbed ] });

        } else if (!data) {
            let newData = new punishments({
                GuildID: message.guild.id,
                UserID: member.id,
                Punishments: [{
                    PunishType: 'Warn',
                    Moderator: message.author.id,
                    Reason: reason,
                }, ],
            });
            newData.save();

            message.reply({ embeds: [ WarnEmbed ] });
        }




    }      
} 