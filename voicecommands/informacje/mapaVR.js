const fetch = require('node-fetch');
const discordTTS = require('discord-tts');
const {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} = require("@discordjs/voice");

module.exports = {
    name: "mapa",
    category: "informacje",
    description: "Informuje jaka mapa obecnie figuruje w normalnych meczach w grze Apex Legends",
    run: async (client, msg, value, channel, distube) =>
    {
        let token = client.config.apex_secret;
        if (token)
        {
            console.log("Mapa!");
        
            const api = `https://api.mozambiquehe.re/maprotation?version=5&auth=${token}`;
    
            fetch(api).then(response => {
                if (response.ok)
                {
                    return response.json();
                }
            }).then(json => {
                let timeLeft = json.battle_royale.current.remainingTimer;
                let possible = timeLeft.split(":");
                let tl;
                let map;
                getHours(possible[0]);
                getMinutes(possible[1]);
                getSeconds(possible[2]);
                mapName(json.battle_royale.current.map);
    
                function getHours(data)
                {
                    let hours = data;
                    if (hours.startsWith("0"))
                    {
                        let validate = parseInt(hours.replace("0",""));
                        if (validate == 1)
                        {
                            return tl = `godzinę `;
                        }
                        else if (validate >= 2 && validate <= 4)
                        {
                            let number = parseInt(validate);
                            return tl = `${number} godziny `;
                        }
                        else
                        {
                            return tl = "";
                        }
                    }
                    else
                    {
                        let number = parseInt(hours);
                        return tl = `${number} godzin `;
                    }
                }
    
                function getMinutes(data)
                {
                    let minutes = data;
                    if (minutes.startsWith("0"))
                    {
                        let validate = parseInt(minutes.replace("0",""));
                        if (validate == 1)
                        {
                            return tl = tl + `minutę `;
                        }
                        else if (validate >= 2 && validate <= 4)
                        {
                            let number = parseInt(validate);
                            return tl = tl + `${number} minut `;
                        }
                        else
                        {
                            return tl = tl;
                        }
                    }
                    else
                    {
                        let number = parseInt(minutes);
                        return tl = tl + `${number} minut `;
                    }
                }
    
                function getSeconds(data)
                {
                    let seconds = data;
                    if (seconds.startsWith("0"))
                    {
                        let validate = parseInt(seconds.replace("0",""));
                        if (validate == 1)
                        {
                            return tl = tl + `sekundę`;
                        }
                        else if (validate >= 2 && validate <= 4)
                        {
                            let number = parseInt(validate);
                            return tl = tl + `${number} sekundy`;
                        }
                        else
                        {
                            tl = tl;
                        }
                    }
                    else
                    {
                        let number = parseInt(seconds);
                        return tl = tl + `${number} sekund`;
                    }
                }
    
                function mapName(data)
                {
                    if (data == "Olympus")
                    {
                        return map = "Olimp";
                    }
                    else if (data == "Kings Canyon")
                    {
                        return map = "Królewski Kanion";
                    }
                    else if (data == "World's Edge")
                    {
                        return map = "Skraj Świata";
                    }
                    else if (data == "Storm Point")
                    {
                        return map = "Punkt Burzowy";
                    }
                    else
                    {
                        return map;
                    }
                }
    
                say(tl, map);
            });
    
            async function say(tl, map)
            {
                let mapa = map;
                let time = tl;
                let vchannel = channel;
                let voiceConnection;
                let audioPlayer = new AudioPlayer();
    
                const stream = discordTTS.getVoiceStream(`Obecna mapa to ${mapa}. Zmiana nastąpi za ${time}`);
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
        else
        {
            let vchannel = channel;
            let voiceConnection;
            let audioPlayer = new AudioPlayer();
    
            const stream = discordTTS.getVoiceStream(`Nie podano klucza api wymaganego dla tej komendy!`);
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