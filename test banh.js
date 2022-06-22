const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let premium = `
*SEWABOT PRICE HERE*
 *FREE USER*

  Unlimited Limit
  Premium User 
  Add Bot to Group 
  
 *PREMIUM USER*

  Unlimited Limit 
  Premium User 
  Add Bot to Group 
       *Rp. 15.000*
      Expired 1 Minggu
  Order | hub : owner
`
     let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
          hydratedTemplate: {
            hydratedContentText: esce,
            imageMessage: message.imageMessage, 
           hydratedFooterText: '      ',
           hydratedButtons: [{
             urlButton: {
               displayText: 'Saweria',
               url: 'https://saweria.co/Kricom'
             }

           },
                {
               urlButton: {
               displayText: 'Group Bot',
               url: 'https://chat.whatsapp.com/HVyRaNWp18NKMAIHv8NjLP'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Terimakasih',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler