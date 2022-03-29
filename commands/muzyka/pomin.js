module.exports = {
    name: "pomin",
    category: "muzyka",
    description: "Pomija obecnie grany utwór",
    run: (client, message, args, distube) =>
    {
        let queue = distube.getQueue(message);
        if (!queue)
        {
            message.reply("⛔️ Nic nie odtwarzam! Nie można pominąć utworu!");
        }
        else
        {
            distube.skip(message);
            message.channel.send("⏭ Utwór pominięty!");
        }
    }
}