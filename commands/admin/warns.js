const { MessageEmbed } = require('discord.js');
const punishments = require('../../models/ModSchema');
const MessageModel = require('../../models/ModSchema');

module.exports =
{
    name: 'warns',
    description: 'displays warns for a user',
    async execute(message, args) { 
        let member = message.mentions.members.first();

        let data = await punishments.findOne({
            GuildID: message.guild.id,
            UserID: member.id
        });


        if (data) {
            console.log(MessageModel.find());

        } else if (!data) {
            console.log('user has no warns')
        }

    }
} 