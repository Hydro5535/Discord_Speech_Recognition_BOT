const { getVoiceConnection } = require("@discordjs/voice");

module.exports = {
    name: "wyjdź",
    category: "rozpoznawanie_mowy",
    description: "Bot opuszcza kanał głosowy, na którym się znajduje",
    run: (client, msg, value, channel, distube) =>
    {
        console.log("Wyjdź!");
        const connection = getVoiceConnection(msg.guild.id);
    
        connection.destroy();
        client.user.setPresence({ activities: [{ name: `${client.config.prefix}info`, type: 0 }] });
    }
}