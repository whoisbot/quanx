/***********************************

> 应用名称：GoodNotes6
> 软件版本：6.0.1
> 脚本作者：ddgksf2013
> 微信账号：墨鱼手记
> 解锁说明：解锁高级会员权限
> 更新时间：2023-08-11
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️
        
<<<<<<< main

=======
>>>>>>> 39b0502


[rewrite_local]
  
# ～GoodNotes6☆解锁会员权限（2023-08-11）@ddgksf2013
^http[s]?:\/\/isi\.csan\.goodnotesapp\.com\.cn\/v1\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/goodnotes6.js

^http[s]?:\/\/isi\.csan\.goodnotes\.com\/v1\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/goodnotes6.js


[mitm] 

hostname=isi.csan.goodnotes.com

***********************************/



















let obj = JSON.parse($response.body);


obj={
    "request_date_ms":1709442294703,
    "request_date":"2024-03-03T05:04:54Z",
    "subscriber":{
        "non_subscriptions":{
            "com.goodnotes.gn6_one_time_unlock":[
                {
                    "is_sandbox":false,
                    "ownership_type":"PURCHASED",
                    "id":"06e984c995",
                    "original_purchase_date":"2024-03-03T05:01:34Z",
                    "store_transaction_id":"510001502266140",
                    "purchase_date":"2024-03-03T05:01:34Z",
                    "store":"app_store"
                }
            ]
        },
        "first_seen":"2024-02-28T02:37:05Z",
        "original_application_version":"469734.405653997",
        "other_purchases":{
            "com.goodnotes.gn6_one_time_unlock":{
                "purchase_date":"2024-03-03T05:01:34Z"
            }
        },
        "management_url":null,
        "subscriptions":{

        },
        "entitlements":{
            "apple_access":{
                "grace_period_expires_date":null,
                "purchase_date":"2024-03-03T05:01:34Z",
                "product_identifier":"com.goodnotes.gn6_one_time_unlock",
                "expires_date":null
            }
        },
        "original_purchase_date":"2020-03-08T08:40:37Z",
        "original_app_user_id":"a2d62bad-c199-4f1b-8312-c8141b3ce467",
        "last_seen":"2024-03-03T02:17:52Z",
		"Warning":"本脚本仅供学习交流使用，禁止转载售卖"
    }
}
$done({body:JSON.stringify(obj)});