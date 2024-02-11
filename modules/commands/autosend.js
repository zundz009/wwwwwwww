module.exports.config = {
    name: 'autosend',
    version: '10.02',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Auto',
    usages: '[]',
    cooldowns: 0
};
const r = a => a[Math.floor(Math.random()*a.length)],
{
    get
} = require('axios'),
config = [{
    timer: '6:00:00 AM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 ===╦╦═─ 𝙋𝙞𝙣𝙜𝙜𝙜 Đâ𝙮 𝙇à 𝙏𝙝ô𝙣𝙜 𝘽á𝙤 ─═╦╦=== \n━━━━━━━━━━━━━━━━━━\n💸 ==== [ 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 ] ==== 💸\n➝𝐓𝐡𝐮ê 𝐁𝐨𝐭 35𝐤/𝐓𝐡á𝐧𝐠 𝐂ầ𝐦 𝐀𝐝𝐦𝐢𝐧 𝐁𝐨𝐭\n➝ Đượ𝐜 𝐓ự 𝐃𝐨 𝐒ử 𝐃ụ𝐧𝐠 𝐁𝐨𝐭 𝐊𝐡ô𝐧𝐠 𝐁ị 𝐇ạ𝐧 𝐂𝐡ế 𝐐𝐮𝐲ề𝐧 𝐒ử 𝐃ụ𝐧𝐠 \n━━━━━━━━━━━━━━━━━━\n🌺 ==== [ 𝗠𝗨̛𝗢̛̣𝗡 𝗕𝗢𝗧 ] ==== 🌺\n➝ 𝐁𝐨𝐱 𝐓𝐫ê𝐧 𝟑𝟎𝐓𝐯 𝐌ượ𝐧 𝐏𝐡ả𝐢 𝐁𝐢ế𝐭 𝐌ở 𝐌ồ𝐦 & 𝐊𝐡ô𝐧𝐠 𝐓ự Ý 𝐊𝐢𝐜𝐤 𝐁𝐨𝐭 𝐊𝐡𝐢 𝐂𝐡ư𝐚 𝐁á𝐨 𝐀𝐝𝐦𝐢𝐧\n➝ 𝗧𝐓ự 𝐌ò & 𝐒ử 𝐃ụ𝐧𝐠 𝐊𝐡ô𝐧𝐠 𝐂ó 𝐇ướ𝐧𝐠 𝐃ẫ𝐧 𝐁𝐚𝐧𝐝 𝐁𝐨𝐭 \n━━━━━━━━━━━━━━━━━━\n𝐂ả𝐦 Ơ𝐧 & 𝐗𝐢𝐧 𝐋ỗ𝐢 Đã 𝐋à𝐦 𝐏𝐡𝐢ề𝐧 <3\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\nĐ𝙞ề𝙪 𝙝à𝙣𝙝 𝙗𝙮 𝑩𝑶𝒔𝒔𝑲𝒆𝒏\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
    {
      timer: '7:00:00 AM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},
    {
      timer: '8:00:00 AM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},   
    {
      timer: '9:00:00 AM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']   
},
   {
     timer: '10:00:00 AM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},
   { 
     timer: '11:00:00 AM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},
   {
     timer: '12:00:00 AM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},
    {
      timer: '1:00:00 PM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},
    {
      timer: '2:00:00 PM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},
    { 
      timer: '3:00:00 PM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},
   { 
     timer: '4:19:00 PM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},
    {
      timer: '5:00:00 PM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},
    { 
     timer: '6:00:00 PM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},
   {
     timer: '7:00:00 PM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},
    { 
      timer: '8:00:00 PM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},
   {
     timer: '9:45:00 PM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
},
   { 
     timer: '10:00:00 PM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸===╦╦═─ 𝙋𝙞𝙣𝙜𝙜𝙜 Đâ𝙮 𝙇à 𝙏𝙝ô𝙣𝙜 𝘽á𝙤 ─═╦╦=== \n━━━━━━━━━━━━━━━━━━\n💸 ==== [ 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 ] ==== 💸\n➝𝐓𝐡𝐮ê 𝐁𝐨𝐭 35𝐤/𝐓𝐡á𝐧𝐠 𝐂ầ𝐦 𝐀𝐝𝐦𝐢𝐧 𝐁𝐨𝐭 & 𝐀𝐜𝐩 𝐁𝐨𝐭\n➝ Đượ𝐜 𝐓ự 𝐃𝐨 𝐒ử 𝐃ụ𝐧𝐠 𝐁𝐨𝐭 𝐊𝐡ô𝐧𝐠 𝐁ị 𝐇ạ𝐧 𝐂𝐡ế 𝐐𝐮𝐲ề𝐧 𝐒ử 𝐃ụ𝐧𝐠 \n━━━━━━━━━━━━━━━━━━\n🌺 ==== [ 𝗠𝗨̛𝗢̛̣𝗡 𝗕𝗢𝗧 ] ==== 🌺\n➝ 𝐁𝐨𝐱 𝐓𝐫ê𝐧 𝟑𝟎𝐓𝐯 𝐌ượ𝐧 𝐏𝐡ả𝐢 𝐁𝐢ế𝐭 𝐌ở 𝐌ồ𝐦 & 𝐊𝐡ô𝐧𝐠 𝐓ự Ý 𝐊𝐢𝐜𝐤 𝐁𝐨𝐭 𝐊𝐡𝐢 𝐂𝐡ư𝐚 𝐁á𝐨 𝐀𝐝𝐦𝐢𝐧\n➝ 𝗧𝐓ự 𝐌ò & 𝐒ử 𝐃ụ𝐧𝐠 𝐊𝐡ô𝐧𝐠 𝐂ó 𝐇ướ𝐧𝐠 𝐃ẫ𝐧 𝐁𝐚𝐧𝐝 𝐁𝐨𝐭\n━━━━━━━━━━━━━━━━━━\n𝐂ả𝐦 Ơ𝐧 & 𝐗𝐢𝐧 𝐋ỗ𝐢 Đã 𝐋à𝐦 𝐏𝐡𝐢ề𝐧 <3\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━━━━\nĐ𝙞ề𝙪 𝙝à𝙣𝙝 𝙗𝙮 𝑩𝑶𝒔𝒔𝑲𝒆𝒏\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
   { 
     timer: '11:00:00 PM',
    message: ['\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hi, Xin Lỗi Đã Làm Phiền🍇\n\n🎀Bên Mình Có Nhận Tăng Người Theo Dõi, Tương Tác Facebook Cho Anh Em Chơi Tết🎀\n❤Bảng Giá Dịch Vụ❤\n\n🔥1.000Follow = 25k🔥\n👍1.000 like, Tim,... = 10k 👍\n Mong Anh em Ủng hộ ạ 🌺']
}];
module.exports.onLoad = o => {
    if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
    global.autosendmessage_setinterval = setInterval(async function() {
        if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
            var msg = r(á.message);
            msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://apilink.khaitran16.repl.co/videochill`)).data.data)
            msg = {
                body: msg, attachment: (await get((await get(`https://apilink.khaitran16.repl.co/videochilllofigif`)).data.data, {
                    responseType: 'stream'
                })).data
            };
            global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
        };
    }, 1000);
};
module.exports .run = () => {};