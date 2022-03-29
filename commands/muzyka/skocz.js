module.exports = {
    name: "skocz",
    category: "muzyka",
    description: "Przeskakuje do wybranego utworu (Numeracja: 1 następny utwór itd. , -1 poprzedni utwór itd.)",
    run: (client, message, args, distube) => 
    {
        let queue = distube.getQueue(message);
        if (!queue)
        {
            message.reply("⛔️ Nic nie odtwarzam! Nie można przeskoczyć do podanego utworu!");
        }
        else
        {
            let value = parseInt(args[0]);
            distube.jump(message, value)
            .catch(err => message.reply("❌ Error, nie udało się znaleźć w kolejce utworu z takim numerem!"));
        
            if (value > 0)
            {
                message.channel.send("⏭ Przechodzę do wybranego utworu");
            }
            else
            {
                message.channel.send("⏮ Przechodzę do wybranego utworu");
            }
        }
    }
}