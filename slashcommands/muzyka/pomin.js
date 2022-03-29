const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pomin")
        .setDescription("Pomija obecnie grany utwór"),
    async execute(client, interaction, distube) {
        let queue = distube.getQueue(interaction);

        if (!queue)
        {
            interaction.reply("⛔️ Nic nie odtwarzam! Nie można pominąć utworu!");
        }
        else
        {
            distube.skip(interaction);
            interaction.reply("⏭ Utwór pominięty!");
        }
    }
}