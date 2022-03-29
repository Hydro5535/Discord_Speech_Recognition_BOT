const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("zapetl")
        .setDescription("Zapętla muzykę w podany sposób")
        .addIntegerOption(option =>
            option.setName('tryb')
                .setDescription('The gif category')
                .setRequired(true)
                .addChoice('Wyłącz', 0)
                .addChoice('Utwór', 1)
                .addChoice('Kolejkę odtwarzania', 2)),
    async execute(client, interaction, distube) {
        let queue = distube.getQueue(interaction);

        if (!queue)
        {
            interaction.reply("⛔️ Nic nie odtwarzam! Nie można zapętlić!");
        }
        else
        {
            let value = interaction.options.getInteger("tryb");
            let mode = distube.setRepeatMode(interaction, value);
            mode = mode ? mode == 2 ? "🔁 Powtarzaj całą playlistę" : "🔂 Powtarzaj obecny utwór" : "Wyłącz powtarzanie";
            interaction.reply("Ustawiono tryb powtarzania na `" + mode + "`");
        }
    }
}