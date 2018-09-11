module.exports.run = (bot, message, args, discord) => {
  let join = args.join(" ");
  
  let em = new discord.RichEmbed()
  .setTitle("Order form.")
  .setDescription(`${message.author.username}, has logged a order.`)
  .addField("Order Number", `${Math.floor(Math.random()*500000)}`)
  .addField("Order", join)
  
  messages.channel.send({embed: em})
}

module.exports.help = {
  name: "neworder"
}
