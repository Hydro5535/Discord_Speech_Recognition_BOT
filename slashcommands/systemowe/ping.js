const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Pong!"),
    async execute(client, interaction, distube) {
        try {
            const msg = await interaction.reply({ content: "🏓 Pinging...", fetchReply: true });
      
            await interaction.editReply({ content: `🏓 Pong!\nCzas oczekiwania: \`${msg.createdTimestamp - interaction.createdTimestamp}ms\`, API: \`${client.ws.ping}ms\`` });
          } catch (err) {
            console.log("Coś poszło nie tak! => ", err);
        }
    }
}