module.exports = {
    name: "kolejka",
    category: "muzyka",
    description: "Wypisuje obecną listę utworów",
    run: (client, message, args, distube) =>
    {
        const queue = distube.getQueue(message);
        if (!queue)
        {
            message.reply("⛔️ Nic nie odtwarzam! Nie znaleziono listy utworów!");
        }
        else
        {
            message.channel.send('Obecna kolejka odtwarzania:\n' + queue.songs.map((song, id) =>
            `**${id+1}**. [${song.name}] - \`${song.formattedDuration}\``
            ).join("\n"));
        }       
    }
}