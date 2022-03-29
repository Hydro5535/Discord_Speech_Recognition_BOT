const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "mapa",
    category: "informacje",
    description: "Informuje jaka mapa obecnie figuruje w normalnych meczach w grze Apex Legends",
    run: (client, message, args, distube) =>
    {
        let token = client.config.apex_secret;

        if (!token)
        {
            message.reply("Nie podano klucza api wymaganego dla tej komendy!");
        }
        else
        {
            const api = `https://api.mozambiquehe.re/maprotation?version=5&auth=${token}`;

            fetch(api).then(response => {
                if (response.ok)
                {
                    return response.json();
                }
            }).then(json => {
                let timeLeft = json.battle_royale.current.remainingTimer;
                let mapa;
                let url;
                mapName(json.battle_royale.current.map);

                function mapName(data)
                {
                    if (data == "Olympus")
                    {
                        return mapa = "Olimp", url = "https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/olympus-map-updates/apex-comparison-legacy-season-after-docks-high.jpg";
                    }
                    else if (data == "Kings Canyon")
                    {
                        return mapa = "Królewski Kanion", url = "https://media.contentapi.ea.com/content/dam/apex-legends/common/map-comparison-slider-assets/apex-comparison-s2-shipping-container-town-before.jpg";
                    }
                    else if (data == "World's Edge")
                    {
                        return mapa = "Skraj Świata", url = "https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/s10-map-updates/apex-legends-screenshot-s10-env-02-crackextension-after-clean.jpg";
                    }
                    else if (data == "Storm Point")
                    {
                        return mapa = "Punkt Burzowy", url = "https://cdn.mos.cms.futurecdn.net/fmXjqD9KfsLKKLMav3qVki.jpg";
                    }
                    else
                    {
                        return mapa;
                    }
                }
            
                const embedMessage = new MessageEmbed()
                    .setColor("#0099ff")
                    .setTitle(`Obecna mapa to: ${mapa}`)
                    .setDescription(`Zmiana nastąpi za **${timeLeft}**`)
                    .setImage(url)
                    .setTimestamp();

                message.channel.send({ embeds: [embedMessage] });

            });
        }      
    }
}