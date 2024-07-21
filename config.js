const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233508425433";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_06_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI3LFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODksXG4gICAgICAgIDcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1NixcbiAgICAgICAgODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg0LFxuICAgICAgICAzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU2LFxuICAgICAgICA3LFxuICAgICAgICAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTI1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMyLFxuICAgICAgICA4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI4LFxuICAgICAgICA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAzLFxuICAgICAgICA2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjQyLFxuICAgICAgICA4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDY0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRMczVwa3QrRGJGVTFDWFFkUXovQVVvbG5sNHBxTDNrSGluQ1NYb05uWmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJqSnRIdnp0UW9HQlVXRnZwcXQtd0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmRhNjZmYzAtYTEwMy00MGNmLWE4YjctYWEwMTBkYmU2MDgyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMTgxLFxuICAgICAgMjI0LFxuICAgICAgNDcsXG4gICAgICA0LFxuICAgICAgMzYsXG4gICAgICAxMjksXG4gICAgICA2MSxcbiAgICAgIDE4MixcbiAgICAgIDY1LFxuICAgICAgODcsXG4gICAgICAxMCxcbiAgICAgIDE5OCxcbiAgICAgIDI0NixcbiAgICAgIDE2OSxcbiAgICAgIDEzNyxcbiAgICAgIDI1MyxcbiAgICAgIDExNixcbiAgICAgIDIsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxMzQsXG4gICAgICAyMDUsXG4gICAgICAyMzEsXG4gICAgICAxNDgsXG4gICAgICAxODUsXG4gICAgICAxMDEsXG4gICAgICA3NixcbiAgICAgIDEwOCxcbiAgICAgIDIxNCxcbiAgICAgIDcsXG4gICAgICA1LFxuICAgICAgMTIzLFxuICAgICAgOTUsXG4gICAgICAyMDksXG4gICAgICAxMDMsXG4gICAgICAxMTYsXG4gICAgICAxODgsXG4gICAgICAxODksXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQldFWkRZQkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUwODQyNTQzMzo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjUzOTc0NjcwMjU4MjY5OjgzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lETHBZY0ZFSkdmODdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiemIrMWkzMGM2YmpnMUZWSko1cE41RjRlVlVYWXZiZnptT0pnb0dBMThGWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnTzlzYzhqMGVMcjRuRFB3bkx0a2hWOVl3OEdwY0JkYXRBRWd3TGJzMGs2Z2YrbXY2b3U3M0hFbUg0MDFENmJONkM5OHJaUVRpOEZpazRFK2Zoc01BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnVkpnTEh1S3FrRFFvVEVJbHBSNkRQendTR1cvM2VZM0FybFJ6clF5YUg2U1MzeWxHM3p2cjFJK0c5Q3gwUkcvMmh5RnV6VSsvcWZjZGdWOU5ObndnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MDg0MjU0MzM6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU1Mjc4OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
