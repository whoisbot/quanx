/*

Quantumult X 脚本
charmjng数藏




[rewrite_local]
^http[s]?:\/\/api\.charmingapp\.cn\/charming\/p\/current\/milli\/time url script-response-body charming.js
[mitm]

hostname = api.charmingapp.cn

*/

let obj = JSON.parse($response.body);
obj.current_milli_time=“1709869288000”,


$done({body: JSON.stringify(obj)});

