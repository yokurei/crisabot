module.exports = {
    name:'reactionrole',
    description:'sets up a reaction role message!',
    async execute(message, args, Discord, client) {
        const channel = '855116510489739284';
        const test1Role = message.guild.roles.cache.find(role => role.name === "test1");
        const test2Role = message.guild.roles.cache.find(role => role.name === "test2");

        const test1Emoji = '🟡';
        const test2Emoji = '🔵';

        let roleembed = new Discord.MessageEmbed()
        .setTitle('Choose a role to get!')
        .setDescription('Choosing a role will give you the role! \n\n\ ' 
        + `${test1Emoji} for test1 \n `
        + `${test2Emoji} for test2`);

        let messageEmbed = await message.channel.send(roleembed);
        messageEmbed.react(test1Emoji);
        messageEmbed.react(test2Emoji);

        client.on('MessageReactionAdd', async (reaction, user) => {
            await message.send("Part1");
            if(reaction.message.partial) await reaction.message.fetch();
            await message.send("Part2");
            if(reaction.partial) await reaction.fetch();
            await message.send("Part3");
            if(user.bot) return;
            await message.send("Part4");
            if(!reaction.message.guild) return;
            await message.send("Part5");

            if(reaction.message.channel.id == channel){
                await message.send("Part6");
                if(reaction.emoji.name === test1Emoji){
                    await message.send("Part7");
                    await reaction.message.guild.members.cache.get(user.id).roles.add(test1Role);
                }if(reaction.emoji.name === test2Emoji){
                    await message.send("Part8");
                    await reaction.message.guild.members.cache.get(user.id).roles.add(test2Role);
                }
            } else {
                return;
            }

        });

        client.on('MessageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === test1Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(test1Role);
                }if(reaction.emoji.name === test2Emoji){
                   await reaction.message.guild.members.cache.get(user.id).roles.remove(test2Role);
                }
            } else {
                return;
            }

        });
    }




}
