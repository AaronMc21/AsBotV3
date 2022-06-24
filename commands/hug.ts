const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Hugs mentioned user.')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('User to hug.')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.reply(`${interaction.options.getUser('user').toString()}, you have been hugged by ${interaction.user.username}! :people_hugging: `);
	},
};