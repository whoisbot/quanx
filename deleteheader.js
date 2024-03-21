var headers = $request.headers;
delete headers['X-RevenueCat-ETag']; // 假设我们要删除的是 User-Agent Header

$done({headers: headers});
