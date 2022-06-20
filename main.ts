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
const eventsPath = path.join(__dirname, 'events');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	clientLoco.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		clientLoco.once(event.name, (...args) => event.execute(...args));
	} else {
		clientLoco.on(event.name, (...args) => event.execute(...args));
	}
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