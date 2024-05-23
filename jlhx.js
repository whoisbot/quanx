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
  body.data[0].endDate="2025-05-30";
  body.data[0].isValid=true;
  body.data[0].maxRide=999;
  body.data[0].name="9.9元999次卡";
  body.data[0].timeCount=120;
  body.data[0].updateTime=3155871162400;
  body.data[0].maxRide=999;
  } else if (url.indexOf('getByMachineNO.do') > -1) {
 
    body={"ret":1,"data":[{"batDt":"2024-05-23 08:33:18","batteryEI":-1,"batteryEU":38639,"lat":45.87389666666667,"latC":45.87585467,"lon":126.5356788888889,"lonC":126.541728093,"machineId":10151576,"machineNO":"019427458","machineType":0,"posDt":"2024-05-23 08:19:13","posType":0,"soc":80,"socPercent":80,"surplusMileage":36,"userCode":"10802008"},{"batDt":"2024-05-23 08:33:07","batteryEI":-1,"batteryEU":36477,"lat":45.87385555555556,"latC":45.875813568,"lon":126.53568055555556,"lonC":126.541729747,"machineId":10152207,"machineNO":"019428124","machineType":0,"posDt":"2024-05-23 08:33:06","posType":0,"soc":65,"socPercent":50,"surplusMileage":24,"userCode":"10802018"},{"batDt":"2024-05-23 08:33:28","batteryEI":-1,"batteryEU":39593,"lat":45.87385166666667,"latC":45.875809578,"lon":126.53572166666666,"lonC":126.541770708,"machineId":10153238,"machineNO":"019477715","machineType":0,"posDt":"2024-05-23 08:19:23","posType":0,"soc":90,"socPercent":90,"surplusMileage":40,"userCode":"10802100"},{"batDt":"2024-05-23 08:33:12","batteryEI":-1,"batteryEU":35599,"lat":45.87386277777778,"latC":45.875820767,"lon":126.53568888888888,"lonC":126.541738051,"machineId":10150230,"machineNO":"019477831","machineType":0,"posDt":"2024-05-23 08:27:09","posType":0,"soc":40,"socPercent":40,"surplusMileage":18,"userCode":"10802046"},{"batDt":"2024-05-23 08:32:52","batteryEI":-1,"batteryEU":39143,"lat":45.87386388888889,"latC":45.875821836,"lon":126.53570555555555,"lonC":126.541754657,"machineId":10152051,"machineNO":"019478094","machineType":0,"posDt":"2024-05-23 08:26:49","posType":0,"soc":85,"socPercent":80,"surplusMileage":36,"userCode":"10802140"}]}
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
 
  }
  
  return body;
}

body = modifyResponse(url, body);

$done({body: JSON.stringify(body)});




