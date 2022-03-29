const { readdirSync } = require("fs");

const ascii = require("ascii-table");

let table = new ascii("KomendyGlosowe");
table.setHeading("Komenda", "Status");

module.exports = (client) => {
    readdirSync("./voicecommands/").forEach(dir => {
        const commands = readdirSync(`./voicecommands/${dir}/`).filter(file => file.endsWith(".js"));
    
        for (let file of commands) {
            let pull = require(`../voicecommands/${dir}/${file}`);
    
            if (pull.name) {
                client.voicecommands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌  -> barkujące dane.`);
                continue;
            }
        }
    });
    
    console.log(table.toString());
}