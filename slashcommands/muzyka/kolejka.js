const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kolejka")
        .setDescription("Wypisuje obecną listę utworów"),
    async execute(client, interaction, distube) {
        let queue = distube.getQueue(interaction);

        if (!queue)
        {
            message.reply("⛔️ Nic nie odtwarzam! Nie znaleziono listy utworów!");
        }
        else
        {
            interaction.reply('Obecna kolejka odtwarzania:\n' + queue.songs.map((song, id) =>
            `**${id+1}**. [${song.name}] - \`${song.formattedDuration}\``
            ).join("\n"));
        }
    }
}