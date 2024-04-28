/*

Quantumult X 脚本
charmjng数藏




[rewrite_local]
^http[s]?:\/\/api\.charmingapp\.cn\/charming\/p\/nft\/activity\/detail url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/charming.js
[mitm]




hostname = api.charmingapp.cn

*/

let obj = JSON.parse($response.body);
obj.sale_status=1;


$done({body: JSON.stringify(obj)});




