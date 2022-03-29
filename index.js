const { Client, Intents, Collection, Interaction } = require("discord.js");
const { YtDlpPlugin } = require("@distube/yt-dlp");
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { DisTube } = require("distube");
const { addSpeechEvent } = require("discord-speech-recognition");
const fs = require("fs");
const config = require("./config.json");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});
client.config = config;
client.commands = new Collection();
client.voicecommands = new Collection();
client.slashcommands = new Collection();

const distube = new DisTube(client, {
    youtubeDL: false,
    searchSongs: 1,
    leaveOnEmpty: false,
    leaveOnFinish: false,
    leaveOnStop: false,
    plugins: [new YtDlpPlugin(), new SpotifyPlugin(), new SoundCloudPlugin()],
});

new SpotifyPlugin({
    parallel: true,
    emitEventsAfterFetching: false,
    api: {
      clientId: client.config.spotify_clientd_ID,
      clientSecret: client.config.spotify_client_secret,
    },
  });

const status = queue =>
    `Volume: \`${queue.volume}%\` | Filter: \`${
        queue.filters.join(', ') || 'Off'
    }\` | Loop: \`${
        queue.repeatMode
            ? queue.repeatMode === 2
                ? 'All Queue'
                : 'This Song'
            : 'Off'
    }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``

    distube
    .on('playSong', (queue, song) => { client.user.setPresence({ activities: [{ name: `${song.name}`, type: 2 }] }) })
    .on('error', (textChannel, e) => { console.error(e) })
    .on('finish', queue => { client.user.setPresence({ activities: [{ name: 'Poleceń głosowych', type: 0 }] }) })
    .on('deleteQueue', queue => { client.user.setPresence({ activities: [{ name: 'Poleceń głosowych', type: 0 }] }) })
    .on('empty', queue => { client.user.setPresence({ activities: [{ name: 'Poleceń głosowych', type: 0 }] }) })
    .on('disconnect', queue => { client.user.setPresence({ activities: [{ name: `${client.config.prefix}info`, type: 0 }] }) });

//Read events
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args, distube));
	}
}

//Read handlers
const handlerFiles = fs.readdirSync('./handlers').filter(file => file.endsWith('.js'));
for (const file of handlerFiles) {
	const handler = require(`./handlers/${file}`)(client);
}

addSpeechEvent(client, { lang: "pl-PL" });

client.login(client.config.token);