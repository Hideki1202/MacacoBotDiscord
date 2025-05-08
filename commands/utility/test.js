const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Comando para testar o bot'),
	async execute(interaction) {
		await interaction.reply('MACACO PELUDOOO ESTÁ FUNCIONANDOOO');
	},
};