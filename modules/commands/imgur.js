module.exports.config = {
    name: '',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',//Trankhuong 
    description: 'Imgur lấy link ảnh hoặc video!',
    commandCategory: 'Tiện ích',
    usages: '.../phản hồi/ảnh/video/gif',
    dependencies: {
        'image-downloader': '',
        'tslib': '',
        'imgur': '',
        'request': ''
    }}
this.run = async function({
    api, event,
}){
    let get = require('axios').get;

    let send = msg=>api.sendMessage(msg, event.threadID);

    if(!/reply$/.test(event.type))return send(⚡ Chưa phản hồi ảnh hoặc video/gif!);

    let result = [];
    for(let{url}of(event.messageReply.attachments || []))try {
        result.push((await get(https://api-imgur.trankhuong20723.repl.co/?${url})).data);
    } catch (e) {};

    send(JSON.stringify(result, 0,4));
};