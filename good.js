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
^http[s]?:\/\/api\.goodnotes\.com\/accounts\/whoami url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/good.js



                


[mitm] 

hostname=api.goodnotes.com

***********************************/



















let obj = JSON.parse($response.body);


obj={
  "active" : true,
  "issued_at" : "2024-03-05T10:47:50.804713Z",
  "id" : "fcf8c797-6045-4d21-8c2d-272128d8abb0",
  "expires_at" : "2024-04-04T10:47:50.804713Z",
  "authenticator_assurance_level" : "aal1",
  "identity" : {
    "traits" : {
      "email" : "frpvnjk95k@privaterelay.appleid.com",
      "last_name" : "",
      "identity_provider" : "APPLE",
      "first_name" : "frpvnjk95k",
      "guid" : "81ebab1f-23e3-4e21-83a3-e6152a7ba3e2"
    },
    "schema_id" : "v1",
    "id" : "9d7e82a7-b09d-46af-8715-f6090b3a3516",
    "state_changed_at" : "2024-03-05T10:47:50.776223Z",
    "metadata_public" : {
      "is_email_fake" : false,
      "received_welcome_email" : 1709635671195,
      "country" : "CHN",
      "registration_client_os" : "IOS",
      "registration_client_platform" : "APPLE",
      "is_personal_data_anonymized" : true,
      "entitlements" : {
        "apple_access" : {
          "expires_at" : 1710134453000
        },
        "crossplatform_access" : {
          "expires_at" : 1710134453000
        }
      },
      "guid" : "81ebab1f-23e3-4e21-83a3-e6152a7ba3e2",
      "identity_provider" : "APPLE",
      "freemium_max_documents_gnc" : 3
    },
    "created_at" : "2024-03-05T10:47:50.779043Z",
    "updated_at" : "2024-03-05T10:47:50.779043Z",
    "schema_url" : "https://kratos.goodnotes.com/schemas/djE",
    "state" : "active"
  },
  "devices" : [
    {
      "ip_address" : "38.207.136.53",
      "id" : "df6803bc-ad09-4e97-8fb6-7960c5c0beb0",
      "user_agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Safari/605.1.15",
      "location" : ""
    }
  ],
  "authentication_methods" : [
    {
      "method" : "oidc",
      "aal" : "aal1",
      "completed_at" : "2024-03-05T10:47:50.804713616Z",
      "provider" : "apple"
    }
  ],
  "authenticated_at" : "2024-03-05T10:47:50.80547Z"
}


$done({body:JSON.stringify(obj)});