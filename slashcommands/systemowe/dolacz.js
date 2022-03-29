const { SlashCommandBuilder } = require('@discordjs/builders');
const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dolacz")
        .setDescription("Dołączanie bota do kanału głosowego"),
    async execute(client, interaction, distube) {
        const guild = client.guilds.cache.get(interaction.guild.id);
        const member = guild.members.cache.get(interaction.member.user.id);
        const voiceChannel = member.voice.channel

        if (voiceChannel)
        {
            joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: voiceChannel.guild.id,
                adapterCreator: voiceChannel.guild.voiceAdapterCreator,
                selfDeaf: false,
            });
            interaction.reply("Już się robi!");
        }
        else
        {
            interaction.reply("⛔️ Najpierw dołącz na kanał głosowy!");
        }
    }
}