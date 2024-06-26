// const { SlashCommandBuilder, ChannelType } = require('discord.js'); 
const { SlashCommandBuilder } = require('discord.js'); 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('Joins a Voice Channel'),
        // .addChannelOption((option) => 
        //     option
        //         .setName('channel')
        //         .setDescription('The channel to join')
        //         .setRequired(true)
        //         .addChannelTypes(ChannelType.GuildVoice)
        // )
        // .toJSON(),
	async execute(interaction) {
		await interaction.reply('This is the join command.');
	},
};