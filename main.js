const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '!';

client.once('ready', () => {
    console.log('friendBot is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        message.channel.send('pong!');
    }

    if(command === 'introduce') {
        message.channel.send('Good to see you, Cookiebhatla.');
    }
});

client.login('OTc0ODM5MzI5NzY5ODE2MTE0.GAX49v.wNd2mNhP_U3e8TNymc62U8LKy6FmnXiKgPX_tg');