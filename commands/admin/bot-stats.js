const { EmbedBuilder } = require("discord.js")
const os = require('os')
module.exports =
{
    name: 'bot-stats',
    description: 'displays specs of the server running the bot',
    aliases: ['bs', 'botstats', 'b-s'],
    execute(message) {
      let cpuEntries = Object.values(os.cpus())
      let totalMem = os.totalmem() / 1000000000



      let uptimeHours = Math.floor(os.uptime() / 3600)
      let uptimeMinutes = Math.floor(os.uptime() % 3600 / 60)

      const serverInfoEmbed = new EmbedBuilder()
      .setTitle('__Server Info__')
      .setDescription(`**CPU: **${cpuEntries[0].model} \n **architecture: **${os.arch()} \n **Total Memory:** ${totalMem.toFixed(2)} GB \n **Operating System: **${os.type()} \n **Uptime: **${uptimeHours} hours ${uptimeMinutes} minutes`)

      message.reply({ embeds: [serverInfoEmbed] });
    }
}
