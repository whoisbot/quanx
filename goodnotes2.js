




var modifiedHeaders = $response.headers;

// 修改或添加所需的响应头
modifiedHeaders['Content-Encoding'] = 'gzip';
modifiedHeaders['Connection'] = 'close';


// 创建新的响应对象，不包含对响应体的引用
var newResponse = {
    status: $response.status, // 保留原始的状态行
    headers: modifiedHeaders // 使用修改后的响应头
    // body 属性被省略，响应体不会被修改
};

$done(newResponse);
$done({headers: header});




