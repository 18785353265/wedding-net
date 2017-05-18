
	var lis=document.getElementsByClassName("li");
	var _li=0;
	setInterval(function(){
		for(var i=0;i<lis.length;i++){
			lis[i].style.opacity="0";
		}
		lis[_li].style.opacity="1";
		_li++;
		if(_li>3){
			_li=0;
		}
	},1000);
	var annius=document.getElementsByClassName("anniu");
	var _anniu=0;
	setInterval(function(){
		for(var i=0;i<annius.length;i++){
			annius[i].style.background="black";
		}
		annius[_anniu].style.background="red";
		_anniu++;
		if(_anniu>=4){
			_anniu=0;
		}
	},1000);