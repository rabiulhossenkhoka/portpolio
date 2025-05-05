let ok= document.getElementById("ok");
let cont= document.getElementById("cont");
let pop= document.getElementById("pop")

cont.addEventListener("click",function(){
    pop.style.visibility='visible'

})
ok.addEventListener("click",function(){
    pop.style.visibility='hidden'

})

