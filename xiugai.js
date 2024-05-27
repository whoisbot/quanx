/***********************************



[rewrite_local]
^https?:\/\/buy\.vmall\.com\/queryRushbuyInfo\.json\?sbomCodes=.*?&portal=4&lang=zh-CN&country=CN$ url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/xiugai.js





[mitm] 

hostname=buy.vmall.com

***********************************/

var data = JSON.parse($response.body);
// Quantumult X 脚本示例：修改 JSON 响应体中的 startTime


function rewriteTime(obj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'object') {
            rewriteTime(obj[prop]);
        } else if (prop === 'startTime') {
            // 设置新的 startTime 值，您可以根据需要修改这里的值
            obj[prop] = '1714649666254';
        }
    }
}

rewriteTime(data);



data = JSON.stringify(data);

// 设置修改后的响应体
$response.body = data;

// 最后调用 $done() 方法完成脚本执行
$done();
