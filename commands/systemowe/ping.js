module.exports = {
    name: "ping",
    category: "systemowe",
    description: "Opóźnienie i API",
    run: (client, message, args, distube) => 
    {
        message.channel.send("🏓 Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp;
        
        m.edit(`🏓 Pong!
        Czas oczekiwania: ${ping} ms
        API: ${Math.round(client.ws.ping)} ms`);
        });
    }
}