const { SlashCommandBuilder } = require('@discordjs/builders');
const crypt = require('crypto');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('md5')
		.setDescription('Hashes provided string in MD5')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('Input to be hashed.')
				.setRequired(true)),

	async execute(interaction) {
		await interaction.reply(crypt.createHash('md5').update(interaction.options.getString('input')).digest("hex"));
	},
};