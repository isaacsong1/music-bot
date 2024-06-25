const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
    cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('Joins a Voice Channel')
        .addChannelOption((option) => 
            option
                .setName('channel')
                .setDescription('The channel to join')
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildVoice)
        )
        .toJSON(),
	// async execute(interaction) {
	// 	await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
	// },
};