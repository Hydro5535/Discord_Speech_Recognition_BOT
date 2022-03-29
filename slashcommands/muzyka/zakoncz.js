const { SlashCommandBuilder } = require('@discordjs/builders');
const { getVoiceConnection } = require("@discordjs/voice");
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName("zakoncz")
        .setDescription("Zatrzymanie odtwarzania i czyszczenie kolejki"),
    async execute(client, interaction, distube) {
        let queue = distube.getQueue(interaction);
        const connection = getVoiceConnection(interaction.guild.id);

        if (!queue)
        {
            interaction.reply("⛔️ Nic nie odtwarzam! Nie można zakończyć odtwarzania!");
        }
        else
        {
            distube.stop(interaction);
            interaction.reply("⏹ Odtwarzanie muzyki zostało wyłączone, a kolejka odtwarzania wyczyszczona!");
            connection.destroy();
            await wait(1000);
            client.user.setPresence({ activities: [{ name: `${client.config.prefix}info`, type: 0 }] });
        }
    }
}