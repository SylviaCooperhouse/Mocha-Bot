const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { exec } = require('child_process');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Add a variable to track whether the bot should respond
let shouldRespond = false;

client.on('ready', () => {
  console.log('The bot is ready');
});

client.on('messageCreate', (message) => {
  console.log(`Received message: "${message.content}"`);

  // Check if the message was sent by the bot itself
  if (message.author.bot) {
    // Ignore messages from the bot
    return;
  }

  const lowercaseMessage = message.content.toLowerCase();

  // Check if the message includes the start keyword
  if (lowercaseMessage.includes('come on mocha')) {
    shouldRespond = true;
    message.reply('Mocha is here! 🐶');
    return; // Exit early to avoid additional processing
  }

  // Check if the message includes the stop keyword
  if (lowercaseMessage.includes('go rest mocha')) {
    shouldRespond = false;
    message.reply('Ok! Love u!🐾');
    return; // Exit early to avoid additional processing
  }

  // Continue processing the message if shouldRespond is true
  if (shouldRespond) {
    // Add logic to respond based on the analysis
    if (message.content.includes('fetch')) {
      message.reply('Sure, I can fetch! 🐾');
    } else if (message.content.includes('play')) {
      message.reply('I love to play! 🎾');
    } else if (message.content.includes('love you')) {
      message.reply('I love you too! ❤️');
    } else if (message.content.includes('you\'re so cute')) {
      message.reply('I am the cutest! 🐾');
    } else if (message.content.includes('what\'s your name')) {
      message.reply('I\'m Mocha, your loyal puppy companion! 🐶');
    } else if (message.content.includes('food')) {
      message.reply('Did someone say food? I\'m always hungry! 🍖');
    } else if (message.content.includes('good dog')) {
      message.reply('Arf arf! Thank you, hooman! 🐕');
    } else if (message.content.includes('how are you')) {
      message.reply('I\'m pawsitively great! How about you, hooman?');
    } else if (message.content.includes('tell me a joke')) {
      // You can add a function to fetch and send a random joke
      sendRandomJoke(message.channel);
    } else if (message.content.includes('sing a song')) {
      // You can add a function to make the bot sing a song
      singASong(message.channel);
    } else {
      // If no specific condition is met, respond with a default message
      message.reply('Woof woof! 🐶');
    }
  }
  });

// Function to send a random joke
function sendRandomJoke(channel) {
  // You can fetch a joke from an API or have a predefined list of jokes to send
  // Send the joke to the specified channel
  channel.send('Why did the dog sit in the shade? Because he didn\'t want to be a hot dog! 🌭');
}

// Function to make the bot sing a song
function singASong(channel) {
  // You can add logic to make the bot sing a song or send lyrics
  channel.send('🎵 I\'m a little puppy, happy and spry, running around under the sky. 🎶');
}

client.login(token);