module.exports = {
    name: "skocz",
    category: "rozpoznawanie_mowy",
    description: "Przeskakuje do wybranego utworu (Numeracja: 1 następny utwór itd.)",
    run: async (client, msg, value, channel, distube) => 
    {
        let queue = distube.getQueue(msg);
        if (queue)
        {
            let jum = parseInt(value);
            console.log("Skocz! " + value);
            distube.jump(msg, jum)
            .catch(err => console.log("Error"));
        }
        else
        {
            let vchannel = channel;
            let voiceConnection;
            let audioPlayer = new AudioPlayer();
    
            const stream = discordTTS.getVoiceStream(`Nic nie odtwarzam! Nie można przeskoczyć do podanego utworu!`);
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