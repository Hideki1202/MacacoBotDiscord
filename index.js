const fs = require('node:fs');
const path = require('node:path');
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Inicializa a coleção de comandos
client.commands = new Collection();

// Carrega os comandos da pasta /commands
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.warn(`[AVISO] O comando em ${filePath} está sem "data" ou "execute".`);
    }
  }
}

// Quando o bot estiver pronto
client.once(Events.ClientReady, readyClient => {
  console.log(`✅ Ready! Logged in as ${readyClient.user.tag}`);
});

// Quando um comando for chamado
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'Erro ao executar o comando.', ephemeral: true });
  }
});

// Faz login com o token
client.login(token);
