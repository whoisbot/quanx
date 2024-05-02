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

// 递归函数，用于深度搜索所有的 startTime 并修改其值
function updateStartTime(o) {
    for (var key in o) {
        if (typeof o[key] == 'object' && o[key] !== null) {
            updateStartTime(o[key]);
        } else if (key == 'startTime') {
            o[key] = '1714649060000'; // 您想要的新 startTime 值
        }
    }
}

// 调用函数并传入 JSON 对象
updateStartTime(obj);


body = JSON.stringify(obj);

// 设置修改后的响应体
$response.body = body;

// 最后调用 $done() 方法完成脚本执行
$done();
