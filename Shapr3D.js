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
^https?:\/\/prod\.api\.shapr3d\.com\/user-management\/teams-profile url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/Shapr3D.js

[mitm]
hostname = prod.api.shapr3d.com,

*/

let obj = JSON.parse($response.body);
obj = {
  "id": "b750213e-9b39-49ec-9679-009b97736e89",
  "email": "445165653@qq.com",
  "subscriptionType": "edu",
  "subscriptions": [{
    "id": 501413,
    "type": "edu",
    "tier": "pro",
    "effectiveFeatureSet": "pro",
    "period": "yearly",
    "purchaseDate": "2022-04-21T03:01:15.302Z",
    "expirationDate": "2099-12-31T03:01:15.302Z",
    "autoRenewStatus": false,
    "isTrial": false
  }],
  "subscriptionExpires": "2099-12-31T03:01:15.302Z",
  "hasEmail": true,
  "hasPassword": true,
  "hasFacebookID": false,
  "syncPermissions": {
    "projectSyncAllowed": true,
    "projectSyncFeatureFlag": true
  },
  "plans": {
    "paddle.lite.monthly": {
      "tier": "lite",
      "period": "monthly",
      "isTrialEligible": false,
      "checkoutURL": "https://account.shapr3d.com/?period=monthly&tier=lite"
    },
    "paddle.lite.yearly": {
      "tier": "lite",
      "period": "yearly",
      "isTrialEligible": false,
      "checkoutURL": "https://account.shapr3d.com/?period=yearly&tier=lite"
    }
  }
};
$done({body: JSON.stringify(obj)});
