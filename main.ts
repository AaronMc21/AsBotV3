require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Intents } = require ('discord.js');

const clientLoco = new Client({ intents: [Intents.FLAGS.GUILDS] });
clientLoco.commands = new Collection();

clientLoco.once('ready', () => {
    console.log(`${clientLoco.user.tag} ready for action!`);
});

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	clientLoco.commands.set(command.data.name, command);
}

clientLoco.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = clientLoco.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

clientLoco.login(process.env.DISCORD_TOKEN);