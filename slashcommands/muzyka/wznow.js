const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("wznow")
        .setDescription("Wznawia odtwarzanie utworu"),
    async execute(client, interaction, distube) {
        let queue = distube.getQueue(interaction);

        if (!queue)
        {
            interaction.reply("⛔️ Nic nie odtwarzam! Nie można wznowić odtwarzania utworu!");
        }
        else
        {
            distube.resume(interaction);
            interaction.reply("⏯ Wznawiam odtwarzanie!");
        }
    }
}