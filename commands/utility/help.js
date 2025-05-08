const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('veja a lista de comandos'),
	async execute(interaction) {
		await interaction.reply('\nLista de Comandos:\n\n/interagir -- seleciona um membro e o macaco faz uma ação com ele\n/conversar -- o macaco te responde de uma forma bem macaca!\n/xingar -- voce pode xingar o macaco e ele te responde furiosamente\n/macacometro -- mede a sua macacagem, pelugem, bananalidade e caoticidade');
	},
};