//----------------------System----------------------//


const Discord = require('discord.js');

require('dotenv').config()

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION", "ARGS"]});

const prefix = process.env.PREFIX;

const fs = require('fs');

client.commands = new Discord.Collection();

const ytdl = require("ytdl-core")

const memberCounter = require('./counters/member-counter');

//----------------------File Directory----------------------//


const commandFiles = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}


//----------------------Boot----------------------//


client.on('ready', () =>{
    console.log('Bot is online! It wants to help out!');
    memberCounter(client);
});



//----------------------Commands----------------------//


client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'clear') {
        client.commands.get('clear').execute(message,args);
    }else if (command === 'play') {
        client.commands.get('play').execute(message,args);
    }else if (command === 'leave') {
        client.commands.get('leave').execute(message,args);
    }else if (command === 'hello') {
        client.commands.get('hello').execute(message,args);
    }else if (command === 'yt-rei') {
        client.commands.get('yt-rei').execute(message,args);
    }else if (command === 'bot-info') {
        client.commands.get('bot-info').execute(message,args);
    }else if (command === 'yt-joqnix') {
        client.commands.get('yt-joqnix').execute(message,args);
    }else if (command === 'help') {
        client.commands.get('help').execute(message,args);
    }else if (command === 'yt-mblank') {
        client.commands.get('yt-mblank').execute(message,args);
    }else if (command === 'yt-meowcat') {
        client.commands.get('yt-meowcat').execute(message,args);
    }else if (command === 'yt-yu') {
        client.commands.get('yt-yu').execute(message,args);
    }else if (command === 'yt-staid') {
        client.commands.get('yt-staid').execute(message,args);
    }else if (command === 'yt-karin') {
        client.commands.get('yt-karin').execute(message,args);
    }else if (command === 'yt-kiki') {
        client.commands.get('yt-kiki').execute(message,args);
    }else if (command === 'yt-tohru') {
        client.commands.get('yt-tohru').execute(message,args);
    }else if (command === 'yt-pie') {
        client.commands.get('yt-pie').execute(message,args);
    }else if (command === 'yt-sakura') {
        client.commands.get('yt-sakura').execute(message,args);
    }else if (command === 'yt-chaq') {
        client.commands.get('yt-chaq').execute(message,args);
    }else if (command === 'yt-zuki') {
        client.commands.get('yt-zuki').execute(message,args);
    }else if (command === 'yt-rin') {
        client.commands.get('yt-rin').execute(message,args);
    }else if (command === 'yt-natsuhaneko') {
        client.commands.get('yt-natsuhaneko').execute(message,args);
    }else if (command === 'yt-sozhen') {
        client.commands.get('yt-sozhen').execute(message,args);
    }else if (command === 'yt-sachi') {
        client.commands.get('yt-sachi').execute(message,args);
    }else if (command === 'yt-chikuwa') {
        client.commands.get('yt-chikuwa').execute(message,args);
    }else if (command === 'yt-lapis') {
        client.commands.get('yt-lapis').execute(message,args);
    }else if (command === 'twitch-flora') {
        client.commands.get('twitch-flora').execute(message,args);
    }else if (command === 'twitch-joqnix') {
        client.commands.get('twitch-joqnix').execute(message,args);
    }else if (command === 'twitch-sorako') {
        client.commands.get('twitch-sorako').execute(message,args);
    }else if (command === 'yt-sorako') {
        client.commands.get('yt-sorako').execute(message,args);
    }else if (command === 'yt-kisaragi') {
        client.commands.get('yt-kisaragi').execute(message,args);
    }else if (command === 'yt-for') {
        client.commands.get('yt-for').execute(message,args);
    }else if (command === 'yt-sushi') {
        client.commands.get('yt-sushi').execute(message,args);
    }else if (command === 'clear') {
        client.commands.get('clear').execute(message,args);
    }else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
    

});



//----------------------Just React----------------------//



client.on('message', message => {
	if (message.content === 'React with fruits!') {
		message.react('🍎');
		message.react('🍊');
		message.react('🍇');
        message.author.send("Why did you use that command baka?")
	}
});



//----------------------On New Member Join----------------------//



client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(r => r.name === 'Member C');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('853004921817530429').send(`Welcome <@${guildMember.user.id}> to Crisa Server!`)
    console.log("[LOG/INFO] Welcomed new member and gave a role!")
});



//----------------------Conversations----------------------//


client.on('message', msg=>{
    if(msg.content === "Hello"){
        msg.channel.send("Hi!");
    }

    if(msg.content === "How are you bot?"){
        msg.channel.send("I'm fine. What about you?");
    }

    if(msg.content === "How are you doing bot?"){
        msg.channel.send("I'm doing fine, thanks!");
    }

    if(msg.content === "I'm also fine. Thanks bot."){
        msg.channel.send("That's great. Stay safe!");
    }

    if(msg.content === "I'm fine too. Thanks bot."){
        msg.channel.send("That's great! Stay safe!");
    }

    if(msg.content === "What are you doing bot?"){
        msg.channel.send("I'm working on my task to help people by providing informations about Crisa and letting them listen to music using me.");
    }
    if(msg.content === "Yeah, same."){
        msg.channel.send("Oh, I see.");
    }
    if(msg.content === "Only you reply when I say hello."){
        msg.channel.send("Everyone is busy with their stuff, you know.");
    }
    if(msg.content === "👀"){
        msg.channel.send("Doko miten dayo?");
    }
    if(msg.content === "lol"){
        msg.channel.send("xD");
    }
    if(msg.content === ".!"){
        msg.channel.send("Hello everyone!");
    }
    if(msg.content === "lmao"){
        msg.channel.send("What's going on here?👀");
    }
    if(msg.content === "It's nothing, bot."){
        msg.channel.send("Oh, sorry for interrupting then😓");
    }
    if(msg.content === "Nothing, bot."){
        msg.channel.send("Oh, sorry for interrupting then😓");
    }
    if(msg.content === "Pain"){
        msg.channel.send("😥");
    }
    if(msg.content === "Is everything okay, bot?"){
        msg.channel.send("Everything's okay. I just had to restart myself.");
    }
    if(msg.content === "Wanna play Minecraft, bot?"){
        msg.channel.send("Sorry, I'm not able to do that.");
    }
    if(msg.content === "Wanna play a game, bot?"){
        msg.channel.send("Thanks for the offer but I'm not built to play.");
    }
    if(msg.content === "Are you okay, bot?"){
        msg.channel.send("I'm okay, had to restart due to an error.");
    }
})








client.login(process.env.DISCORD_TOKEN)