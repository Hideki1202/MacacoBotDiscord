const { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder } = require('discord.js');
const { OpenAI } = require('openai');
const { geminiKey } = require('../../config.json');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(geminiKey);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('xingar')
		.setDescription('use esse comando para xingar o macaco peludo')
		.addStringOption(option =>
			option
				.setName('xingamento')
				.setDescription('escreva o xingamento que deseja usar'))
		.setContexts(InteractionContextType.Guild),
        async execute(interaction) {

			const pergunta = "responda como se vc fosse um macaco muito bravo e responda o seguinte xingamento: " + interaction.options.getString('xingamento');

			await interaction.deferReply(); // dá mais tempo
		
			try {
				const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
				const result = await model.generateContent(pergunta);
				const response = await result.response;
				const text = await response.text();
		  
				await interaction.editReply(text.slice(0, 2000)); // Discord limita 2000 caracteres
			  } catch (error) {
				console.error(error);
				await interaction.editReply('❌ Erro ao consultar o Gemini.');
			  }
		
            
        },
};