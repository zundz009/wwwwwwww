module.exports.config = {
  name: "bye",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "MAVERICK",
  description: "",
  commandCategory: "không cần dấu lệnh",
  usages: "",
  cooldowns: 0,
  denpendencies: {
      "fs": "",
      "request": ""
  }
};
module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const request = require("request");
  const dirMaterial = __dirname + `/noprefix/`;
  if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "bye.jpg")) request("https://i.imgur.com/n61nZqv.jpg").pipe(fs.createWriteStream(dirMaterial + "bye.jpg"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
  const fs = require("fs");
  let name = await Users.getNameUser(event.senderID)
  var msg = {
              body: ` ${name}, Đi Ngủ Thoai hihi`,
              attachment: fs.createReadStream(__dirname + `/noprefix/bye.jpg`)
          }
  if (event.body.toLowerCase() == "Ngủ "){
      return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "pp"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "ngủ"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "Đi Ngủ"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "Ngủ"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
      };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu.",event.threadID)
}