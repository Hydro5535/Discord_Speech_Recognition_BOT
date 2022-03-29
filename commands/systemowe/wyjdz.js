const { getVoiceConnection } = require("@discordjs/voice");

module.exports = {
    name: "wyjdz",
    category: "systemowe",
    description: "Bot opuszcza kanał głosowy, na którym się znajduje",
    run: (client, message, args, distube) =>
    {
        const connection = getVoiceConnection(message.guild.id);
    
        if (!connection)
        {
            message.reply("⛔️ Nie znajduje się na żadnym kanale głosowym!");
        }
        else
        {
            connection.destroy();
            client.user.setPresence({ activities: [{ name: `${client.config.prefix}info`, type: 0 }] });
        }      
    }
}