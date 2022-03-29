module.exports = {
    name: "zapetl",
    category: "muzyka",
    description: "Zapętla w podany sposób: 0 - wyłącz zapętlenie, 1 - zapętla obecny utwór, 2 - zapętla całą obecną playlistę",
    run: (client, message, args, distube) =>
    {
        let queue = distube.getQueue(message);
        if (!queue)
        {
            message.reply("⛔️ Nic nie odtwarzam! Nie można zapętlić!");
        }
        else
        {
            let value = parseInt(args[0]);
            let mode = distube.setRepeatMode(message, value);
            mode = mode ? mode == 2 ? "🔁 Powtarzaj całą playlistę" : "🔂 Powtarzaj obecny utwór" : "Wyłącz powtarzanie";
            message.channel.send("Ustawiono tryb powtarzania na `" + mode + "`");
        }      
    }
}