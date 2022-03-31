require('./command/command.js')
let {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
let fs = require('fs')
let chalk = require('chalk')
let { color } = require('./lib/color')
let { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
let moment = require("moment-timezone")
let time = moment().tz('Asia/Jakarta').format('HH:mm:ss z')	
let {_wait, getBuffer, h2k, generateMessageID, banner, getGroupAdmins, getRandom, start, success, author, close } = require('./lib/functions');
let { ownerName, botName,SesionName, ownerNumber} = require('./setup/setting.json')
nocache('./command/command.js', module =>  console.log(('|\x1b[1;32m UPD️ \x1b[1;37m|'), time, chalk.red(`Update Module`), chalk.green(module)))
nocache('./index.js', module =>  console.log(('|\x1b[1;32m UPD️ \x1b[1;37m|'), time, chalk.red(`Update Module`), chalk.green(module)))
let _welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')           
let starts = async (btf = new WAConnection()) => {
    btf.logger.level = 'warn'
    btf.version = [2,2143,3]
    btf.browserDescription = ['BtfBot','Chrome', '3.0']
    console.log(banner)
    console.log(chalk.yellow(`彡 Selamat Datang ${ownerName}`),chalk.yellow(`\n彡 Saat ini pukul ${time}`), chalk.green(`\n彡 ❝ Tetap Semangat Jalani  Harinya ❞`),chalk.white(`\n◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆`))
    btf.on('qr', () => {
        console.log(color('[SCAN ME]','red'), color('SEDANG MENUNGGU DI SCAN🔍'))
    })
    btf.on('credentials-updated', () => {
		fs.writeFileSync('./setup/session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
      let sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await btf.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    btf.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./setup/session.json') && btf.loadAuthInfo('./setup/session.json')
    btf.on('connecting', () => {
        start('2', 'Connecting to WhatsApp Web')
    })
    btf.on('open', () => {
        success('2', 'Succes Connect')
        start('💬')
    })
    await btf.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./setup/session.json', JSON.stringify(btf.base64EncodedAuthInfo(), null, '\t'))
    
    
    
    
    btf.on('chat-update', async (message) => {
    require('./command/command.js')(btf, message, _welkom)
    })
    
	btf.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
			let mdata = await btf.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6281233959206-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;btf;;;\nFN:btf\nitem1.TEL;waid=6281233959206:6281233959206\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await btf.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://api-btfzex.herokuapp.com/api/canvas/welcome2?username=${pushname}&groupname=${mdata.subject}&membercount=-&profile=${ppimg}&background=${ppimg}&apikey=kfL8EfHc'
			
		
			}
			let buff = await getBuffer(ppimg)
			masuk =`*𝙷𝚊𝚕𝚕𝚘 @${num.split('@')[0]}*\n*𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝙳𝚊𝚝𝚊𝚗𝚐  𝙳𝚒 ${mdata.subject}*\n\n𝚂𝚒𝚕𝚊𝚔𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 .𝚖𝚎𝚗𝚞 𝚞𝚗𝚝𝚞𝚔 𝚖𝚎𝚖𝚞𝚕𝚊𝚒 𝚋𝚘𝚝`
			gbutsan = [{buttonId:'SERAH',buttonText:{displayText:'👋𝚆𝙴𝙻𝙻𝙲𝙾𝙼𝙴 𝙱𝙴𝙱𝙰𝙽'},type:1}]
			mhan = await btf.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: ppimg})
let buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${masuk}`,
footerText: `${botName}︎`, 
buttons: gbutsan,
headerType: 4 }
			btf.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./database/media/btfbot.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'remove') {
			let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6281233959206-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;btf;;;\nFN:btf\nitem1.TEL;waid=6281233959206:6281233959206\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await btf.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://api-btfzex.herokuapp.com/api/canvas/welcome2?username=${pushname}&groupname=${mdata.subject}&membercount=-&profile=${ppimg}&background=${ppimg}&apikey=kfL8EfHc'
			}
			let buff = await getBuffer(ppimg)
			keluar =`𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝚝𝚒𝚗𝚐𝚐𝚊𝚕 @${num.split('@')[0]}\n𝙳𝚊𝚜𝚊𝚛 𝚋𝚎𝚋𝚊𝚗 𝚐𝚛𝚞𝚙 𝚊𝚓𝚊\n𝙱𝚝𝚠 𝙼𝚊𝚔𝚊𝚜𝚒𝚑 𝙳𝚊𝚑 𝚖𝚘 𝚖𝚊𝚖𝚙𝚒𝚛`
			gbutsan = [{buttonId:'SERAH',buttonText:{displayText:'👋𝙳𝙰𝙳𝙰𝙷'},type:1}]
			mhan = await btf.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: ppimg})
let buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `${botName}︎`,
buttons: gbutsan,
headerType: 4 }
			btf.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, { thumbnail: fs.readFileSync('./database/media/btfbot.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6281233959206-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;btf;;;\nFN:btf\nitem1.TEL;waid=6281233959206:6281233959206\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
let thu = await btf.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*𝙿 𝚁 𝙾 𝙼 𝙾 𝚃 𝙴 - 𝙳 𝙴 𝚃 𝙴 𝙲 𝚃 𝙴 𝙳*\n\n${shp} 𝚄𝚜𝚎𝚛𝚗𝚊𝚖𝚎: @${num.split('@')[0]}\n\n${shp} 𝙱𝚒𝚘 : ${thu.status}\n\n${shp} 𝚃𝚒𝚖𝚎 : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} 𝙶𝚛𝚘𝚞𝚙: ${mdata.subject}\n\n𝙿𝚊𝚝𝚞𝚑𝚒 𝚁𝚞𝚕𝚎𝚜`
btf.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6281233959206-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;btf;;;\nFN:btf\nitem1.TEL;waid=6281233959206:6281233959206\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
thu = await btf.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*𝙳 𝙴 𝙼 𝙾 𝚃 𝙴 - 𝙳 𝙴 𝚃 𝙴 𝙲 𝚃 𝙴 𝙳*\n\n${shp} 𝚄𝚜𝚎𝚛𝚗𝚊𝚖𝚎: @${num.split('@')[0]}\n\n${shp} 𝙱𝚒𝚘 : ${thu.status}\n\n${shp} 𝚃𝚒𝚖𝚎 : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} 𝙶𝚛𝚘𝚞𝚙: ${mdata.subject}\n\n𝙼𝚊𝚖𝚙𝚞𝚜 𝚕𝚞 𝚍𝚒  𝚍𝚎𝚖𝚘𝚝𝚎`
btf.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       

	btf.on('group-update', async (anu) => {
		let metdata = await btf.groupMetadata(anu.jid)
    	let fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6281233959206-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;btf;;;\nFN:btf\nitem1.TEL;waid=6281233959206:6281233959206\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    btf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    btf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    btf.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    btf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    btf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

btf.on('CB:action,,call', async json => {
        let callerId = json[2][0][1].from;
        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${ownerName}` + '\n' + `ORG:Developer ${botName}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${ownerNumber}` + ':+' + `${ownerNumber}` + '\n' + 'END:VCARD'
        btf.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        btf.sendMessage(callerId, `${botName}`, { displayname: `${ownerName}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${botName}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./database/media/btfbot.jpg'),sourceUrl:`https://wa.me/6281233959206?text=Assalamualaikum`}}})
        await sleep(5000)
        await btf.blockUser(callerId, "add")
        })
        
	btf.on('message-delete', async (m) => {
if (!m.key.fromMe && !antidelete) {
if (!m.key.remoteJid == 'status@broadcast') return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
let jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = btf.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = btf.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
btf.copyNForward(m.key.remoteJid, m.message)
btf.sendMessage(m.key.remoteJid, `▷\`\`\`Anti Delete\`\`\`

▢ \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
▢ \`\`\`Tipe : ${c3type}\`\`\`
▢ \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}


function nocache(module, cb = () => { }) {
    console.log(('|\x1b[1;32m SET️ \x1b[1;37m|'), time, chalk.red(`Setup Module`), chalk.green(module))
    
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}


starts()
