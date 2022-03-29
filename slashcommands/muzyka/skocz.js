const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("skocz")
        .setDescription("Przeskakuje do wybranego utworu (Numeracja: 1 następny utwór itd. , -1 poprzedni utwór itd.)")
        .addIntegerOption(option =>
            option.setName("wartość")
                .setDescription("Numer utworu")
                .setRequired(true)),
    async execute(client, interaction, distube) {
        let queue = distube.getQueue(interaction);

        if (!queue)
        {
            interaction.reply("⛔️ Nic nie odtwarzam! Nie można przeskoczyć do podanego utworu!");
        }
        else
        {
            let value = interaction.options.getInteger("wartość");
            distube.jump(interaction, value)
            .catch(err => interaction.reply("❌ Error, nie udało się znaleźć w kolejce utworu z takim numerem!"));
        
            if (value > 0)
            {
                interaction.reply("⏭ Przechodzę do wybranego utworu");
            }
            else
            {
                interaction.reply("⏮ Przechodzę do wybranego utworu");
            }
        }
    }
}