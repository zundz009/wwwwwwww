module.exports.config = {
  name: "hi",
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
  if (!fs.existsSync(dirMaterial + "hi.jpg")) request("https://i.imgur.com/qYkFFGs.jpg").pipe(fs.createWriteStream(dirMaterial + "hi.jpg"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
  const fs = require("fs");
  let name = await Users.getNameUser(event.senderID)
  var msg = {
              body: ` ${name}, Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺❤️`,
              attachment: fs.createReadStream(__dirname + `/noprefix/hi.jpg`)
          }
  if (event.body.toLowerCase() == "hi"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "hello"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "chào"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "hai"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "lô"){
      return api.sendMessage(msg,event.threadID,event.messageID);}
      };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu.",event.threadID)
  }