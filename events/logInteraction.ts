module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (interaction.inGuild()) {
			console.log(`${interaction.user.tag} (${interaction.user.id}) in #${interaction.channel.name} (${interaction.channel.id}) on ${interaction.guild.name} (${interaction.guildId}) triggered an interaction. @ ${interaction.createdTimestamp}`);
		} else {
			console.log(`${interaction.user.tag} (${interaction.user.id}) in Private Messages triggered an interaction. @ ${interaction.createdTimestamp}`);
		}		
	},
};