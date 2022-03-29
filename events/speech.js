module.exports = {
    name: "speech",
    async execute (msg, distubee) {
        let client = msg.client;
        let distube = distubee;
        if (!msg.content) return;

        if (!msg.member) msg.member = await msg.guild.fetchMember(msg);

        const vargs = msg.content
        .trim()
        .split(/ +/g);

        const vcmd = vargs.shift().toLowerCase();

        const value = vargs.join(" ").toLowerCase().replace(vcmd, "");
        const channel = msg.member?.voice.channel;

        let vcommand = client.voicecommands.get(vcmd);

        if (vcommand) vcommand.run(client, msg, value, channel, distube);
    }
}