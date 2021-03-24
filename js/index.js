window.onload=function(){ 
	if(localStorage.getItem("firsttime")!="false"||localStorage.getItem("firsttime")=="undefined"){
			layer.alert('Hi,欢迎光临我的个人空间!', {
			  icon: 1,
			  skin: 'layer-ext-moon',
			  title:'Dreamfly 个人空间',
			  shadeClose: true,
			})
			localStorage.setItem("firsttime","false");
	}
    update();
} 
		var loopsong=2;
		var allloop=0;
		var random=false;
		var state=Boolean();
		var progress=document.getElementById("progress");
		var audio=document.getElementById("v1");
		var btn=document.getElementById("btn");
		function play(){
			if(audio.paused){  //01
				audio.play();
				btn.src="pause.png";
			}else{
				audio.pause();
				btn.src="play.png";
			}
			var aa=decodeURI(audio.src).replace(/\s+/g,"");;
	            var index=aa.lastIndexOf("\/");  
				aa=aa.substring(index+1, aa.length).replace(/.m4a/,"");
			if (aa==getsong(0)) {
				document.getElementById("li1").style.color="gray";
				document.getElementById("li1").style.background="#f2f2f2";
                document.getElementById("li1").style.opacity="0.9";
                document.getElementById("cover").src=""+getsong(0)+".jpg";
			}
		}
		
		function update(){
			
			var duration1=document.getElementById("zong");
			duration1.innerHTML=formatSeconds(audio.currentTime)+"/"+formatSeconds(audio.duration);
			progress.max=audio.duration;
			progress.value=audio.currentTime;
			var left=(progress.value/audio.duration)*100;
			document.getElementById("progress").style.background="-webkit-linear-gradient(left, #03d1f8,#FFFFFF) no-repeat #FFFFFF";
			document.getElementById("progress").style.backgroundSize=left+"% 100%";
			var allLi = document.getElementById("playlist").getElementsByTagName("li");
			var aaa=decodeURI(audio.src).replace(/\s+/g,"");
	            var index=aaa.lastIndexOf("\/");  
				aaa=aaa.substring(index+1, aaa.length).replace(/.m4a/,"");

			if (aaa==getsong(0)) {
				document.getElementById("li1").style.color="gray";
				document.getElementById("li1").style.background="#f2f2f2";
                document.getElementById("li1").style.opacity="0.9";
                document.getElementById("cover").src=""+getsong(0)+".jpg";
                document.body.style.background="radial-gradient(#d9c4da 20%, #d9c4dc 30%, #d9c0df 50%)";
			}else if(aaa==getsong(1)){
				  document.body.style.background="radial-gradient(#cac2cb 20%, #cac2eb 30%, #cac2fb 50%)";
			}else if(aaa==getsong(2)){
				document.body.style.background="radial-gradient(#212340 20%, #212332 30%, #212322 50%)";
			}else if (aaa==getsong(3)) {
				document.body.style.background="radial-gradient(#99a5a3 20%, #99a5a1 30%, #99a5a5 50%)";
			}else if(aaa==getsong(4)){
				document.body.style.background="radial-gradient(#d2d2db 20%, #d2d2dd 30%, #d2d2da 50%)";
			}else if(aaa==getsong(5)){
				document.body.style.background="radial-gradient(#384540 20%, #384545 30%, #384555 50%)";
			}else if(aaa==getsong(6)){
				document.body.style.background="radial-gradient(#8a8a7f 20%, #8a8a8a 30%, #8a8a8f 50%)";
			}else{
				document.body.style.background="radial-gradient(#82a28c 20%, #82a28f 30%, #82a28a 50%)";
			}
			if(audio.currentTime==audio.duration){
				if(allloop==1&&aaa==getsong(allLi.length-1)){
            		audio.src=""+getsong(0)+".m4a";
                    audio.play();
                    btn.src="pause.png";
                    allLi[allLi.length-1].style.background = "";
                    allLi[allLi.length-1].style.color="white";
				}else if(random==true){
					var num=Math.floor((Math.random()*allLi.length));
					var song=getsong(num);
					audio.src=""+song+".m4a";
                    audio.play();
                    document.getElementById("cover").src=""+song+".jpg";
                    btn.src="pause.png";
                    for(var i=0,len=allLi.length;i<len-1;i++){
                    	if(i==num){
                    		allLi[i].style.background="#f2f2f2";
                    		allLi[i].style.color="gray";
                    		allLi[i].style.opacity="0.9";
                    		continue;
                    	}
	                    allLi[i].style.background = "";
	                    allLi[i].style.color="white";
                    }
				}else{
						for(var i=0,len=allLi.length;i<len-1;i++){
							var songid=allLi[i].innerHTML.split(".");
				            var song=songid[1].replace(/\s+/g,"");
				            var aa=decodeURI(audio.src).replace(/\s+/g,"");
				            var index=aa.lastIndexOf("\/");  
							aa=aa.substring(index+1, aa.length).replace(/.m4a/,"");
							var bb=song.replace(/(^\s*)/g, "");
							if(aa==bb){
								var songid1=allLi[i+1].innerHTML.split(".");
				            	var song1=songid1[1].replace(/\s+/g,"");
			                    audio.src=""+song1+".m4a";
			                    audio.play();
			                    btn.src="pause.png";
			                    allLi[i+1].style.background="#f2f2f2";
			                    allLi[i+1].style.color="gray";
			                    allLi[i+1].style.opacity="0.9";  
			                    allLi[i].style.background = "";
			                    allLi[i].style.color="white";
			                    document.getElementById("cover").src=""+song1+".jpg";
			                    break;       
				           }else{
								var songid1=allLi[i].innerHTML.split(".");
				            	var song1=songid1[1];
				                bb=song1+".m4a";
				           }
			        	}
			        	if (aaa==getsong(allLi.length-1)) {
   								progress.value=0;
   								document.getElementById("progress").style.backgroundSize=left+"% 0%";
   								duration1.innerHTML="00:00:00/00:00:00";
   								btn.src="play.png";
   						}else{
   								document.getElementById("progress").style.backgroundSize=left+"% 100%";
   						}
			    }
   		}
	}
		function changeplay(){
			var duration1=document.getElementById("zong");
			duration1.innerHTML=formatSeconds(progress.value)+"/"+formatSeconds(audio.duration);
			audio.currentTime = progress.value;
			audio.play();
			btn.src="pause.png";
		}
		function go(){
			var time=parseInt(progress.value)+5;
		 	audio.currentTime = time;
			audio.play();
			btn.src="pause.png";
		}
		function back(){
			var time=parseInt(progress.value)-5;
		 	audio.currentTime = time;
			audio.play();
			btn.src="pause.png";
		}
		function reset(){
			var time=0;
		 	audio.currentTime = time;
			audio.play();
			btn.src="pause.png";
		}
		function audioadd(){
			var voice=document.getElementById("progress1");
			audio.volume=(voice.value)/100;
		}
		function audiostop(){
			if(audio.muted==false){  //01
				audio.muted = true;
				document.getElementById("jingyin").src="stopsound.png";

			}else{
				audio.muted = false;
				document.getElementById("jingyin").src="sound.png";
			}
		}
		function formatSeconds(a) {   
			  var hh = parseInt(a/3600);  
			  if(hh<10) hh = "0" + hh;  
			  var mm = parseInt((a-hh*3600)/60);  
			  if(mm<10) mm = "0" + mm;  
			  var ss = parseInt((a-hh*3600)%60);  
			  if(ss<10) ss = "0" + ss;  
			  var length = hh + ":" + mm + ":" + ss;  
			  if(a>0){  
			    return length;  
			  }else{  
			    return "00:00:00";  
			  }  
		} 
		function loop(){
			var allLi = document.getElementById("playlist").getElementsByTagName("li");
			if(loopsong%4==0){
				audio.loop=false;
				document.getElementById("loop").src="random.png";
                if (loopsong<4) {
					loopsong+=1;
				}else{
					loopsong=1;
				}
				allloop=0;
				random=true;
			}else if (loopsong%2==0) {
				audio.loop=true;
				document.getElementById("loop").src="loop.png";
				if (loopsong<4) {
					loopsong+=1;
				}else{
					loopsong=1;
				}
				allloop=0;
				random=false;
			}else if(loopsong%3==0){
				audio.loop=false;
				document.getElementById("loop").src="loopall.png";
				if (loopsong<4) {
					loopsong+=1;
				}else{
					loopsong=1;
				}
				allloop=1;
				random=false;
			}else{
				audio.loop=false;
				document.getElementById("loop").src="defalut.png";
				if (loopsong<4) {
					loopsong+=1;
				}else{
					loopsong=1;
				}
				allloop=0;
				random=false;
			}
		} 
		function getsong(songid){
				var allLi = document.getElementById("playlist").getElementsByTagName("li");
				var songarr=allLi[songid].innerHTML.split(".");
				var song=songarr[1].replace(/(^\s*)/g, "").replace(/\s+/g,"");
				return song;
		}
		function before(){
			var allLi = document.getElementById("playlist").getElementsByTagName("li");
			var aa=decodeURI(audio.src).replace(/\s+/g,"");
	        var index=aa.lastIndexOf("\/");  
			aa=aa.substring(index+1, aa.length).replace(/.m4a/,"");
			if(aa==getsong(0)){
					audio.src=""+getsong(allLi.length-1)+".m4a";
                    audio.play();
                    btn.src="pause.png";
                    allLi[0].style.background = "";
                    allLi[0].style.color="white";
                    allLi[allLi.length-1].style.background="#f2f2f2";
	                allLi[allLi.length-1].style.color="gray";
	                allLi[allLi.length-1].style.opacity="0.9";  
	                document.getElementById("cover").src=""+getsong(allLi.length-1)+".jpg";

			}else{
				for(var i=1,len=allLi.length;i<len&&i>0;i++){
					var bb=getsong(i).replace(/(^\s*)/g, "");
					if(aa==bb){
		            	var song1=getsong(i-1);
	                    audio.src=""+song1+".m4a";
	                    audio.play();
	                    btn.src="pause.png";
	                    allLi[i-1].style.background="#f2f2f2";
	                    allLi[i-1].style.color="gray";
	                    allLi[i-1].style.opacity="0.9";  
	                    allLi[i].style.background = "";
	                    allLi[i].style.color="white";
	                    document.getElementById("cover").src=""+song1+".jpg";
	                    break;  
	                }
				}
			}
		}
		function after(){
			var allLi = document.getElementById("playlist").getElementsByTagName("li");
			var aa=decodeURI(audio.src).replace(/\s+/g,"");
	        var index=aa.lastIndexOf("\/");  
			aa=aa.substring(index+1, aa.length).replace(/.m4a/,"");
			for(var i=0,len=allLi.length;i<len-1;i++){
				var bb=getsong(i).replace(/(^\s*)/g, "");
				if(aa==bb){
					var songid1=allLi[i+1].innerHTML.split(".");
	            	var song1=songid1[1].replace(/\s+/g,"");
                    audio.src=""+song1+".m4a";
                    audio.play();
                    btn.src="pause.png";
                    allLi[i+1].style.background="#f2f2f2";
                    allLi[i+1].style.color="gray";
                    allLi[i+1].style.opacity="0.9";  
                    allLi[i].style.background = "";
                    allLi[i].style.color="white";
                    document.getElementById("cover").src=""+song1+".jpg";
                    break;  
                }
			}
			if(aa==getsong(allLi.length-1)){
				audio.src=""+getsong(0)+".m4a";
                    audio.play();
                    btn.src="pause.png";
                    allLi[allLi.length-1].style.background = "";
                    allLi[allLi.length-1].style.color="white";
			}  
		}
		var progress=document.getElementById("progress");
		var audio=document.getElementById("v1");
		progress.onclick = function(e){
	        var event = e || window.event;
	        audio.currentTime = (event.offsetX / this.offsetWidth) * audio.duration;
	    };
	    document.getElementById("playlist").onclick = function(e){
	            e = e || window.event;
	            var target = e.srcElement || e.target,
	                tagName = target.tagName.toLowerCase(),
	                allLi = document.getElementById("playlist").getElementsByTagName("li");
	             
	            for(var i=0,len=allLi.length;i<len;i++){
	                if(target == allLi[i]){
	                	var songid=allLi[i].innerHTML.split(".");
	                	var song=songid[1].replace(/\s+/g,"");
	                    audio.src=""+song+".m4a";
	                    audio.play();
	                    btn.src="pause.png";
	                    document.getElementById("cover").src=""+song+".jpg";
	                    allLi[i].style.background="#f2f2f2";
	                    allLi[i].style.color="gray";
	                    allLi[i].style.opacity="0.9";

	                }else{
	                    allLi[i].style.background = "";
	                    allLi[i].style.color="white";
	                }
	            }
	             
	        };