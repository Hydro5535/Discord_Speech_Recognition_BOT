const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("glosnosc")
        .setDescription("Zmina głośności odtwarzanych utworów")
        .addIntegerOption(option =>
            option.setName("wartość")
                .setDescription("Wartość na jaką ustawić głośność")
                .setRequired(true)),
    async execute(client, interaction, distube) {
        let value = interaction.options.getInteger("wartość");
        
        let queue = distube.getQueue(interaction);

        if (!queue)
        {
            interaction.reply("⛔️ Nic nie odtwarzam! Nie można zmienić głośności!");
        }
        else
        {
            distube.setVolume(interaction, value);
            interaction.reply(`🔊 Ustawiam głośność odtwarzania na **${value}%**`);
        }
    }
}