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
  



^http[s]?:\/\/isi\.csan\.goodnotes(app)?\.com\.cn\/v1\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/goodnotes2.js
^http[s]?:\/\/isi\.csan\.goodnotes\.com\/v1\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/goodnotes2.js

^http[s]?:\/\/isi\.csan\.goodnotes(app)?\.com\.cn\/v1\/receipts url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/goodnotes2.js

^http[s]?:\/\/isi\.csan\.goodnotes(app)?\.com\.cn\/v1\/subscribers\/identify url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/goodnotes2.js

[mitm] 

hostname=isi.csan.goodnotes.com.cn, isi.csan.goodnotes.com,isi.csan.goodnotesapp.com.cn, isi.csan.goodnotesapp.com

***********************************/






















var obj={"request_date":"2024-03-05T16:49:10Z","request_date_ms":1709657350543,"subscriber":{"entitlements":{"apple_access":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.goodnotes.gn6_one_time_unlock_3999","purchase_date":"2024-03-05T16:11:54Z"},"crossplatform_access":{"expires_date":"2024-03-11T05:20:53Z","grace_period_expires_date":null,"product_identifier":"com.goodnotes.premium_7dt_1y_999","purchase_date":"2024-03-04T06:20:53Z"}},"first_seen":"2024-03-05T16:16:53Z","last_seen":"2024-03-05T16:16:53Z","management_url":"https://apps.apple.com/account/subscriptions","non_subscriptions":{"com.goodnotes.gn6_one_time_unlock_3999":[{"id":"307b5541ce","is_sandbox":false,"original_purchase_date":"2024-03-05T16:11:54Z","ownership_type":"PURCHASED","purchase_date":"2024-03-05T16:11:54Z","store":"app_store","store_transaction_id":"510001504684271"}],"com.goodnotes.premium_7dt":[{"id":"127739a298","is_sandbox":false,"original_purchase_date":"2024-02-28T02:37:50Z","ownership_type":"PURCHASED","purchase_date":"2024-02-28T02:37:50Z","store":"app_store","store_transaction_id":"510001497588768"}]},"original_app_user_id":"f3458700-2971-4e24-9ab8-29c0cc9f5ec0","original_application_version":"2574200.404919701","original_purchase_date":"2024-03-04T08:25:14Z","other_purchases":{"com.goodnotes.gn6_one_time_unlock_3999":{"purchase_date":"2024-03-05T16:11:54Z"},"com.goodnotes.premium_7dt":{"purchase_date":"2024-02-28T02:37:50Z"}},"subscriptions":{"com.goodnotes.premium_7dt_1y_999":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2024-03-11T05:20:53Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2024-03-04T06:20:53Z","ownership_type":"PURCHASED","period_type":"trial","purchase_date":"2024-03-04T06:20:53Z","refunded_at":null,"store":"app_store","store_transaction_id":"510001503320168","unsubscribe_detected_at":"2024-03-05T16:16:57Z"}}}}


$done({body:JSON.stringify(obj)});