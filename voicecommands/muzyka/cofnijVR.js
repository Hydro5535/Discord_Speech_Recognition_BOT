const discordTTS = require('discord-tts');
const {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} = require("@discordjs/voice");

module.exports = {
    name: "cofnij",
    category: "rozpoznawanie_mowy",
    description: "Cofa kolejkę odtwarzania do poprzedniego utworu",
    run: async (client, msg, value, channel, distube) => 
    {
        let queue = distube.getQueue(msg);
        if (queue)
        {
            console.log("Cofnij!");
            distube.previous(msg);
        }
        else
        {
            let vchannel = channel;
            let voiceConnection;
            let audioPlayer = new AudioPlayer();
    
            const stream = discordTTS.getVoiceStream(`Nic nie odtwarzam! Nie można cofnąć utworu!`);
            const audioResource = createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});
    
            if (!voiceConnection || voiceConnection?.status === VoiceConnectionStatus.Disconnected)
            {
                voiceConnection = joinVoiceChannel({
                    channelId: vchannel.id,
                    guildId: vchannel.guild.id,
                    adapterCreator: vchannel.guild.voiceAdapterCreator,
                });
                voiceConnection = await entersState(voiceConnection, VoiceConnectionStatus.Ready, 5_000);
            }
    
            voiceConnection.subscribe(audioPlayer);
            audioPlayer.play(audioResource);
        }
    }
}