const { google } = require("googleapis");
const clean=(v,m=2000)=>String(v??"").replace(/[<>]/g,"").trim().slice(0,m);
module.exports=async function(req,res){
 const required=["GOOGLE_CLIENT_ID","GOOGLE_CLIENT_SECRET","GOOGLE_REFRESH_TOKEN","GOOGLE_EMAIL","CONTACT_EMAIL"];
 if(req.method==="GET")return res.status(200).json({ok:true,service:"Servicio Técnico PC Madrid contacto API",node:process.version,environment:Object.fromEntries(required.map(k=>[k,!!process.env[k]]))});
 if(req.method!=="POST")return res.status(405).json({ok:false,code:"METHOD_NOT_ALLOWED"});
 try{
  const missing=required.filter(k=>!process.env[k]);if(missing.length)return res.status(500).json({ok:false,code:"MISSING_ENVIRONMENT_VARIABLES",missing});
  const{name,phone,email,device,message}=req.body||{};const n=clean(name,80),p=clean(phone,30),e=clean(email,120),d=clean(device,160),m=clean(message,2500);
  if(!n||!p||!e||!m)return res.status(400).json({ok:false,code:"INVALID_FORM_DATA"});
  const auth=new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID,process.env.GOOGLE_CLIENT_SECRET);auth.setCredentials({refresh_token:process.env.GOOGLE_REFRESH_TOKEN});await auth.getAccessToken();
  const gmail=google.gmail({version:"v1",auth});const subject="Nueva consulta Servicio Técnico PC Madrid";
  const html=`<h2>Nueva consulta Servicio Técnico PC Madrid</h2><p><b>Nombre:</b> ${n}</p><p><b>Teléfono:</b> ${p}</p><p><b>Email:</b> ${e}</p><p><b>Marca / modelo / equipo:</b> ${d||"No indicado"}</p><p><b>Consulta:</b><br>${m.replace(/\n/g,"<br>")}</p>`;
  const raw=[`From: Servicio Técnico PC Madrid <${process.env.GOOGLE_EMAIL}>`,`To: ${process.env.CONTACT_EMAIL}`,`Reply-To: ${e}`,`Subject: =?UTF-8?B?${Buffer.from(subject).toString("base64")}?=`,"MIME-Version: 1.0","Content-Type: text/html; charset=UTF-8","",html].join("\r\n");
  await gmail.users.messages.send({userId:"me",requestBody:{raw:Buffer.from(raw).toString("base64url")}});
  return res.status(200).json({ok:true});
 }catch(error){console.error("PC Madrid Gmail API error:",error);return res.status(500).json({ok:false,code:"EMAIL_SEND_FAILED"});}
};