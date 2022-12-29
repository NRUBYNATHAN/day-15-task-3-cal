let output=document.querySelector(".topinput");
function btn(num){
    output.value +=num;
   
   
   
    }
  
   
function cal(){
    try{
        output.value=eval(output.value);
        
    }catch(err){
        alert("invalid")
    }
}
function delfull(){
    output.value=''
}
function del(){
    output.value=output.value.slice(0,-1);
}