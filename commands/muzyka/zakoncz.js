const { getVoiceConnection } = require("@discordjs/voice");
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    name: "zakoncz",
    category: "muzyka",
    description: "Zatrzymanie odtwarzania i czyszczenie kolejki",
    run: async (client, message, args, distube) =>
    {
        let queue = distube.getQueue(message);

        const connection = getVoiceConnection(message.guild.id);

        if (!queue)
        {
            message.reply("⛔️ Nic nie odtwarzam! Nie można zakończyć odtwarzania!");
        }
        else
        {
            distube.stop(message);
            message.channel.send("⏹ Odtwarzanie muzyki zostało wyłączone, a kolejka odtwarzania wyczyszczona!");
            connection.destroy();
            await wait(1000);
            client.user.setPresence({ activities: [{ name: `${client.config.prefix}info`, type: 0 }] });
        }
    }
}