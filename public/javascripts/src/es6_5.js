class Animal {
    constructor(){
        this.type = 'animal'
    }
   /* says(say){
    	var self = this;
        setTimeout(function(){
            console.log(self.type + ' says ' + say)
        }, 1000)
    }*/
   
   /*says(say){    	
        setTimeout(function(){
            console.log(this.type + ' says ' + say)
        }.bind(this), 1000)
    }*/
   
   says(say)
   {
   	   setTimeout(()=>{
   	   	console.log(this.type + ' says ' + say);
   	   },1000);
   }

}

var a = new Animal();

a.says("helloworld");
