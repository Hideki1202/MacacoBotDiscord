const { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, range } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('macacometro')
		.setDescription('selecione o membro que deseja medir.')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true)),
        async execute(interaction) {
            const macacagem =  Math.floor(Math.random() * 100);
            let macacagemMsg
            const pelugem = Math.floor(Math.random() * 100);
            let pelugemMsg
            const bananalidade = Math.floor(Math.random() * 100);
            let bananalidadeMsg
            const gritancia = Math.floor(Math.random() * 100);
            let gritanciaMsg
            const caoticidade = Math.floor(Math.random() * 100);
            let caoticidadeMsg

            const target = interaction.options.getUser('target');
            if (macacagem < 15){
                macacagemMsg = "Pouco macaco voce ser!!! AUAU"
            } else if (macacagem > 15 && macacagem < 35){
                macacagemMsg = "venhaamacacagem!! IIAIIAUAUUUU"
            } else if (macacagem > 35 && macacagem < 55){
                macacagemMsg = "muitos macacos como oce por ai!!! IIAIIAUAUUUU"
            } else if (macacagem > 55 && macacagem < 85){
                macacagemMsg = "que macacooo hein!!! IIAIIAUAUUUU"
            } else if (macacagem > 85){
                macacagemMsg = "MACACO DEMAIS!!!!! AAAAAAAAAAAAAAAAAAAA"
            }

            if (pelugem < 15){
                pelugemMsg = "voce ser macaco pelado"
            } else if (pelugem > 15 && pelugem < 35){
                pelugemMsg = "macaco calvo AUAHAHAA"
            } else if ( pelugem > 35 && pelugem < 55){
                pelugemMsg = "pelugem bonita hein macaco"
            } else if (pelugem > 55 && pelugem < 85){
                pelugemMsg = "esse macaco tem pelo heinn"
            } else if (pelugem> 85){
                pelugemMsg = "MACACOOO PELUDO!!!!!"
            }

            if (bananalidade < 15){
                bananalidadeMsg = "pq vc nao gosta de banana ue"
            } else if ( bananalidade > 15 && bananalidade < 35){
                bananalidadeMsg = "mas banana e tao bom aa"
            } else if ( bananalidade > 35 && bananalidade < 55){
                bananalidadeMsg = "esse sabe o que e bom de verdade A A AAUUAA"
            } else if ( bananalidade > 55 && bananalidade < 85){
                bananalidadeMsg = "fanatico por bananaaa ASASA"
            } else if (bananalidade> 85){
                bananalidadeMsg = "BANANANAAAAA AAAAAAAAAA AAAAA"
            }
            if (gritancia < 15){
                gritanciaMsg = "nem sabe gritar ne"
            } else if ( gritancia > 15 && gritancia < 35){
                gritanciaMsg = "aprende a gritar direito va"
            } else if ( gritancia > 35 && gritancia < 55){
                gritanciaMsg = "tem um grito bom "
            } else if ( gritancia > 55 && gritancia < 85){
                bananalidadeMsg = "tem que respeitar esse grito"
            } else if ( gritancia > 85){
                gritanciaMsg = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            }
            if (caoticidade < 15){
                caoticidadeMsg = "macaco quieto"
            } else if ( caoticidade > 15 && caoticidade < 35){
                caoticidadeMsg = "pelo menos voce se diverte "
            } else if ( caoticidade > 35 && caoticidade < 55){
                caoticidadeMsg = "so faz macacadaa "
            } else if ( caoticidade > 55 && caoticidade < 85){
                caoticidadeMsg = "macacoo bagunceirooo IAUAIAAA"
            } else if ( caoticidade > 85){
                caoticidadeMsg = "O MAIS CAOTICO DA MACACADAAA"
            }


            

            const resultadoFinal = `
            🌴 **MACACÔMETRO DE ${target}** 🌴

            🧠 **Macacagem**: ${macacagem}% — ${macacagemMsg}
            🐒 **Pelugem**: ${pelugem}% — ${pelugemMsg}
            🍌 **Bananalidade**: ${bananalidade}% — ${bananalidadeMsg}
            📣 **Gritância**: ${gritancia}% — ${gritanciaMsg}
            🔥 **Caoticidade**: ${caoticidade}% — ${caoticidadeMsg}
            `;

            await interaction.reply(resultadoFinal);
                
        },
};