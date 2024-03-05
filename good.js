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
^http[s]?:\/\/api\.goodnotes\.com\.cn\/private\/v1\/acceptTcs\/status url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/good.js

^http[s]?:\/\/api\.goodnotes\.com\/private\/v1\/acceptTcs\/status url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/good.js

                


[mitm] 

hostname=api.goodnotes.com.cn, api.goodnotes.com

***********************************/



















let obj = JSON.parse($response.body);


obj={
  "status" : "TCS_STATUS_NOT_ACCEPTED_REVIEW_REQUIRED",
  "accepted_tos" : null,
  "latestTcsUpdateTimestamp" : 1691564400000
}



$done({body:JSON.stringify(obj)});