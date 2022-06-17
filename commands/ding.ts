const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ding')
		.setDescription('Replies with Dong!'),
	async execute(interaction) {
		await interaction.reply('Dong!');
	},
};