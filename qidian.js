# 重写规则配置片段包含若干条重写规则，并可以包含若干作用于 MitM 的主机名；可通过资源引用的方式使用。
# 片段文件将保存在 Quantumult X 目录下的 Profiles 子目录中。
# 样例可参见 https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-import-rewrite.snippet
 
 
 
;^http://example.com/resource1/4/ url reject-dict

/*项目名称：起点读书 解锁会员专享 
使用说明：仅测试QuanX
特别说明：付费未解锁 可以用mcdasheng的task签到 广告任务
mcdasheng：https://raw.githubusercontent.com/MCdasheng/QuantumultX/main/Scripts/myScripts/qidian/qidian.js
更新时间：2023-10-30
免责说明：仅自己测试 请勿传播 禁止售卖 */


[rewrite_local]

^http[s]?:\/\/magev6\.if\.qidian\.com\/argus\/api\/v1\/bookshelf\/refresh url reject-200
#会员
^https:\/\/magev6\.if\.qidian\.com url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/qidiantk.js
#重组个人界面
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v3\/user\/getaccountpage url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/qidianbd.js
#测评去除
^http[s]?:\/\/magev6\.if\.qidian\.com\/argus\/api\/v1\/adv\/getadvlistbatch\?positions url reject-200

[mitm]

hostname = magev6.if.qidian.com