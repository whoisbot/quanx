/*

Quantumult X 脚本
unlock Shapr:3D PRO
> 应用名称：Shapr3D
> 脚本作者：whoisbot
> 解锁说明：解锁高级会员权限
> 更新时间：2024-05-28
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️

[rewrite_local]
# unlock Shapr3D

^http[s]?:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/Shapr3D.js
[mitm]
hostname = buy.itunes.apple.com,

*/

let obj = JSON.parse($response.body);
obj.status = "1";

obj.pending_renewal_info=[{
    "expiration_intent": "0",
    "auto_renew_product_id": "com.shapr3d.shapr.iap.lite2.renewing.yearly",
    "is_in_billing_retry_period": "0",
    "product_id": "com.shapr3d.shapr.iap.lite2.renewing.yearly",
    "original_transaction_id": "510000657302855",
    "auto_renew_status": "1"
  }];

obj.receipt.in_app[0].expires_date="2099-03-29 13:45:16 Etc/GMT";
obj.receipt.in_app[0].expires_date_ms="4077265517000";
obj.receipt.in_app[0].expires_date_pst="2099-03-29 06:45:16 America/Los_Angeles";
obj.receipt.in_app[0].is_trial_period="false";
obj.receipt.in_app[0].is_in_intro_offer_period="true";
obj.latest_receipt_info[0].expires_date="2099-03-29 13:45:16 Etc/GMT";
obj.latest_receipt_info[0].expires_date_ms="4077265517000";
obj.latest_receipt_info[0].expires_date_pst="2099-03-29 06:45:16 America/Los_Angeles";
obj.latest_receipt_info[0].is_trial_period="false";
obj.latest_receipt_info[0].is_in_intro_offer_period="true";

$done({body: JSON.stringify(obj)});
