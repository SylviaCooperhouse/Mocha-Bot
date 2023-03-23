const { Client, GatewayIntentBits, Message } = require('discord.js')
require('dotenv/config')

const client = new Client({ 
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ] 
})

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate', message => {
    console.log(`Received message: "${message.content}"`);
    if (message.content === 'woo-hoo') {
      message.reply('woof woof!');
    } else if (message.content === 'good baby') {
      message.channel.send('Arf arf!');
    } else if (message.content === 'I love you') {
      message.channel.send('I love you too, hooman!');
    }
  });
  

client.login(process.env.TOKEN)