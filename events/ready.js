const { readdirSync } = require("fs");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

module.exports = {
    name: "ready",
    once: true,
    execute (client) {
        console.log(`Zalogowano jako ${client.user.tag}!`);
        client.user.setPresence({ activities: [{ name: `${client.config.prefix}info`, type: 0 }] });

        const commands = [];

    const clientId = client.user.id;
    const guildId = client.config.guild_ID;

    readdirSync("./slashcommands/").forEach(dir => {
        const commandsFiles = readdirSync(`./slashcommands/${dir}/`).filter(file => file.endsWith(".js"));
    
        for (let file of commandsFiles) {
            let command = require(`../slashcommands/${dir}/${file}`);
            commands.push(command.data.toJSON());
            client.slashcommands.set(command.data.name, command);
        }

        const rest = new REST({ version: '9' }).setToken(client.config.token);

        (async () => {
            try {
                console.log('Odświeżanie komendy typu /.');
        
                await rest.put(
                    Routes.applicationGuildCommands(clientId, guildId),
                    { body: commands },
                );
        
                console.log('Komendy typu / odświeżone.');
            } catch (error) {
                console.error(error);
            }
        })();
    });
    }
}