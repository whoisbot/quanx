/***********************************

> 应用名称：GoodNotes6
> 脚本作者：whoisbot
> 解锁说明：解锁高级会员权限
> 更新时间：2024-03-10
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️



[rewrite_local]
^https:\/\/isi\.csan\.goodnotes(app)?\.com(\.cn)?(\/v1)?\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://raw.githubusercontent.com/whoisbot/quanx/main/goodnotes6.js
^http[s]?:\/\/isi\.csan\.goodnotesapp\.com\.cn\/v1\/(receipts$|subscribers\/[^/]+$) url response-header 304 response-header 200

[mitm] 

hostname=isi.csan.goodnotes.com.cn, isi.csan.goodnotes.com,isi.csan.goodnotesapp.com.cn, isi.csan.goodnotesapp.com

***********************************/

var obj={
  "request_date_ms" : 1711009897801,
  "request_date" : "2024-03-21T08:31:37Z",
  "subscriber" : {
    "non_subscriptions" : {
      "com.goodnotes6.one_time_unlock" : [
        {
          "is_sandbox" : false,
          "ownership_type" : "PURCHASED",
          "id" : "0ba9419f06",
          "original_purchase_date" : "2024-02-28T02:37:50Z",
          "store_transaction_id" : "510001497588768",
          "purchase_date" : "2024-02-28T02:37:50Z",
          "store" : "app_store"
        }
      ]
    },
    "first_seen" : "2024-03-09T15:37:07Z",
    "original_application_version" : "2574200.404919701",
    "other_purchases" : {
      "com.goodnotes6.one_time_unlock" : {
        "purchase_date" : "2024-02-28T02:37:50Z"
      }
    },
    "management_url" : null,
    "entitlements" : {
      "apple_access" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-03-04T06:20:53Z",
        "product_identifier" : "com.goodnotes6.one_time_unlock",
        "expires_date" : null
      },
      "premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-02-28T02:37:50Z",
        "product_identifier" : "com.goodnotes6.one_time_unlock",
        "expires_date" : null
      },
      "crossplatform_access" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-03-04T06:20:53Z",
        "product_identifier" : "com.goodnotes6.one_time_unlock",
        "expires_date" : null
      }
    },
    "original_purchase_date" : "2024-03-04T08:25:14Z",
    "original_app_user_id" : "a1f942e8-2981-4af8-ad63-ec1ffd955bc2",
    "last_seen" : "2024-03-21T07:58:14Z"
  }
};
$done({body: JSON.stringify(obj)});