const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Gets Users Avatar')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('User to get avatar of.')
				.setRequired(false)),
	async execute(interaction) {
		if (interaction.options.getUser('user') == null) {
			await interaction.reply(interaction.user.avatarURL());
		} else {
			await interaction.reply(interaction.options.getUser('user').avatarURL());
		}
	},
};