module.exports = {
    name: "glosnosc",
    category: "muzyka",
    description: "Zmina głośności odtwarzanych utworów",
    run: (client, message, args, distube) => 
    {
        let queue = distube.getQueue(message);
        if (!queue)
        {
            message.reply("⛔️ Nic nie odtwarzam! Nie można zmienić głośności!");
        }
        else
        {
            let value = parseInt(args[0]);
            distube.setVolume(message, value);
            message.channel.send(`🔊 Ustawiam głośność odtwarzania na **${args[0]}%**`);
        }        
    }
}