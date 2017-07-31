    var arr = [];
	var c = document.getElementById("c");
	var ctx = c.getContext('2d');
	var rose = new Image();
	rose.src = "/images/rose2.png";
	rose.onload = function()
	{
		for(var i=0; i<99; i++)
		{
			//随机生成x y的坐标
			var r = new Rose();
			arr.push(r);
		}
		
		//设置循环任务
		setInterval(function(){
			//清除画布
			ctx.clearRect(0,0,1000,600);
			arr.forEach(function(item){						
				item.draw();						
			})
		},40);
	}
	
	class Rose
	{
		constructor()
		{
			this.x = Math.random()*(1000-80);
			this.y = Math.random()*(600-80);
			this.scale = (Math.random()*4)/10 + 0.6;	
		}
					
		
		draw()
		{
			this.y = this.y + 5;
			//更改y值					
			ctx.save();
			ctx.scale(this.scale,this.scale);				
			ctx.drawImage(rose, this.x, this.y, 60,60);
			ctx.restore();	
			
			if(this.y>=600/this.scale)
			{
				this.y = -80;
			}
		}
	}