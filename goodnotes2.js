




var header = $response.headers;

// 修改或添加所需的响应头
header['Content-Encoding'] = 'gzip';
header['Connection'] = 'close';

$done({headers: header});




