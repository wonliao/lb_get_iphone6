//取得目前tab的機器人資訊
chrome.runtime.sendMessage(
  {'type' : 'getRobot'}
, function(robot) {
    switch (robot.status) {
    //機器人尚未設置
    case 'unprepared' :
	
	  var tickets = [];
	  var data  = {}
          , period
          ;
	  data.name = "test";
	  data.start = Date.parse('t');
	  data.end = Date.parse('t');
	  
	  tickets.push(data);

      //插入/更新票種資訊
      chrome.runtime.sendMessage(
        {'type'    : 'ticketInfo'
        ,'title'   : $('div.header-title').text().replace(/^\s+|\s+$/gm,'')
        ,'tickets' : tickets
        }
      );
	  
      break;


    //機器人行動中
    case 'processing' :
	
	
		var value = $('#lbForfield').text();		
		console.log("value("+value+")");

		$('#ImgGetNumber').click();


		location.reload(); 

		 //固定時間刷新頁面
        //setTimeout(function() { location.reload(); }, robot.wait * 1000);
		
      break;
	  
	 case 'waitCallback':
	 
	 break;
    }
  }
);