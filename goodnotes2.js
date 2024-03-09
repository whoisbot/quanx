// 假设脚本类型为 script-response-header，只修改响应头
var newHeader = $response.headers;
newHeader['Content-Encoding'] = 'gzip';
newHeader['Connection'] = 'close';
newHeader['Content-Length'] = '557'; // 假设响应体的长度是557字节

// 创建新的响应对象
var newResponse = {
    status: $response.status, // 保留原始状态码和状态信息
    headers: newHeader, // 使用新的头部
};

$done(newResponse);