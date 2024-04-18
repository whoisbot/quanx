/***********************************



[rewrite_local]
^https?:\/\/buy\.vmall\.com\/queryRushbuyInfo\.json\?sbomCodes=.*?&portal=4&lang=zh-CN&country=CN$ url script-echo-response https://raw.githubusercontent.com/whoisbot/quanx/main/xiugai.js




[mitm] 

hostname=buy.vmall.com

***********************************/

var obj = JSON.parse($response.body);
var obj={
  "success" : true,
  "skuRushBuyInfoList" : [
    {
      "saleInventory" : null,
      "placeholderDesc" : null,
      "attendQualification" : 1,
      "bankReserveList" : null,
      "placeholder" : null,
      "isTarget" : null,
      "endTime" : 1713455999000,
      "activityType" : "1",
      "activityId" : 232517,
      "sbomCode" : "2601010486503",
      "skuStatus" : 1,
      "groupTagNameList" : null,
      "totalInventory" : null,
      "activityName" : null,
      "subscribeActivityCode" : null,
      "groupId" : null,
      "startTime" : 1713420366571,
      "price" : null,
      "isYY" : null,
      "limitNum" : 1
    },
    {
      "saleInventory" : null,
      "placeholderDesc" : null,
      "attendQualification" : 1,
      "bankReserveList" : null,
      "placeholder" : null,
      "isTarget" : null,
      "endTime" : 1713455999000,
      "activityType" : "1",
      "activityId" : 232517,
      "sbomCode" : "2601010486504",
      "skuStatus" : 1,
      "groupTagNameList" : null,
      "totalInventory" : null,
      "activityName" : null,
      "subscribeActivityCode" : null,
      "groupId" : null,
      "startTime" : 1713420366571,
      "price" : null,
      "isYY" : null,
      "limitNum" : 1
    },
    {
      "saleInventory" : null,
      "placeholderDesc" : null,
      "attendQualification" : 1,
      "bankReserveList" : null,
      "placeholder" : null,
      "isTarget" : null,
      "endTime" : 1713455999000,
      "activityType" : "1",
      "activityId" : 232517,
      "sbomCode" : "2601010486505",
      "skuStatus" : 1,
      "groupTagNameList" : null,
      "totalInventory" : null,
      "activityName" : null,
      "subscribeActivityCode" : null,
      "groupId" : null,
      "startTime" : 1713420366571,
      "price" : null,
      "isYY" : null,
      "limitNum" : 1
    },
    {
      "saleInventory" : null,
      "placeholderDesc" : null,
      "attendQualification" : 1,
      "bankReserveList" : null,
      "placeholder" : null,
      "isTarget" : null,
      "endTime" : 1713455999000,
      "activityType" : "1",
      "activityId" : 232517,
      "sbomCode" : "2601010486506",
      "skuStatus" : 1,
      "groupTagNameList" : null,
      "totalInventory" : null,
      "activityName" : null,
      "subscribeActivityCode" : null,
      "groupId" : null,
      "startTime" : 1713420366571,
      "price" : null,
      "isYY" : null,
      "limitNum" : 1
    },
    {
      "saleInventory" : null,
      "placeholderDesc" : null,
      "attendQualification" : 1,
      "bankReserveList" : null,
      "placeholder" : null,
      "isTarget" : null,
      "endTime" : 1713455999000,
      "activityType" : "1",
      "activityId" : 232517,
      "sbomCode" : "2601010486501",
      "skuStatus" : 1,
      "groupTagNameList" : null,
      "totalInventory" : null,
      "activityName" : null,
      "subscribeActivityCode" : null,
      "groupId" : null,
      "startTime" : 1713420366571,
      "price" : null,
      "isYY" : null,
      "limitNum" : 1
    },
    {
      "saleInventory" : null,
      "placeholderDesc" : null,
      "attendQualification" : 1,
      "bankReserveList" : null,
      "placeholder" : null,
      "isTarget" : null,
      "endTime" : 1713455999000,
      "activityType" : "1",
      "activityId" : 232517,
      "sbomCode" : "2601010486502",
      "skuStatus" : 1,
      "groupTagNameList" : null,
      "totalInventory" : null,
      "activityName" : null,
      "subscribeActivityCode" : null,
      "groupId" : null,
      "startTime" : 1713420366571,
      "price" : null,
      "isYY" : null,
      "limitNum" : 1
    }
  ],
  "currentTime" : 1713420366571
}

$done({body: JSON.stringify(obj)});