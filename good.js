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
  




^https:\/\/isi\.csan\.goodnotes(app)?\.com(\.cn)?(\/v1)?\/(receipts$|subscribers\/[^/]+$) url script-request-header https://raw.githubusercontent.com/whoisbot/quanx/main/good.js



[mitm] 

hostname=isi.csan.goodnotes.com.cn, isi.csan.goodnotes.com,isi.csan.goodnotesapp.com.cn, isi.csan.goodnotesapp.com

***********************************/


var url = $request.url;
// 正则表达式匹配任意UUID格式的用户ID
var newUrl = url.replace(/\/subscribers\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/, '/subscribers/874cbc43-49b4-4d3c-8b19-a2a63c539cd6');


var header = $request.headers;
header['X-RevenueCat-ETag'] = '1f3f90538579b31a';
$done({url: newUrl, headers: header});




