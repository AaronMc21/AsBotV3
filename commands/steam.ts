const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('steam')
		.setDescription('WIP - Gets Steam user info')
		.addSubcommand(subcommand =>
			subcommand.setName('steamid')
				.setDescription('Gets Steam user info from SteamID')
				.addStringOption(option =>
					option.setName('input')
						.setDescription('SteamID to get info from.')
						.setRequired(true)))
		.addSubcommand(subcommand =>
			subcommand.setName('steamid3')
				.setDescription('Gets Steam user info from SteamID3')
				.addStringOption(option =>
					option.setName('input')
						.setDescription('SteamID3 to get info from.')
						.setRequired(true)))
		.addSubcommand(subcommand =>
			subcommand.setName('steamid64')
				.setDescription('Gets Steam user info from SteamID64')
				.addStringOption(option =>
					option.setName('input')
						.setDescription('SteamID64 to get info from.')
						.setRequired(true)))
		.addSubcommand(subcommand =>
			subcommand.setName('customurl')
				.setDescription('Gets Steam user info from CustomURL')
				.addStringOption(option =>
					option.setName('input')
						.setDescription('CustomURL to get info from.')
						.setRequired(true))),
	
	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'steamid') {
			await interaction.reply(`SteamID: ${interaction.options.getString('input')}`);
		} else if (interaction.options.getSubcommand() === 'steamid3') {
			await interaction.reply(`SteamID3: ${interaction.options.getString('input')}`);
		} else if (interaction.options.getSubcommand() === 'steamid64') {
			await interaction.reply(`SteamID64: ${interaction.options.getString('input')}`);
		} else if (interaction.options.getSubcommand() === 'customurl') {
			await interaction.reply(`CustomURL: ${interaction.options.getString('input')}`);
		}
	},
};