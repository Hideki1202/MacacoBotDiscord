const { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('interagir')
		.setDescription('selecione o membro que deseja interagir.')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true))
        .addStringOption(option =>
            option.setName('ação')
              .setDescription('Escolha uma ação')
              .setRequired(true)
              .addChoices(
                { name: 'bater', value: 'bater' },
                { name: 'acariciar', value: 'acariciar' },
                { name: 'dancar', value: 'dancar' },

   
              )
              .setRequired(true)
            ),
        async execute(interaction) {
            const target = interaction.options.getUser('target');
            const action = interaction.options.getString('ação') 
            let gif
            let resposta 
            switch(action){
                case "bater":
                    gif = "https://media.tenor.com/fJmdC4-niqsAAAAM/trust-friend.gif"
                    resposta= `Macaco peludo bateu em <@${target.id}>`

                    break
                case "dancar":
                    gif = "https://i.gifer.com/15Kt.gif"
                resposta =`Macaco peludo dançou com <@${target.id}>`


                    break
                case "acariciar":
                    gif = "https://usagif.com/wp-content/uploads/gif/monkey-hug-1.gif"
                    resposta = `Macaco peludo fez um cafuné <@${target.id}>`

                    break
            }
            await interaction.reply({
                content: resposta,
                embeds: [
                    {
                        image: { url: gif },
                    },
                ],
            });
                
        },
};