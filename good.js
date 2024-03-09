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




var header = $request.headers;
header['X-RevenueCat-ETag'] = '';
$done({headers : header});




