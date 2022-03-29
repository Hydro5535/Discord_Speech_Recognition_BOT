module.exports = {
    name: "stop",
    category: "rozpoznawanie_mowy",
    description: "Zatrzymuje odtwarzanie obecnego utworu",
    run: async (client, msg, value, channel, distube) => 
    {
        let queue = distube.getQueue(msg);
        if (queue)
        {
            console.log("Stop!");
            distube.pause(msg);
        }
        else
        {
            let vchannel = channel;
            let voiceConnection;
            let audioPlayer = new AudioPlayer();
    
            const stream = discordTTS.getVoiceStream(`Nic nie odtwarzam! Nie można zatrzymać utworu!`);
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