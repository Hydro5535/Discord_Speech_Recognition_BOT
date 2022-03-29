const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("vr")
        .setDescription("Wyświetla dostępne komendy głosowe"),
    async execute(client, interaction, distube) {
        const embedMessageVoice = new MessageEmbed()
                .setColor("#3fdcf1")
                .setTitle(`Komendy głosowe`)
                .setDescription(`**zagraj (tytuł)** - rozpoczyna odtwarzanie wybranego utworu\n\n**stop** - zatrzymuje obecnie grany utwór\n\n**wznow** - wznawia odtwarzanie utworu\n\n**pomin** - pomija obecny utwór\n\n**cofnij** - cofa do poprzedniego utworu\n\n**skocz (liczba[1 następny utwór itd. Obecnie wartości ujemne nie są obsługiwane])** - przeskakuje w kolejce odtwarzania do utworu o wybranym numerze\n\n**zapetl (liczba[0 - wyłącz zapętlenie, 1 - zapętl obecnie grany utwór, 2 - zapętl całą kolejkę odtwarzania] jeżeli nie rozpoznaliczby domyślnie 0)** - zapętla w wskazany sposób\n\n**glosnosc (liczba[w razie nie wychwycenia liczby zmienia na 50%])** - ustawia poziom głośności na podaną wartość\n\n**zakoncz** - kończy odtwarzanie utowru oraz czyści kolejkę odtwarzania\n\n**mapa** - bot powie jaka jest obecna mapa w normalnych rozgrywakch w grze Apex Legends (**__Uruchomienie tej komendy w trakcie odtwarzania muzyki może uszkodzić bota co wymagać będzie jego resetu__**)`)
                .setTimestamp();

        interaction.reply({ embeds: [embedMessageVoice] });
    }
}