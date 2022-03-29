const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = {
    name: "dolacz",
    category: "systemowe",
    description: "Dołączanie bota do kanału głosowego",
    run: (client, message, args, distube) => 
    {
        let voiceChannel = message.member?.voice.channel;
        
        if (voiceChannel)
        {
            joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: voiceChannel.guild.id,
                adapterCreator: voiceChannel.guild.voiceAdapterCreator,
                selfDeaf: false,
            });
            message.reply("Już się robi!");
        }
        else
        {
            message.reply("⛔️ Najpierw dołącz na kanał głosowy!");
        }
    }
}