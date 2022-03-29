module.exports = {
    name: "wznow",
    category: "muzyka",
    description: "Wznawia odtwarzanie utworu",
    run: (client, message, args, distube) =>
    {
        let queue = distube.getQueue(message);
        if (!queue)
        {
            message.reply("⛔️ Nic nie odtwarzam! Nie można wznowić odtwarzania utworu!");
        }
        else
        {
            distube.resume(message);
            message.channel.send("⏯ Wznawiam odtwarzanie!");
        }
    }
}