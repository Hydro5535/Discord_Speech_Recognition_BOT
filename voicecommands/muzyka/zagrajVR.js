module.exports = {
    name: "zagraj",
    category: "rozpoznawanie_mowy",
    description: "Rozpoczyna odgrywanie wybranego utworu (tytuł)",
    run: (client, msg, value, channel, distube) => 
    {
            console.log("Zagraj!");
            distube.play(channel, value, {
                member: msg.member,
                msg
            });
    }
}