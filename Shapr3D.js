/*

Quantumult X 脚本
unlock Shapr:3D PRO
> 应用名称：Shapr3D
> 脚本作者：whoisbot
> 解锁说明：解锁高级会员权限
> 更新时间：2024-03-08
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️

[rewrite_local]
# unlock Shapr3D
^https?:\/\/prod\.api\.shapr3d\.com\/user-management\/profile-with-device url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/Shapr3D.js
^https?:\/\/prod\.api\.shapr3d\.com\/user-management\/account url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/Shapr3D.js
[mitm]
hostname = prod.api.shapr3d.com,

*/

let obj = JSON.parse($response.body);
obj.subscriptionType = "pro_year";
obj.subscriptionExpires = "2100-01-01T00:00:00.000Z";
obj.subscriptions=[{
    "id": 206992,
    "type": "appstore",
    "tier": "pro",
    "period": "yearly",
    "purchaseDate": "2021-03-15T13:45:16.000Z",
    "expirationDate": "2029-03-29T13:45:16.000Z",
    "autoRenewStatus": true,
    "isTrial": false
  }],
$done({body: JSON.stringify(obj)});
