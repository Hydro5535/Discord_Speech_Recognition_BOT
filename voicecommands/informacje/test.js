module.exports = {
    name: "test",
    category: "rozpoznawanie_mowy",
    description: "Rozpoczyna odgrywanie wybranego utworu (tytuł)",
    run: (client, msg, value, channel, distube) => 
    {
        console.log("Komenda aktywna");
        console.log(value.length);
    }
}