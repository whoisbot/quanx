/*

Quantumult X 脚本
unlock python3ide

> 应用名称：python3ide
> 脚本作者：whoisbot
> 解锁说明：解锁高级会员权限
> 更新时间：2024-03-08
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️


[rewrite_local]


^http[s]?:\/\/api\.revenuecat\.com\/v1\/subscribers url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/python3ide.js
[mitm]

hostname = api.revenuecat.com

*/

let obj = JSON.parse($response.body);
obj.subscriber.subscriptions.python3ide_six_month.expires_date="2099-06-17T07:40:40Z";
obj.subscriber.subscriptions.python3ide_six_month.period_type="pro";
obj.subscriber.entitlements.pro.expires_date="2099-06-17T07:40:40Z";


$done({body : JSON.stringify(obj)});

