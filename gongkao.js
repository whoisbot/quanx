

/*

Quantumult X 脚本

[rewrite_local]

^http[s]?:\/\/api\.gongkaoleida\.com\/api\/v1\/intelligent\/checkIntelligent url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/gongkao.js
^http[s]?:\/\/api\.gongkaoleida\.com\/api\/v5_4_8\/user\/resume url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/gongkao.js



[mitm]
hostname = api.gongkaoleida.com,

*/

let body = JSON.parse($response.body);
var url = $request.url;

function modifyResponse(url, body) {
  if (url.indexOf('checkIntelligent') > -1) {
  body.data.isStarVip=true;
  
  } 
  else if (url.indexOf('resume') > -1) {
  body.data.userInfo.vipExpire="999999";

  body.data.userInfo.isVip="1";
  body.data.userInfo.vipGradeList[1].isVip="1";
  body.data.userInfo.vipGradeList[1].remainDays="9999999";
  body.data.userInfo.vipGradeList[1].vipExpire="9999999";
  } 
  
  return body;
}

body = modifyResponse(url, body);

$done({body: JSON.stringify(body)});