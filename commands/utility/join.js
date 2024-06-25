const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('Joins a Voice Channel'),
	async execute(interaction) {
		// await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
	},
};