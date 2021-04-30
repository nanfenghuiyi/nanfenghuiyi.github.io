var isIOS = false;

JavascriptBridge.registerHandler("sendImage", function(data, responseCallback) {
	ChangeHeadPortraitCallback(JSON.parse(ResponseData).result);
});

JavascriptBridge.registerHandler("process", function(data, responseCallback) {
	flowInfoCallback(data);
});

JavascriptBridge.registerHandler("peopleInfo", function(data, responseCallback) {
	onPeopleCallback(JSON.parse(data));
});

JavascriptBridge.registerHandler("type", function(data, responseCallback) {
	myApprove.titleInfo(data);
});

JavascriptBridge.registerHandler("notification", function(data, responseCallback) {
	notification(1);
});

JavascriptBridge.registerHandler("userName", function(data, responseCallback) {
	console.log(data);
});

JavascriptBridge.registerHandler("examineData", function(data, responseCallback) {
	myApprove.carsInfo.Result2 = JSON.parse(data);

});

JavascriptBridge.registerHandler("freshenApplicationRecord", function(data, responseCallback) {
	getDataList();
});
JavascriptBridge.registerHandler("beforBranch",function(data,responseCallback){
                                                    backForBranchData(JSON.parse(data));
                                                    });
JavascriptBridge.registerHandler("backForPhontData",function(data,responseCallback){
    if(data.length <= 2){
        backForPhontData([]);
    }else{
        backForPhontData(JSON.parse(data));
    }
});

/*function getPeople(data,callback) {
	window.WebViewJavascriptBridge.callHandler("people", data, function(responseData) { //参会人
		callback(JSON.parse(responseData));
	});
}*/
var onPeopleCallback = null;

//示例结束
//window.WebViewJavascriptBridge.callHandler('messageState', "", function(data) {
//	notification(data);
//});
/*
 *-------------------------------------------------移动审批主页
 */
function sendMessage(data) {
	window.WebViewJavascriptBridge.callHandler(data, "", function(responseData) { //返回
	});

}

function examineDetails(data) {
	window.WebViewJavascriptBridge.callHandler("apply", data, function(responseData) { 
		getDataList();
	});

}

function initMessage() {
	window.WebViewJavascriptBridge.callHandler('messageState', "", function(data) {
		notification(data);
	});
}
/*
 *-------------------------------------------------审批列表
 */
var myApprove = {
	
	carsCallback:function(data){
		myApprove.carsInfo.Result3 = data;
		myApprove.examineCallback(myApprove.carsInfo);
		
	},
	examineCallback: null,
	examine: function(data, callback) {
		myApprove.examineCallback = callback;
		ComFun.getDataBefore2();
		window.WebViewJavascriptBridge.callHandler('infos', data, function(response) {
			ComFun.getDataAfter2();
			checkResult(response,myApprove.carsCallback);
		});
	},
	examineParticulars: function(data) {
		window.WebViewJavascriptBridge.callHandler('examineParticulars', data, function(responseData) {
			//审批详情
		});
	},
	titleInfo: function(type) {
		var title;
		switch(type) {
			case "1":
				title = "我申请的";

				break;
			case "3":
				title = "我审批的";
				$('.right').css("background", "none");
				break;
			case "5":
				title = "通知我的";
				$('.right').css("background", "none");
				break;
		}

		$('.bar-title').html(title);
		myApprove.typeBack(type);
	},
	typeBack: null,
	carsInfo: {
		"Action": "GETUSECARLIST_PAGE",
		"ErrorMsg": "",
		"DataLength": 0,
		"ResultType": "",
		"Result": "",
		"Result1": {
			"ResCode": 1,
			"ResMsg": ""
		},
		"Result2": [],
		"Result3": {},
		"Result4": "1"
	}
}
/*
 *-------------------------------------------------会议室申请
 */
var meetingRoom = {
	getRooms: function(callback) {
		ComFun.getDataBefore();
		window.WebViewJavascriptBridge.callHandler('rooms', "", function(responseData) {
			ComFun.getDataAfter();
			checkResult(responseData,callback);
		});

	}

}
/*
 *-------------------------------------------------用车申请
 */

//网络申请——获取车辆列表
function getCarList(callback) {
	ComFun.getDataBefore();
	window.WebViewJavascriptBridge.callHandler('carlist', "", function(responseData) {
		ComFun.getDataAfter();
		checkResult(responseData,callback);
	});

}
var flowInfoCallback;

function flowPlan(callback) {

	flowInfoCallback = callback;
}

/*
 *-------------------------------------------------个人中心
 */

function getInfo(callback) { //个人信息
	ComFun.getDataBefore();
	window.WebViewJavascriptBridge.callHandler('userInfo', "", function(response) {
		ComFun.getDataAfter();
		var data = JSON.parse(response);
		if(data.code == 1){
			var result = JSON.parse(data.result);
			data.result = result;
		}
		checkResult(JSON.stringify(data),callback);
	});

}

function openSetting() {
	window.WebViewJavascriptBridge.callHandler('openset', "", function(response) {
		//页面跳转
	});
}

/*****************************************个人设置*******************/
var setTing = {

	logOutBtn: function() {
		window.WebViewJavascriptBridge.callHandler('logOutBtn', "", function(responseData) {
			//退出登录
		});
	},
	cache: function(callback) {
		window.WebViewJavascriptBridge.callHandler('getCache', "", function(responseData) {
			//缓存
			callback(responseData);
		});
	},
	clearCache: function(callback) {
		window.WebViewJavascriptBridge.callHandler('clearCache', "", function(responseData) {
			//清除缓存
			callback(responseData);
		});
	},
	regard: function() {
		window.WebViewJavascriptBridge.callHandler('regard', "", function(responseData) {
			//关于我们
			callback(responseData);
		});
	},
	detection: function() {
		
		ComFun.getDataBefore();
		window.WebViewJavascriptBridge.callHandler('detection', "", function(responseData) {
			ComFun.getDataAfter();
			//检测新版本
			callback(responseData);
		});
	}
};

var useSeal = {
	//
	//              --------------用印----------------
	//

	//网络请求——获取章印类别
	getSealInfoCallback: function(callback) {
		ComFun.getDataBefore();
		window.WebViewJavascriptBridge.callHandler('SealList', "", function(responseData) {
			ComFun.getDataAfter();
			checkResult(responseData,callback);
		});
	},
	getFileInfoCallback: function(callback) {
		ComFun.getDataBefore();
		window.WebViewJavascriptBridge.callHandler('fileList', "", function(responseData) {
			ComFun.getDataAfter();
			checkResult(responseData,callback);
		});
	},
	getPeople: function() {
		window.WebViewJavascriptBridge.callHandler('getPeople', "", function(responseData) {

		});
	}

};

/*
 *-------------------------------------------------请假申请
 */
function leaveType(callback){
	ComFun.getDataBefore();
	window.WebViewJavascriptBridge.callHandler('leaveType', "", function(responseData) {
		ComFun.getDataAfter();
		checkResult(responseData,callback);
	});
}


/*
*   申请报销
*/
function AddMatter(data,callback){
	// alert(JSON.stringify(data));
    window.WebViewJavascriptBridge.callHandler('AddMatter',data,function(response){
										//选择附件
										
                                        callback(response);
                                        });
}

function AddPhoto(callback){
    window.WebViewJavascriptBridge.callHandler('AddPhoto',"",function(response){
                                        //调用系统相册
                                        checkResult(response,callback);
                                        });
}

function getFilesData(callback){
    window.WebViewJavascriptBridge.callHandler('getFilesData',"",function(response){
                                        //files文件取值
                                        callback(JSON.parse(response));
                                        });
}

function backTosuperior(data){
    window.WebViewJavascriptBridge.callHandler('backTosuperior',data,function(response){
                                        //f将数组传给上个页面
                                      });
    }
function Photograph(callback){
    window.WebViewJavascriptBridge.callHandler('photograph',"",function(response){
                                        //拍照
                                        checkResult(response,callback);
                                        });
}
var backForPhontData;
//选择人员的回调
function onBackForPhontDataback(callback){
    backForPhontData = callback;
}
var backForBranchData;//部门
function onBackForBranchDataback(callback){
        backForBranchData = callback;
}
var overTime = {
	//结算方式
	getPaymentType: function(callback) {
		ComFun.getDataBefore();
		window.WebViewJavascriptBridge.callHandler('payType', "", function(responseData) {

			ComFun.getDataAfter();
			checkResult(responseData,callback);
		});
	},

	dayType: [{
			name: "是",
			Value: 0
		},
		{
			name: "否",
			Value: 1
		}
	]

};

var purchase = {
	articlesForUse:function(callback){
		ComFun.getDataBefore();
		window.WebViewJavascriptBridge.callHandler('articlesForUse', "", function(responseData) {

			ComFun.getDataAfter();
			checkResult(responseData,callback);
		});
	}
}

var useOffice = {
	UseProduct:function(callback){
		ComFun.getDataBefore();
		window.WebViewJavascriptBridge.callHandler('UseProduct', "", function(responseData) {

			ComFun.getDataAfter();
			checkResult(responseData,callback);
		});
	}
}
var jobTransfer = {

    getDeptData:function(callback){
        callback(jobTransfer.deptData);
    },
    //选择部门
    pushBranch:function(data){
        typeBranch = data;
        window.WebViewJavascriptBridge.callHandler('pushBranch',data,function(responseData){
                                            });
    }
};
var paying = {
	payType: [{
			TypeName: "支票",
			ID: 1
		},
		{
			TypeName: "贷记",
			ID: 2
		},
		{
			TypeName: "电汇",
			ID: 3
		},
		{
			TypeName: "汇票",
			ID: 4
		},
		{
			TypeName: "现金",
			ID: 5
		},
		{
			TypeName: "银行卡",
			ID: 6
		},
		{
			TypeName: "其它",
			ID: 7
		}
	],
	getTypeData: function(callback) {
		ComFun.getDataBefore();
		window.WebViewJavascriptBridge.callHandler('getTypeData', "", function(responseData) {

			ComFun.getDataAfter();
			checkResult(responseData,callback);
		});
	}
}

var dimission = {
	dimissionTypedata: [{
			TypeName: "辞职",
			ID: 1
		},
		{
			TypeName: "辞退",
			ID: 2
		},
		{
			TypeName: "自离",
			ID: 3
		},
		{
			TypeName: "开除",
			ID: 4
		},
		{
			TypeName: "其它",
			ID: 5
		}

	],
	dimissionType: function(callback) {
		ComFun.getDataBefore();
		window.WebViewJavascriptBridge.callHandler('dimissionType', "", function(responseData) {
			ComFun.getDataAfter();
			checkResult(responseData,callback);
		});
	}
}
var borrow = {
	userInfo: function(callback) {
		ComFun.getDataBefore();
		window.WebViewJavascriptBridge.callHandler('userInfo', "", function(responseData) {
			ComFun.getDataAfter();
			var data = JSON.parse(responseData);
			var resultInfo = JSON.parse(data.result);
			data.result = resultInfo;
			checkResult(JSON.stringify(data),callback);
		});
	},
	borrowType: function(callback) {
		ComFun.getDataBefore();
		window.WebViewJavascriptBridge.callHandler('borrowType', "", function(responseData) {
			ComFun.getDataAfter();
			checkResult(responseData,callback);
			
		});
	}
}

var reimbursement = {
	reimbursementType: function(callback) {
		ComFun.getDataBefore();
		window.WebViewJavascriptBridge.callHandler('reimbursementType', "", function(responseData) {
			ComFun.getDataAfter();
			checkResult(responseData,callback);
		});
	}
}
var ChangeHeadPortraitCallback;
var ResponseData;
function ChangeHeadPortrait(data,callback){
    ChangeHeadPortraitCallback = callback;
    WebViewJavascriptBridge.callHandler('ChangeHeadPortrait',data,function(responseData){
                                        //更换头像
                                        ResponseData = responseData;
                                        checkResult(responseData,successCallback);
                                        })

}
function successCallback(result){
//  alert(result[0].FileUrl);
    window.WebViewJavascriptBridge.callHandler('success', result[0].FileUrl, function(responseData){
        checkResult(responseData,function successUrlCallback(){
                                 	window.WebViewJavascriptBridge.callHandler('success2', "", null);
                                 });
    });
}
function help(){
    WebViewJavascriptBridge.callHandler('help',"", function(response) {
                                        //跳转帮助文档
                                        });
}
function OpenCloud(callback){
    WebViewJavascriptBridge.callHandler('OpenCloud',"",function(response){
                                        //调用云盘
                                        callback(JSON.parse(response));
                                        });
}