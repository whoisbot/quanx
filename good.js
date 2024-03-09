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
// 正则表达式匹配 /subscribers/ 后面的任意字符串
var newUrl = url.replace(/(\/subscribers\/)[^\/]+/, '$1' + '874cbc43-49b4-4d3c-8b19-a2a63c539cd6');


var header = $request.headers;
header['X-RevenueCat-ETag'] = '';
header['X-Apple-Device-Identifier']='79E2BF7A-8ADA-4ED8-A74F-31AFD8745A63';
header['X-Nonce'] = 'wD5dzdJaDVss0evv';
$done({url: newUrl, headers: header});




