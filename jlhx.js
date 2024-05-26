/*

Quantumult X 脚本

[rewrite_local]

^http[s]?:\/\/jlclient\.uqbike\.cn\/rideCardUser\/queryPage\.do url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/jlhx.js

^http[s]?:\/\/jlclient\.uqbike\.cn\/machineStatus\/getByMachineNO\.do url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/jlhx.js

^http[s]?:\/\/jlclient\.uqbike\.cn\/accountFee\/getByAccountId\.do url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/jlhx.js

^http[s]?:\/\/jlclient\.uqbike\.cn\/machineStatus\/getDiscountByMachineNO\.do url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/jlhx.js

^http[s]?:\/\/jlclient\.uqbike\.cn\/user\/getByUserId\.do\?token=[^&]+&adAccountId=\d+$ url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/jlhx.js

^http[s]?:\/\/jlclient\.uqbike\.cn\/machineStatus\/getByUserCode\.do url script-response-body https://raw.githubusercontent.com/whoisbot/quanx/main/jlhx.js

[mitm]
hostname = jlclient.uqbike.cn,


*/

let body = JSON.parse($response.body);
var url = $request.url;

function modifyResponse(url, body) {
  if (url.indexOf('queryPage.do') > -1) {
  body.data[0].endDate="2025-05-30";
  body.data[0].currentNum=1;
  body.data[0].useCount=1;
  body.data[0].isValid=true;
  body.data[0].maxRide=999;
  body.data[0].name="9.9元999次卡";
  body.data[0].timeCount=120;
  body.data[0].updateTime=3155871162400;
  body.data[0].maxRide=999;
  } else if (url.indexOf('getByMachineNO.do') > -1) {
 
    body.data.batteryEI=+1;
    body.data.times=3;
  }else if (url.indexOf('getByAccountId.do') > -1) {
   
    body.data.baseTime=120;
    body.data.freeRideTime=120;
    body.data.parkPointMoney=0;
    
  }else if (url.indexOf('getDiscountByMachineNO.do') > -1) {
   
   body.rideCard.endDate="2025-05-30";
   body.rideCard.isValid=true;
   body.rideCard.maxRide=999;
   body.rideCard.name="9.9元999次卡";
   body.rideCard.timeCount=120;
   body.rideCard.updateTime=3155871162400;

  }else if (url.indexOf('getByUserId.do') > -1) {
   
    body.data.ridingScore=99999;
    body.data.rideCardDate="2025-05-30";
 
  }else if (url.indexOf('getByUserCode.do') > -1) {
   
    body.data.batteryEI=+1;
    body.data.inside=1;

 
  }
  
  return body;
}

body = modifyResponse(url, body);

$done({body: JSON.stringify(body)});