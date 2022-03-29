module.exports = {
    name: "cofnij",
    category: "muzyka",
    description: "Cofa kolejkę odtwarzania do poprzedniego utworu",
    run: (client, message, args, distube) => 
    {
        let queue = distube.getQueue(message);
        if (!queue)
        {
            message.reply("⛔️ Nic nie odtwarzam! Nie można cofnąć utworu!");
        }
        else
        {
            distube.previous(message);
            message.channel.send("⏮ Odtwarzam poprzedni utwór!");
        }  
    }
}