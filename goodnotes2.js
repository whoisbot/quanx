// 假设脚本类型为 script-response-header，只修改响应头
var header = $response.headers;
header={
'Content-Encoding':'gzip',
'Connection':'close'
};

$done({headers: header});