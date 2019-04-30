const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("572802560209977365")
setInterval(function() {
channel.send(`creditfarm creditfarm creditfarm creditfarm creditfarm creditfarm creditfarm creditfarm creditfarm`);
}, 30)
})

client.login(process.env.BOT_TOKEN);