// 假设脚本类型为 script-response-header，只修改响应头
var header = $response.headers;
header={
'Content-Encoding':'gzip',
'Connection':'close',
'Content-Length':'557' // 假设响应体的长度是557字节
};

$done({headers: header});