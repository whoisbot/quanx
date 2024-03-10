/*

Quantumult X 脚本
unlock Xmind
> 应用名称：Xmind
> 脚本作者：whoisbot
> 解锁说明：解锁高级会员权限
> 更新时间：2024-03-10
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️


[rewrite_local]
^http[s]?:\/\/www\.xmind\.cn\/\_res\/devices url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/XMind.js

[mitm]
hostname = www.xmind.cn
*/

var obj = JSON.parse($response.body);

obj = {
   "raw_data": "DBcBHgojrvPgruIJMfb4KK/76CmjxSHSp9KipRwOnQUuf+Gt2FncFUzNvxZydUeXEzDZt/XWEm91lHFYrvT0f2AFap2L4psLI/34sKU9VLGH7kFsBYlexU/nifBtosMJqQxL4TU1pjvjl+1uyWsFAeGR42aEnVhQWgvJB5Ovcd0=",
   "license": {
     "status": "sub",
     "expireTime": 3990928235000
   },
   "_code": 200
 };

$done({body: JSON.stringify(obj)});