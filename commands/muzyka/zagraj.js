module.exports = {
    name: "zagraj",
    category: "muzyka",
    description: "Rozpoczyna odgrywanie wybranego utworu (tytuł lub link)",
    run: (client, message, args, distube) => 
    {
        let channel = message.member?.voice.channel;
        if (!channel)
        {
            message.reply("⛔️ Nie mogę rozpocząć odtwarzania! Najpierw dołącz na kanał głosowy!");
        }
        else
        {
            let queue = distube.getQueue(message);

            if (!queue)
            {
                let name = args.join(' ');
                distube.play(channel, name, {
                member: message.member,
                textChannel: message.channel,
                message
                });
                message.channel.send("▶️ Zaczynam granie utworu!");
            }
            else
            {
                let name = args.join(' ');
                distube.play(channel, name, {
                member: message.member,
                textChannel: message.channel,
                message
                });
                message.channel.send("➕ Dodaję utwór do kolejki odtwarzania!");
            }
        }
    }
}