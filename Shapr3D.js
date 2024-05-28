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



function deepReplace(obj, keyToFind, valueToSet) {
    Object.keys(obj).forEach(function (key) {
        if (key === keyToFind) {
            obj[key] = valueToSet;
        } else if (obj[key] && typeof obj[key] === 'object') {
            deepReplace(obj[key], keyToFind, valueToSet);
        }
    });
}

var body = $response.body; // 获取响应体
var obj = JSON.parse(body); // 将响应体字符串转为JSON对象

deepReplace(obj, 'auto_renew_status', 1); 
deepReplace(obj, 'expiration_intent', 0); 
deepReplace(obj, 'status', 1); 
deepReplace(obj, 'expires_date',"2099-03-29 13:45:16 Etc/GMT"); 
deepReplace(obj, 'expires_date_ms', 4077265517000); 
deepReplace(obj, 'expires_date_pst', "2099-03-29 06:45:16 America/Los_Angeles"); 
deepReplace(obj, 'is_trial_period', "false"); 
deepReplace(obj, 'is_in_intro_offer_period', "true"); 

$done({body: JSON.stringify(obj)});
