/*

Quantumult X 脚本
unlock python3ide




[rewrite_local]


^http[s]?:\/\/api\.revenuecat\.com\/v1\/subscribers url script-response-body python3ide.js
[mitm]

hostname = api.revenuecat.com

*/

let obj = JSON.parse($response.body);
obj.subscriber.subscriptions.python3ide_six_month.expires_date="2099-06-17T07:40:40Z";
obj.subscriber.subscriptions.python3ide_six_month.period_type="pro";
obj.subscriber.entitlements.pro.expires_date="2099-06-17T07:40:40Z";


$done({body: JSON.stringify(obj)});

