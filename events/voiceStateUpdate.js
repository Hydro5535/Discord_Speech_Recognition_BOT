const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "voiceStateUpdate",
    execute (oldState, newState) {
        let client = oldState.client;
        let channel = client.channels.cache.get(client.config.notification_channel);

        if (channel)
        {
            let newUserChannel = newState.channel;
            let oldUserChannel = oldState.channel;
            let icon = newState.member.user.avatarURL({format: 'png'}) || 'https://cdn.discordapp.com/embed/avatars/0.png';
        
        
            if (oldUserChannel === null && newUserChannel !== undefined && !oldState.member.user.bot)
            {
                const embedMessage = new MessageEmbed()
                .setColor("#11806a")
                .setTitle(`Nowa aktywność`)
                .setDescription(":arrow_right: "+"__**"+newState.member.displayName+"**__" + " dołączył do kanału " + "**"+newState.channel.name+"**")
                .setTimestamp()
                .setFooter({ text: 'Voice join', iconURL: icon })

                channel.send({ embeds: [embedMessage] });
            } 
            else if (newUserChannel === null && !newState.member.user.bot)
            {
                const embedMessage = new MessageEmbed()
                .setColor("#e74d3c")
                .setTitle(`Nowa aktywność`)
                .setDescription(":arrow_left: "+"__**"+oldState.member.displayName+"**__" + " opuścił kanał " + "**"+oldState.channel.name+"**")
                .setTimestamp()
                .setFooter({ text: 'Voice leave', iconURL: icon })

                channel.send({ embeds: [embedMessage] });
            }
        }
    }
}