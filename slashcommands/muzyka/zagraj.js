const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("zagraj")
        .setDescription("Rozpoczyna odgrywanie wybranego utworu")
        .addStringOption(option =>
            option.setName("tytuł")
                .setDescription("Tytuł/link do utworu")
                .setRequired(true)),
    async execute(client, interaction, distube) {
        let title = interaction.options.getString("tytuł");
        const guild = client.guilds.cache.get(interaction.guild.id);
        const member = guild.members.cache.get(interaction.member.user.id);
        const voiceChannel = member.voice.channel;

        if(!voiceChannel)
        {
            interaction.reply("⛔️ Nie znajdujesz się na żadnym kanale głosowym!");
        }
        else
        {
            let queue = distube.getQueue(interaction);

            if (!queue)
            {
                distube.play(voiceChannel, title, {
                    member: member,
                    interaction
                });
                interaction.reply("▶️ Zaczynam granie utworu!");
            }
            else
            {
                distube.play(voiceChannel, title, {
                    member: member,
                    interaction
                });
                interaction.reply("➕ Dodaję utwór do kolejki odtwarzania!");
            }
        }
    }
}