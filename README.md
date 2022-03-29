## Spis treści
* [Informacje ogólne](#informacje-ogólne)
* [Wykorzystane technologie](#wykorzystane-technologie)
* [Instalacja](#instalacja)
* [Podsumowanie](#podsumowanie)

## Informacje ogólne
Jest to bot dla prywatnych serwerów discord wykorzystujący komendy typu "/", komendy głosowe (w języku polskim) oraz klasyczne komendy z wykożystaniem prefixu. W obencej wersji bot obsługuje odgrywanie muzyki (wpsarcie dla linków z YouTube, SoundCloud oraz Spotify [WYMAGA KLUCZA API!]), możliwość sprawdzenia obecnej mapy w normalnych rozgrywkach w grze Apex Legends (WYMAGA KLUCZA API!), opcja rozmowy z botem przy wykorzystaniu clever-bot'a (WYMAGA USTAWIENIA KANAŁU), oraz powiadomienia o nowej aktywności na kanale głosowym (WYMAGA USTAWIENIA KANAŁU).
	
## Wykorzystane technologie
W tworzeniu projektu zostały wykorzystane poniższe technologie:
* Node.js 16.13.0
* discord.js 13.6.0
* distube 3.3.2
* discord-speech-recognition 2.2.0
* discord-tts 1.2.1
* cleverbot-free 1.1.9
	
## Instalacja
W chwili obecnej najprostszym sposobem nie wymagającym dużego nakładu pracy, aby móc samodzielnie wypróbować bota jest wejście w poniższy link i postępowanie zgodnie z instrukcją poniżej: https://glitch.com/~discord-speech-recognition-bot

1. Po wejściu w link u dołu strony znajduje się guzik "Remix your own". Naciakmy go i czekamy aż glicz wygeneruje dla nas kopię projektu.
<img alt="Screen z glitch.com" src = "https://i.imgur.com/YCWGWuo.png"/>

2. Po wygenerowaniu się projektu po lewej stronie na pasku bocznym znajduje sie lista plików. Odszukujemy tam pliku .env .

3. Po włączeniu wyżej wymienionego pliku pokaże nam się lista wymaganych danych, aby bot mógł działać.
Pierwszą z niezbędnych rzeczy jest token, który uzyskać możemy na tej stronie: https://discord.com/developers/applications W internecie jest dużo poradników jak stworzyć bota dlatego fragment z uzyskaniem tokenu pominę.

Kolejnym wymaganym tokenem jest ten odpowiedzialny za informacje z gry Apex Legends i pozyskać możemy go na tej stronie: https://apexlegendsapi.com/documentation.php.
Zjeżdżamy niżej aż do momentu, który widać na poniższym screenie i zaznaczone pole wypełniamy w przykładowo taki sposób a następnie klikamy "Prześlij"
<img alt="Screen z api apex legends" src="https://i.imgur.com/jhfnpMw.png"/>
Strona wygeneruje nam klucz kopiujemy go i wklejamy w pole odpowiednie pole. (Warto zachować sobie klucz w innym bezpiecznym miejscu ponieważ glitch projekty edytowane bez konta w taki sposób kasuje, więc klucz przepadnie).

Ostatnim wymaganym kluczem jest klucz dla API Spotify a pozyskać możemy go na tej stronie (Wymaga posiadanie konta!): https://developer.spotify.com/dashboard/login
Po zalogowaniu w prawym rogu widnieje guzik "Create An App" klikamy go, uzupełniamy pole nazwy oraz opisu (nie są one istotne), akceptujemy regulamin i klikamy guzik "Create". Na kolejnej stronie pojawią się niezbędne dane to jest Client ID, które kopiujemy i wklejamy w odpowiednie okno i Client Secret, który pojawi się po kliknięciu napisu "SHOW CLIENT SECRET" kopiujemy go i również wklejamy w odpowiednie pole.

4. Kolejnym i już ostatnim plikiem, który wymaga naszej ingerencji jest config.json .
Ten krok wymagać będzie aktywowania trybu dewelopera na discordzie dlatego zaczniemy od tego. Wchodzimy kolejno w Ustawienia użytkownika > Zaawansowane i kilkamy w sówak "Tryb dewelopera", aby go aktywować. Po wykonaniu tego kroku możemy przejść do uzupełniania naszego pliku.

Pierwszą niezbędną informacją jest id naszego serwera. Klikamy prawym przyciskiem myszki na ikonę serwera a następnie guzik "Kopiuj ID" i wklejamy to między cudzysłowia (Ważne jest aby uważać, usunięcie cudzysłowia może uszkodzić działanie bota!).
Kolejnym krokiem jest wybranie prefixu dla naszego bota podstawowo jest to $ jednak możemy zmienić go na jakikolwiek inny poza "/" oraz należy pamiętać, aby żaden inny bot na naszym serwerze takiego nie posiadał!
## Podsumowanie
Jest to podstawowa wersja bota i w przyszłości planuję dodać kolejne opcje, jednak jest on skierowany do serwerów prywatnych ze względu na komendy głosowe, które mogłyby być problematyczne na serwerach publicznych.

W razie problemów z botem można kontaktować się ze mną poprzez discorda Hydro#7549 .
