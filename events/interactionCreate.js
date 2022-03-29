module.exports = {
    name: "interactionCreate",
    async execute (interaction, distubee) {
        let client = interaction.client;
        let distube = distubee;
        if (!interaction.isCommand()) return;

        const command  = client.slashcommands.get(interaction.commandName);

        if (!command) return;

        try {
            let client = interaction.client;
            await command.execute(client, interaction, distube);
        } catch(err) {
            if (err) console.log(err);

            await interaction.reply("Podczas uruchamiania komendy wystąpił nieoczekiwany błąd!");
        }
    }
}