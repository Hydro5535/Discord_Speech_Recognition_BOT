module.exports = {
    name: "zapętl",
    category: "vr",
    description: "Zapętla w podany sposób: 0 - wyłącz zapętlenie, 1 - zapętla obecny utwór, 2 - zapętla całą obecną playlistę",
    run: async (client, msg, value, channel, distube) => 
    {
        let queue = distube.getQueue(msg);
        if (queue)
        {
            console.log("Zapętl!");
            let type = parseInt(value) || 0;
            let mode = distube.setRepeatMode(msg, type);
            mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";
            console.log("Set repeat mode to `" + mode + "`");
        }
        else
        {
            let vchannel = channel;
            let voiceConnection;
            let audioPlayer = new AudioPlayer();
    
            const stream = discordTTS.getVoiceStream(`Nic nie odtwarzam! Nie można zapętlić!`);
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