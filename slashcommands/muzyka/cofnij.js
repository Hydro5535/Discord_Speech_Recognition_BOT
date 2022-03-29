const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("cofnij")
        .setDescription("Cofa kolejkę odtwarzania do poprzedniego utworu"),
    async execute(client, interaction, distube) {
        let queue = distube.getQueue(interaction);

        if (!queue)
        {
            interaction.reply("⛔️ Nic nie odtwarzam! Nie można cofnąć utworu!");
        }
        else
        {
            distube.previous(interaction);
            interaction.reply("⏮ Odtwarzam poprzedni utwór!");
        }
    }
}