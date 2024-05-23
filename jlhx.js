/*

Quantumult X 脚本

[rewrite_local]

^http[s]?:\/\/jlclient\.uqbike\.cn\/rideCardUser\/queryPage\.do url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/jlhx.js

^http[s]?:\/\/jlclient\.uqbike\.cn\/machineStatus\/getByMachineNO\.do url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/jlhx.js

^http[s]?:\/\/jlclient\.uqbike\.cn\/accountFee\/getByAccountId\.do url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/jlhx.js

^http[s]?:\/\/jlclient\.uqbike\.cn\/machineStatus\/getDiscountByMachineNO\.do url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/jlhx.js

^http[s]?:\/\/jlclient\.uqbike\.cn\/user\/getByUserId\.do\?token=[^&]+&adAccountId=\d+$ url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/jlhx.js


[mitm]
hostname = jlclient.uqbike.cn,

*/

let body = JSON.parse($response.body);
var url = $request.url;

function modifyResponse(url, body) {
  if (url.indexOf('queryPage.do') > -1) {
  
    body = {"ret":1,"total":1,"data":[{"buyTime":"2024-05-23","currentNum":0,"endDate":"2025-05-30","feeName":"全车型","isValid":true,"maxRide":999,"name":"9.9元999次卡","rideCardId":100847,"ridecardType":0,"startDate":"2024-05-23","timeCount":12,"updateTime":3155871162400,"useCount":0,"userId":9136658,"userType":0}]}
  } else if (url.indexOf('getByMachineNO.do') > -1) {
 
    body.batteryEI=+1;
    body.times=2;
  }else if (url.indexOf('getByAccountId.do') > -1) {
   
        body={"ret":1,"data":{"accountId":700137,"accountName":"哈尔滨华德学院","areaMoney":2000,"baseMile":0,"baseMileFee":0,"baseTime":12,"baseTimeFee":170,"capMile":0,"capMileFee":0,"capTime":0,"capTimeFee":0,"dispatchSwitch":1,"freeRideTime":2,"freeTime":1,"helmetMoney":0,"helmetSwitch":0,"newUserFreeTime":0,"newUserFreeTimes":0,"newUserRechcrge":0,"overMile":0,"overMileFee":0,"overTime":10,"overTimeFee":170,"parkPointMoney":300,"rechargeBase":0}}
  }else if (url.indexOf('getDiscountByMachineNO.do') > -1) {
   
    body={"rideCard":{"accountId":700137,"buyTime":"2024-05-23","currentNum":0,"endDate":"2025-05-30","feeId":0,"feeName":"全车型","isValid":true,"maxRide":999,"name":"9.9元999次卡","rideCardId":100847,"ridecardType":0,"startDate":"2024-05-23","timeCount":12,"updateTime":3155871162400,"useCount":0,"userId":9136658,"userType":0},"ret":1}
  }else if (url.indexOf('getByUserId.do') > -1) {
   
    body={"ret":1,"data":{"accountId":40179,"birthDay":"**********","depositMoney":0.0,"depositState":0,"email":"","idNO":"","joinTime":"2024-05-06 07:00:26","money":0.0,"name":"","nameAuth":false,"openId":"1","phone":"133****4620","remark":"","rideCardDate":"2025-05-30","rideMoney":0.0,"ridingScore":999999,"sex":"","studentAuth":false,"updateTime":"2025-05-23 08:05:12","userId":9136658}}
  }
  
  return body;
}

body = modifyResponse(url, body);

$done({body: JSON.stringify(body)});




