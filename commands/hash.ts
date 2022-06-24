const { SlashCommandBuilder } = require('@discordjs/builders');
const crypt = require('crypto');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hash')
		.setDescription('Hashes provided string in MD5, SHA256, or SHA512')
		.addSubcommand(subcommand =>
			subcommand.setName('md5')
				.setDescription('Hashes provided string in MD5')
				.addStringOption(option =>
					option.setName('input')
						.setDescription('Input to be hashed.')
						.setRequired(true)))
		.addSubcommand(subcommand =>
			subcommand.setName('sha256')
				.setDescription('Hashes provided string in SHA256')
				.addStringOption(option =>
					option.setName('input')
						.setDescription('Input to be hashed.')
						.setRequired(true)))
		.addSubcommand(subcommand =>
			subcommand.setName('sha512')
				.setDescription('Hashes provided string in SHA512')
				.addStringOption(option =>
					option.setName('input')
						.setDescription('Input to be hashed.')
						.setRequired(true))),
	
	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'md5') {
			await interaction.reply(`Input: '${interaction.options.getString('input')}' -> MD5: ${crypt.createHash('md5').update(interaction.options.getString('input')).digest("hex")}`);
		} else if (interaction.options.getSubcommand() === 'sha256') {
			await interaction.reply(`Input: '${interaction.options.getString('input')}' -> SHA256: ${crypt.createHash('sha256').update(interaction.options.getString('input')).digest("hex")}`);
		} else if (interaction.options.getSubcommand() === 'sha512') {
			await interaction.reply(`Input: '${interaction.options.getString('input')}' -> SHA512: ${crypt.createHash('sha512').update(interaction.options.getString('input')).digest("hex")}`);
		}
	},
};