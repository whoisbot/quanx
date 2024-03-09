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


var body=JSON.stringify({
  "request_date_ms" : 1691760087616,
  "request_date" : "2023-08-11T13:21:27Z",
  "subscriber" : {
    "last_seen" : "2023-08-11T13:18:22Z",
    "first_seen" : "2023-08-09T13:55:38Z",
    "original_application_version" : "1578030.383984727",
    "Warning" : "本脚本仅供学习交流使用，禁止转载售卖",
    "other_purchases" : {
      "com.goodnotes6.one_time_unlock" : {
        "purchase_date" : "2023-08-10T23:58:09Z"
      }
    },
    "management_url" : null,
    "subscriptions" : {

    },
    "entitlements" : {
      "apple_access" : {
        "expires_date" : null,
        "purchase_date" : "2023-08-10T14:16:41Z",
        "product_identifier" : "com.goodnotes6.one_time_unlock",
        "grace_period_expires_date" : null
      }
    },
    "original_purchase_date" : "2022-04-05T10:43:53Z",
    "original_app_user_id" : "1d6316b8-aab7-4c1f-9dee-df471814b03e",
    "non_subscriptions" : {
      "com.goodnotes6.one_time_unlock" : [
        {
          "is_sandbox" : false,
          "ownership_type" : "PURCHASED",
          "id" : "46ab585dbc",
          "original_purchase_date" : "2022-11-10T23:58:09Z",
          "store_transaction_id" : "300001271068792",
          "purchase_date" : "2023-08-10T23:58:09Z",
          "store" : "app_store"
        }
      ]
    }
  }
});



var headers = {
    'Connection': 'close',
    'Content-Encoding': 'gzip'
    // 'Content-Length'：在这里不设置，让服务器/客户端自动处理
    headers['Content-Length'] =Buffer.byteLength(body, 'utf8'); // 设置正确的长度
};

var response = {
    body: body,
    headers: headers
};





$done(response);