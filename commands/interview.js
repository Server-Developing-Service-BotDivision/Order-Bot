module.exports.run = (bot, message, args, discord) => {
 let user = message.mentions.members.first();
  let em = new discord.RichEmbed()
    .setTitle("Interviews!")
    .setDescription(`${message.author.id}, is interviewing` + user +".")

  message.channel.send({embed: em})
}

module.exports.help = {
    name: "interview"
}
