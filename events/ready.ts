module.exports = {
	name: 'ready',
	once: true,
	execute(clientLoco) {
		console.log(`${clientLoco.user.tag} ready for action!`);
	},
};