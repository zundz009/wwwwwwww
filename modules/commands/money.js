module.exports.config = {
  name: "money",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Kiểm tra số tiền của bản thân hoặc người được tag",
  commandCategory: "game",
  usages: "[trống|Tag]",
  cooldowns: 5
};
module.exports.run = async function({ api, event, args, Currencies, Users}) {
    const { threadID, messageID, senderID, mentions } = event;
  if (!args[0]) {
    const money = (await Currencies.getData(senderID)).money;
    let name = await Users.getNameUser(event.senderID)
  return api.sendMessage(`[ 𝙏𝙖̀𝙞 𝙆𝙝𝙤𝙖̉𝙣 ]\n🧠 𝙏𝙚̂𝙣: ${name}\n💵 𝙏𝙖̀𝙞 𝙎𝙖̉𝙣: ${money} 𝙑𝙉𝘿`,event.threadID, event.messageID);  }
  else if (Object.keys(event.mentions).length == 1) {
    var mention = Object.keys(mentions)[0];
    var money = (await Currencies.getData(mention)).money;
    if (!money) money = 0;
 return api.sendMessage({body:`[ 𝙏𝙖̀𝙞 𝙆𝙝𝙤𝙖̉𝙣 ]\n🧠 𝙏𝙚̂𝙣: ${mentions[mention].replace(/\@/g, "")}\n💵 𝙏𝙖̀𝙞 𝙎𝙖̉𝙣: ${money} 𝙑𝙉𝘿`,
      mentions: [{
        tag: mentions[mention].replace(/\@/g, ""),
        id: mention
      }]
    }, threadID, messageID);
  }
  else return global.utils.throwError(this.config.name, threadID, messageID);
}