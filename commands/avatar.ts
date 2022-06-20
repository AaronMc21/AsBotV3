const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Gets Users Avatar'),
	async execute(interaction) {
		await interaction.reply(interaction.user.avatarURL());
	},
};