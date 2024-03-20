/*

Quantumult X 脚本
unlock Xmind
> 应用名称：Xmind
> 脚本作者：whoisbot
> 解锁说明：未解锁，还在研究
> 更新时间：2024-03-10
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️


[rewrite_local]
^http[s]?:\/\/www\.xmind\.cn\/\_res\/devices url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/Xmind.js
^http[s]?:\/\/www\.xmind\.cn\/_api\/appstore\/active url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/Xmind.js

^http[s]?:\/\/www\.xmind\.cn\/_res\/profile\/.*\/ url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/Xmind.js

^http[s]?:\/\/www\.xmind\.cn\/_res\/appstore\/sub url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/Xmind.js



[mitm]
hostname = www.xmind.cn,www.xmind.app,www.xmind.net
*/



let body = JSON.parse($response.body);

  if (body.license) {
    body.license.status = 'sub'; // 将license状态修改为你想要的新值
    body.license.expireTime = '3990928235000';
  }

  if ('status' in body) {
    body.status = 'sub'; // 将状态修改为你想要的新值
    body.expireTime = '3990928235000';
  }
  
    if (typeof body.sub==='object') { 
    body.sub={
    "bundle" : {
      "status" : "sub",
      "autorenewable" : 1,
      "appstore" : 1,
      "bind_version" : "bundle",
      "expireTime" : "3990928235000",
      "edu" : 1,
      "autorenew_month" : 12
    };
    
  }
  body.email_status=1,
  //body.maillist_name='yearly-cn@maillist.sendcloud.org'
  }
  
  

$done({ body: JSON.stringify(body) });
