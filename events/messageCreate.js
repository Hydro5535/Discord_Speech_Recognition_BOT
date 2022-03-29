const cleverbot = require("cleverbot-free");

module.exports = {
    name: "messageCreate",
    async execute (message, distubee) {
        let client = message.client;

        let distube = distubee;

        if (message.author.bot) return;

        if (!message.guild) return;

        let cbchannel = client.channels.cache.find(channel => channel.id == client.config.cleverbotchannel_ID);

        if (cbchannel && message.channel.id == cbchannel.id)
        {
            let con;

            if (!message.content.startsWith(client.config.prefix))
            {
                con = true;
            }
            else
            {
                con = false;
            }

            if (con == true)
            {
                cleverbot(message.content).then(response => { cbchannel.send(response); });
            }
        }

        if (!message.content.startsWith(client.config.prefix)) return;

        if (!message.member) message.member = await message.guild.fetchMember(message);

        const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);

        const cmd = args.shift().toLowerCase();

        if (cmd.length === 0) return;

        let command = client.commands.get(cmd);

        if (!command) 
        {
            message.reply("Nie mam takiej komendy.");
        }

        if (command) command.run(message.client, message, args, distube);
    }
}