

/*

Quantumult X 脚本

[rewrite_local]

^http[s]?:\/\/api\.gongkaoleida\.com\/api\/v1\/intelligent\/checkIntelligent url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/gongkao.js



[mitm]
hostname = api.gongkaoleida.com,

*/

let body = JSON.parse($response.body);
var url = $request.url;

function modifyResponse(url, body) {
  if (url.indexOf('checkIntelligent') > -1) {
  body.data.isStarVip=true;
  
  } 
  
  return body;
}

body = modifyResponse(url, body);

$done({body: JSON.stringify(body)});