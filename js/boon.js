window.onload=function(){
	
	var rNum=Math.floor(Math.random()*100+1);
		
	
	for(var i=0; i<7; i++){
		
		if(i==6){
			
			alert("游戏结束，中奖号码是："+rNum);
		}
		else{
			
			var iNum=prompt("请输入一个1-100的整数");
			var nNum=parseInt(iNum);
			
			try{
				if(nNum==iNum){
					
					
					if(nNum>100||nNum<1){
						alert("请输入1-100的整数")
					}
					else{
						
						if(nNum>rNum){
							alert("你输入的数太大啦！");
						}
						else if(nNum<rNum){
							alert("你输入的数太小啦！")
						}
						else{
							alert("恭喜你答对啦！答案是："+rNum);
						}
					}
				}
				else{
					
					alert("你输入的不是一个整字");
				}
			}
			catch(e){
				
				alert("你输入的不是一个数字");
			}
			
		}
	}
}
