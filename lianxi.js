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



[rewrite_local]
  



^http[s]?:\/\/isi\.csan\.goodnotesapp\.com\.cn\/v1\/subscribers\/[^/]+$ url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/lianxi.js



[mitm] 

hostname=isi.csan.goodnotes.com.cn, isi.csan.goodnotes.com,api.goodnotes.com

***********************************/



















let obj = JSON.parse($response.body);
ibj.subscriber.non_subscriptions={
            "com.goodnotes.gn6_one_time_unlock_3749":[
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
        obj.subscriber.subscriptions={1},
        obj.subscriber.entitlements={
            "apple_access":{
                "grace_period_expires_date":null,
                "purchase_date":"2024-03-03T05:01:34Z",
                "product_identifier":"com.goodnotes.gn6_one_time_unlock_3749",
                "expires_date":null
            }
        },
        obj.subscriber.other_purchases={
            "com.goodnotes.gn6_one_time_unlock_3749":{
                "purchase_date":"2024-03-03T05:01:34Z"
            }
        } 
$done({body:JSON.stringify(obj)});