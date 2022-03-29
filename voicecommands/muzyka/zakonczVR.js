module.exports = {
    name: "zakończ",
    category: "rozpoznawanie_mowy",
    description: "Zatrzymanie odtwarzania i czyszczenie kolejki",
    run: async (client, msg, value, channel, distube) => 
    {
        let queue = distube.getQueue(msg);
        if (queue)
        {
            console.log("Zakończ!");
            distube.stop(msg);
        }
        else
        {
            let vchannel = channel;
            let voiceConnection;
            let audioPlayer = new AudioPlayer();
    
            const stream = discordTTS.getVoiceStream(`Nic nie odtwarzam! Nie można zakończyć odtwarzania!`);
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