
var header = $request.headers;
header['X-RevenueCat-ETag'] = '';

$done({headers: header});




