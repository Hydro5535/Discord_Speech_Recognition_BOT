const { SlashCommandBuilder } = require('@discordjs/builders');
const { getVoiceConnection } = require("@discordjs/voice");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("wyjdz")
        .setDescription("Bot opuszcza kanał głosowy, na którym się znajduje"),
    async execute(client, interaction, distube) {
        const connection = getVoiceConnection(interaction.guild.id);
    
        if (!connection)
        {
            interaction.reply("⛔️ Nie znajduje się na żadnym kanale głosowym!");
        }
        else
        {
            connection.destroy();
            client.user.setPresence({ activities: [{ name: `${client.config.prefix}info`, type: 0 }] });
        } 
    }
}