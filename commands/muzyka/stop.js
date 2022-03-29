module.exports = {
    name: "stop",
    category: "muzyka",
    description: "Zatrzymuje odtwarzanie obecnego utworu",
    run: (client, message, args, distube) =>
    {
        let queue = distube.getQueue(message);
        if (!queue)
        {
            message.reply("⛔️ Nic nie odtwarzam! Nie można zatrzymać utworu!");
        }
        else
        {
            distube.pause(message);
            message.channel.send("⏸ Zatrzymuję odtwarzanie utworu!");
        }
    }
}