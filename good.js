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
  
# ～GoodNotes6☆解锁会员权限（2023-08-11）@ddgksf2013
^http[s]?:\/\/isi\.csan\.goodnotesapp\.com\.cn\/v1\/subscribers\/(^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$)\/offerings url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/good.js


        
                


[mitm] 

hostname=isi.csan.goodnotes.com

***********************************/



















let obj = JSON.parse($response.body);


obj={
  "offerings" : [
    {
      "metadata" : null,
      "description" : "Offerings to subscribe to GN6",
      "identifier" : "subscriptions",
      "packages" : [
        {
          "platform_product_identifier" : "com.goodnotes.premium_1yf_1y_999",
          "identifier" : "$rc_annual"
        },
        {
          "platform_product_identifier" : "com.goodnotes.gn6_one_time_unlock_2999",
          "identifier" : "$rc_lifetime"
        }
      ]
    },
    {
      "metadata" : null,
      "description" : "Users purchases gn5 after 20230701 will get 1y free",
      "identifier" : "gn5-20230701-1y-free",
      "packages" : [
        {
          "platform_product_identifier" : "com.goodnotes.premium_1yf_1y_999",
          "identifier" : "$rc_annual"
        },
        {
          "platform_product_identifier" : "com.goodnotes.gn6_one_time_unlock_2999",
          "identifier" : "$rc_lifetime"
        }
      ]
    },
    {
      "metadata" : null,
      "description" : "Users unlock GN5 in 2023 get 1st year 50% off",
      "identifier" : "gn5-2023-1y-50off",
      "packages" : [
        {
          "platform_product_identifier" : "com.goodnotes.premium_1y50off_1y_999",
          "identifier" : "$rc_annual"
        },
        {
          "platform_product_identifier" : "com.goodnotes.gn6_one_time_unlock_3499",
          "identifier" : "$rc_lifetime"
        }
      ]
    },
    {
      "metadata" : null,
      "description" : "Users who purchased Goodnotes5 get 25% off for the first year",
      "identifier" : "gn5-1y-25off",
      "packages" : [
        {
          "platform_product_identifier" : "com.goodnotes.premium_1y25off_1y_999",
          "identifier" : "$rc_annual"
        },
        {
          "platform_product_identifier" : "com.goodnotes.gn6_one_time_unlock_3749",
          "identifier" : "$rc_lifetime"
        }
      ]
    },
    {
      "metadata" : null,
      "description" : "Users unlock GN5 in 2023 get 1st year 50% off with trial",
      "identifier" : "gn5-2023-1y-50off-with-trial",
      "packages" : [
        {
          "platform_product_identifier" : "com.goodnotes.premium_7dt",
          "identifier" : "trial-7d"
        },
        {
          "platform_product_identifier" : "com.goodnotes.premium_1y50off_1y_999",
          "identifier" : "$rc_annual"
        },
        {
          "platform_product_identifier" : "com.goodnotes.gn6_one_time_unlock_3499",
          "identifier" : "$rc_lifetime"
        }
      ]
    },
    {
      "metadata" : null,
      "description" : "Users who purchased Goodnotes5 get 25% off for the first year with trial",
      "identifier" : "gn5-1y-25off-with-trial",
      "packages" : [
        {
          "platform_product_identifier" : "com.goodnotes.premium_7dt",
          "identifier" : "trial-7d"
        },
        {
          "platform_product_identifier" : "com.goodnotes.premium_1y25off_1y_999",
          "identifier" : "$rc_annual"
        },
        {
          "platform_product_identifier" : "com.goodnotes.gn6_one_time_unlock_3749",
          "identifier" : "$rc_lifetime"
        }
      ]
    }
  ],
  "current_offering_id" : "subscriptions"
}

$done({body:JSON.stringify(obj)});