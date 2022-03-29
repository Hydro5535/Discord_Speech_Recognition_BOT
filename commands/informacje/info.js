const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "info",
    category: "informacje",
    description: "Wyświetla dostępne komendy",
    run: (client, message, args, distube) => 
    {
        let prefix = client.config.prefix;
        const embedMessageGeneral = new MessageEmbed()
                .setColor("#3fdcf1")
                .setTitle(`Ogólne komendy`)
                .setDescription(`**${prefix}info** - wyświetla tą listę\n\n**${prefix}mapa** - wyświetla jaka jest obecna mapa w normalnych rozgrywakch w grze Apex Legends\n\n**${prefix}ping** - wyświetla opuźnienie bota i jego api\n\n**${prefix}dolacz** - bot dołącza na kanał głosowy, na którym się znajdujesz i rozpoczyna słuchanie komend głosowych\n\n**${prefix}wyjdz** - bot opuszcz kanał, na którym obecnie się znajduje\n\n**${prefix}vr** - wyświetla listę dostępnych komend głosowych`)
                .setTimestamp();
        const embedMessageMusic = new MessageEmbed()
                .setColor("#9f13cd")
                .setTitle(`Komendy muzyczne`)
                .setDescription(`**${prefix}zagraj (tytuł/link)** - rozpoczyna odtwarzanie wybranego utworu\n\n**${prefix}stop** - zatrzymuje obecnie grany utwór\n\n**${prefix}wznow** - wznawia odtwarzanie utworu\n\n**${prefix}pomin** - pomija obecny utwór\n\n**${prefix}cofnij** - cofa do poprzedniego utworu\n\n**${prefix}skocz (liczba[1 następny utwór itd. -1 poprzedni utwór itd.])** - przeskakuje w kolejce odtwarzania do utworu o wybranym numerze\n\n**${prefix}kolejka** - wypisuje obecną kolejkę odtwarzania\n\n**${prefix}zapetl (liczba[0 - wyłącz zapętlenie, 1 - zapętl obecnie grany utwór, 2 - zapętl całą kolejkę odtwarzania])** - zapętla w wskazany sposób\n\n**${prefix}glosnosc (liczba)** - ustawia poziom głośności na podaną wartość\n\n**${prefix}zakoncz** - kończy odtwarzanie utowru oraz czyści kolejkę odtwarzania`)
                .setTimestamp();

            message.channel.send({ embeds: [embedMessageGeneral, embedMessageMusic] });
    }
}