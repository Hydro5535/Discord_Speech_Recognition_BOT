const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("stop")
        .setDescription("Zatrzymuje odtwarzanie obecnego utworu"),
    async execute(client, interaction, distube) {
        let queue = distube.getQueue(interaction);

        if (!queue)
        {
            interaction.reply("⛔️ Nic nie odtwarzam! Nie można zatrzymać utworu!");
        }
        else
        {
            distube.pause(interaction);
            interaction.reply("⏸ Zatrzymuję odtwarzanie utworu!");
        }
    }
}