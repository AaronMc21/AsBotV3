require('dotenv').config();
const { Client, Intents } = require ('discord.js');

const clientLoco = new Client({ intents: [Intents.FLAGS.GUILDS] });

clientLoco.once('ready', () => {
    console.log(`${clientLoco.user.tag} ready for action!`);
    
});

clientLoco.login(process.env.DISCORD_TOKEN);