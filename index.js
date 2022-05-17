const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'ult9.falix.gg',
    port: 39938,
    version: "1.17.1",
    username: 'JamiesKleinerBruder',
    //auth: "mojang"
});

bot.on('chat', (username, message) => {
    if (username === bot.username) return
    bot.chat(message)
});

bot.once("spawn", ()=>{
    bot.chat("/server")
})

bot.on('kicked', console.log)
bot.on('error', console.log)


bot.setControlState("jump", true);

bot.on("move", ()=>{
    let friend = bot.nearestEntity();

    if (friend) {
        bot.lookAt(friend.position.offset(0, friend.height, 0));
    }
    
});

bot.setControlState("forward", true);
