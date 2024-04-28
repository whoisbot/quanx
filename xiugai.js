/***********************************



[rewrite_local]
^https?:\/\/buy\.vmall\.com\/queryRushbuyInfo\.json\?sbomCodes=.*?&portal=4&lang=zh-CN&country=CN$ url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/xiugai.js





[mitm] 

hostname=buy.vmall.com

***********************************/

var obj = JSON.parse($response.body);
// Quantumult X 脚本示例：修改 JSON 响应体中的 startTime

// 获取响应体
let body = $response.body;

// 将 string 类型的响应体转换为 JSON 对象
let obj = JSON.parse(body);

// 检查 obj 是否有 skuRushBuyInfoList 属性且它是一个数组
if (obj.skuRushBuyInfoList && Array.isArray(obj.skuRushBuyInfoList)) {
    // 遍历数组，修改每个对象中的 startTime 属性
    obj.skuRushBuyInfoList.forEach(function(item, index) {
        item.startTime = 1713420366571; // 替换为您想要的时间戳
    });
}

// 将修改后的 JSON 对象转换回 string 类型的响应体
body = JSON.stringify(obj);

// 设置修改后的响应体
$response.body = body;

// 最后调用 $done() 方法完成脚本执行
$done();
