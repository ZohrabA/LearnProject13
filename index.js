let cavab = document.getElementById("cavab");
let lastcavab = document.getElementById("lastcavab");
let sil = document.getElementById("sil");
let res = document.getElementById("res");
let equal = document.getElementById("equal");
let footer = [...document.querySelectorAll("#footer span")];




footer.map((a)=>{
    a.addEventListener("click", (e)=>{

   let okey =   e.target.innerText
   let oldu = cavab.innerText.slice(-1)


   if(!cavab.innerText.length && okey == "*" || !cavab.innerText.length && okey == "/" || !cavab.innerText.length && okey == "+" || !cavab.innerText.length && okey == "-"){
       cavab.innerText = ""
    }else{
        
        cavab.innerText += a.innerText
        a.classList.add("ok")
        if(a.classList.contains("minus") && oldu == "+" || a.classList.contains("minus") && oldu == "-" || a.classList.contains("minus") && oldu == "*" || a.classList.contains("minus") && oldu == "/"){
cavab.innerText = cavab.innerText.substr(0, cavab.innerText.length -1)  
   }
    }




    setInterval(()=>{
        a.classList.remove("ok")
    }, 400)
})
})

sil.addEventListener("click", ()=>{
    cavab.innerText  = cavab.innerText.substr(0, cavab.innerText.length -1)
    if(cavab.innerText.length){
        lastcavab.innerText = eval(cavab.innerText)
    }else{
        lastcavab.innerText = ""
    }
sil.classList.add("okk")
    setInterval(()=>{
        sil.classList.remove("okk")
    }, 400)
})

res.addEventListener("click", ()=>{
    cavab.innerText  = ""
    lastcavab.innerText  = ""


    res.classList.add("okkk")
    setInterval(()=>{
        res.classList.remove("okkk")
    }, 400)
})


equal.addEventListener("click", ()=>{
    if(cavab.innerText.length){
        lastcavab.innerText = eval(cavab.innerText)
    }else{
        lastcavab.innerText = ""
    }


    equal.classList.add("okkkk")
    setInterval(()=>{
        equal.classList.remove("okkkk")
    }, 400)
})