/***********************************

> 应用名称：GoodNotes6
> 脚本作者：whoisbot
> 解锁说明：解锁高级会员权限
> 更新时间：2024-03-08（测试中）
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️



[rewrite_local]
^https:\/\/isi\.csan\.goodnotes(app)?\.com(\.cn)?(\/v1)?\/(receipts$|subscribers\/[^/]+$) url script-response-header https://raw.githubusercontent.com/whoisbot/quanx/main/goodnotes.js


[mitm] 

hostname=isi.csan.goodnotes.com.cn, isi.csan.goodnotes.com,isi.csan.goodnotesapp.com.cn, isi.csan.goodnotesapp.com

***********************************/


var header = $response.headers;
header={
'Connection' : `close`,
'Content-Length' : `557`,
'Content-Encoding' : `gzip`
};
let obj = JSON.parse($response.body);
obj.subscriber.non_subscriptions={
            "com.goodnotes6.one_time_unlock":[
                {
                    "is_sandbox":false,
                    "ownership_type":"PURCHASED",
                    "id":"46ab585dbc",
                    "original_purchase_date":"2022-11-10T23:58:09Z",
                    "store_transaction_id":"300001271068792",
                    "purchase_date":"2023-08-10T23:58:09Z",
                    "store":"app_store"
                }
            ]
        };
obj.subscriber.subscriptions={};

obj.subscriber.other_purchases={
            "com.goodnotes6.one_time_unlock":{
                "purchase_date":"2023-08-10T23:58:09Z"
            };
            
obj.subscriber.entitlements={
            "apple_access":{
                "grace_period_expires_date":null,
                "purchase_date":"2023-08-10T14:16:41Z",
                "product_identifier":"com.goodnotes6.one_time_unlock",
                "expires_date":null
            }
        };

$done({headers: header,body: JSON.stringify(obj)});